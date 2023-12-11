import { firebaseStore } from "../../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Message, messageConverter } from "../../../types/Message";
import { MessageBord, messageBordConverter } from "../../../types/MessageBord";

export const createMessageBordTemplate = async (
  categoryId: string,
  messageBord: MessageBord
): Promise<void> => {
  try {
    const messageBordRef = doc(
      firebaseStore,
      "category",
      categoryId,
      "message_bord_template",
      messageBord.id
    ).withConverter(messageBordConverter);
    await setDoc(messageBordRef, messageBord).then(() => {
      console.log("成功");
    });
  } catch (err) {
    console.log(err);
  }
};
