import { MessageBord, messageBordConverter } from "../../../types/MessageBord";
import { firebaseStore } from "../../../lib/firebase";
import {
  CollectionReference,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { registerCoeConverter } from "../../../types/RegisterCode";
import { Message, messageConverter } from "../../../types/Message";
import { MessageBordWithMessage } from "../../../types/MessageBordWithMessage";

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

/**
 *
 * @param messageBordId 寄せ書きデータ取得
 * @returns
 */
export const fetchMessageBord = async (
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

/**
 *
 * @param messageBordId メッセージ一覧を取得
 * @returns
 */
export const fetchMessageList = async (
  messageBordId: string
): Promise<Message[]> => {
  const messageCollectionref = collection(
    firebaseStore,
    "message_bords",
    messageBordId,
    "messages"
  ).withConverter(messageConverter);
  const messageQuery = query(messageCollectionref);
  const messageQuerySnapshot = await getDocs(messageQuery);
  const messageList: Message[] = [];
  messageQuerySnapshot.forEach((doc) => {
    messageList.push(doc.data());
  });
  return messageList;
};

/**
 *
 * @param messageBordId 寄せ書きと、メッセージ一覧取得メソッド
 * @returns
 */
export const fetchMessageBordithMessage = async (
  messageBordId: string
): Promise<MessageBordWithMessage> => {
  const messageBord = await fetchMessageBord(messageBordId);
  if (!messageBord) throw Error("寄せ書きが存在しません。");
  const messageList = await fetchMessageList(messageBordId);
  return { messageBord: messageBord, messageList: messageList };
};
