import imageCompression from "browser-image-compression";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { firebaseStorage } from "../lib/firebase";
type compressedImageOption = {
  initialQuality: number;
};

// 画像保存メソッド
export const uploadImage = async (
  image: File,
  filePath: string,
  isCompress: boolean
): Promise<string> => {
  try {
    // 保存箇所指定
    const storageRef = ref(firebaseStorage, filePath);
    // 保存場所にアップ
    if (isCompress) {
      image = await compressImage(image);
    }
    const value = await uploadBytesResumable(storageRef, image);
    // URL取得
    return await getDownloadURL(value.ref);
  } catch (err) {
    throw err;
  }
};
// 画像圧縮メソッド
const compressImage = async (file: File): Promise<File> => {
  try {
    const options: compressedImageOption = {
      initialQuality: 0.6,
    };
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (err) {
    throw err;
  }
};
