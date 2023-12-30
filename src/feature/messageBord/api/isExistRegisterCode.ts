import { firebaseStore } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
/**
 * 寄せ書きの存在チェック
 * @param messageBordId
 * @returns
 */
export const isExistMessageBord = async (
  messageBordId: string
): Promise<boolean> => {
  const messageBordRef = doc(firebaseStore, "message_bords", messageBordId);
  const isExist = (await getDoc(messageBordRef)).exists();
  return isExist;
};
