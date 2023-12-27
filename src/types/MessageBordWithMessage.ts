import { Message } from "./Message";
import { MessageBord } from "./MessageBord";

export type MessageBordWithMessage = {
  messageBord: MessageBord;
  messageList: Message[];
};
