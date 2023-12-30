import { firebaseStore } from "../../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { MessageBord, messageBordConverter } from "../../../types/MessageBord";

const fetchMessageBordTemplateList = async (
  categoryId: string
): Promise<MessageBord[]> => {
  const collectRef = collection(
    firebaseStore,
    "/category",
    categoryId,
    "/message_bord_template"
  ).withConverter(messageBordConverter);
  const snapshot = await getDocs(collectRef);
  return snapshot.docs.map((doc) => doc.data());
};

export default fetchMessageBordTemplateList;
