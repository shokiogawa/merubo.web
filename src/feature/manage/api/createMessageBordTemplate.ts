import { firebaseStore } from "../../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
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
    await setDoc(messageBordRef, messageBord).then(() => {});
  } catch (err) {
    throw err;
  }
};
