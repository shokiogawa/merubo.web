import { firebaseStore } from "../../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Message, messageConverter } from "../../../types/Message";

const createMessage = async (
  messageBordId: string,
  message: Message
): Promise<void> => {
  try {
    const messageRef = doc(
      firebaseStore,
      "message_bords",
      messageBordId,
      "messages",
      message.id
    ).withConverter(messageConverter);
    await setDoc(messageRef, message);
  } catch (err) {
    throw err;
  }
};

export default createMessage;
