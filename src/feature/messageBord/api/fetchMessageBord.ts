import { MessageBord, messageBordConverter } from "../../../types/MessageBord";
import { firebaseStore } from "../../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const fetchMessageBord = async (
  messageBordId: string
): Promise<MessageBord | undefined> => {
  const messageBordRef = doc(
    firebaseStore,
    "message_bords",
    messageBordId
  ).withConverter(messageBordConverter);
  const docSnap = await getDoc(messageBordRef);
  const data = docSnap.data();
  return data;
};

export default fetchMessageBord;
