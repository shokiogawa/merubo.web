import { firebaseStore } from "../../../lib/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { Category, categoryConverter } from "../../../types/Category";

const fetchCategortList = async (): Promise<Category[]> => {
  const collectRef = collection(firebaseStore, "/category").withConverter(
    categoryConverter
  );
  const snapshot = await getDocs(collectRef);
  return snapshot.docs.map((doc) => doc.data());
};

export default fetchCategortList;

// 共通化に関して
const functionA = () =>{
// A専用の処理
// 重複した処理
}

const functionB = () =>{
// B専用の処理
// 重複した処理
}

// A、Bを共通化
const functionAB = (hoge: string) =>{
  if(hoge === "A"){
    // Aの時はAの処理
  }else if(hoge === "B"){
    // Bの時はBの処理
  }
  // 共通の処理
} 