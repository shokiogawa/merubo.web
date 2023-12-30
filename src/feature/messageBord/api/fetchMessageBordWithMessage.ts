import { MessageBordWithMessage } from "../../../types/MessageBordWithMessage";
import fetchMessageBord from "./fetchMessageBord";
import { fetchMessageList } from "./fetchMessageList";
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
