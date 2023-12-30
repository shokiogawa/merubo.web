import { firebaseStore } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { registerCoeConverter } from "../../../types/RegisterCode";
/**
 * 登録コードが一致しているかどうかの確認。
 * @param registerCode
 * @param messageBordId
 * @returns
 */
export const checkIsCorrectCode = async (
  registerCode: string,
  messageBordId: string
): Promise<boolean> => {
  const coderef = doc(
    firebaseStore,
    "register_code",
    registerCode
  ).withConverter(registerCoeConverter);

  const docSnap = await getDoc(coderef);
  const data = docSnap.data();
  if (!data) return false;
  return data.messageBordId === messageBordId;
};
