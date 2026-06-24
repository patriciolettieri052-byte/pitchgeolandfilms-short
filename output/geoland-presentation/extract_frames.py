import os
import subprocess

def extract_with_cv2(mp4_path, jpg_path):
    try:
        import cv2
        cap = cv2.VideoCapture(mp4_path)
        ret, frame = cap.read()
        if ret:
            cv2.imwrite(jpg_path, frame)
            cap.release()
            return True
        cap.release()
    except Exception as e:
        pass
    return False

def extract_with_ffmpeg(mp4_path, jpg_path):
    try:
        result = subprocess.run(
            ['ffmpeg', '-y', '-i', mp4_path, '-vframes', '1', '-f', 'image2', jpg_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        if result.returncode == 0:
            return True
    except Exception as e:
        pass
    return False

def main():
    assets_dir = os.path.join(os.path.dirname(__file__), 'public', 'assets')
    if not os.path.exists(assets_dir):
        print(f"Directory not found: {assets_dir}")
        return
        
    print(f"Scanning directory: {assets_dir}")
    mp4_files = [f for f in os.listdir(assets_dir) if f.lower().endswith('.mp4')]
    
    if not mp4_files:
        print("No .mp4 files found.")
        return

    success_count = 0
    skipped_count = 0
    failed_files = []

    for file in mp4_files:
        mp4_path = os.path.join(assets_dir, file)
        jpg_name = os.path.splitext(file)[0] + '.jpg'
        jpg_path = os.path.join(assets_dir, jpg_name)

        if os.path.exists(jpg_path):
            print(f"Skipping {file} (poster image already exists: {jpg_name})")
            skipped_count += 1
            continue

        print(f"Extracting first frame from {file}...")
        # Try OpenCV first
        success = extract_with_cv2(mp4_path, jpg_path)
        if not success:
            # Fallback to ffmpeg command
            success = extract_with_ffmpeg(mp4_path, jpg_path)

        if success:
            print(f"Successfully generated: {jpg_name}")
            success_count += 1
        else:
            print(f"FAILED to extract first frame from {file}")
            failed_files.append(file)

    print("\n--- RESULTS ---")
    print(f"Total MP4 files: {len(mp4_files)}")
    print(f"Successfully generated: {success_count}")
    print(f"Skipped (already exist): {skipped_count}")
    if failed_files:
        print(f"Failed files ({len(failed_files)}): {', '.join(failed_files)}")
        print("\nPlease install 'opencv-python' (pip install opencv-python) or make sure 'ffmpeg' is in your system PATH.")
    else:
        print("All frames extracted successfully!")

if __name__ == '__main__':
    main()
