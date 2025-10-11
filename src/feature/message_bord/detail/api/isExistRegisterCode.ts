import { doc, getDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../lib/firebase";
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
