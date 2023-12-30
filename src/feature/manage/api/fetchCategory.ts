import { firebaseStore } from "../../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Category, categoryConverter } from "../../../types/Category";

const fetchCategortList = async (): Promise<Category[]> => {
  const collectRef = collection(firebaseStore, "/category").withConverter(
    categoryConverter
  );
  const snapshot = await getDocs(collectRef);
  return snapshot.docs.map((doc) => doc.data());
};

export default fetchCategortList;
