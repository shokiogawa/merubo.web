import { MessageBordWithMessage } from "../../../types/MessageBordWithMessage";
import useSWR from "swr";
import { fetchMessageBordithMessage } from "../api/fetchMessageBordWithMessage";

export type FetchMessageBordWithMessage = {
  data: MessageBordWithMessage | undefined;
  error: Error | undefined;
  isLoading: boolean | undefined;
};
export const useMessageBordWithMessage = (messageBordId: string) => {
  const fetcher = () => fetchMessageBordithMessage(messageBordId);
  const { data, error, isLoading } = useSWR(
    `api/fetchMessageBordithMessage/${messageBordId}`,
    fetcher
  );

  return { data, error, isLoading };
};
