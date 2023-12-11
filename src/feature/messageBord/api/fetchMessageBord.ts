import { MessageBord, messageBordConverter } from "../../../types/MessageBord";
import { firebaseStore } from "../../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const fetchMessageBord = async (
  messageBordId: string
): Promise<MessageBord | undefined> => {
  console.log("ここだよ");
  console.log(messageBordId);
  const messageBordRef = doc(
    firebaseStore,
    "message_bords",
    messageBordId
  ).withConverter(messageBordConverter);
  const docSnap = await getDoc(messageBordRef);
  const data = docSnap.data();
  console.log(data);
  console.log(messageBordId);
  return data;
};

export default fetchMessageBord;
