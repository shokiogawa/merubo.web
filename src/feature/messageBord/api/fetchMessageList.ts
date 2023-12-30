import { firebaseStore } from "../../../lib/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Message, messageConverter } from "../../../types/Message";
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
