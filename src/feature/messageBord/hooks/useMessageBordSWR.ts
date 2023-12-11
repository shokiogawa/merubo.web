import { type } from "os";
import useSWR from "swr";
import { MessageBord } from "../../../types/MessageBord";
import fetchMessageBord from "../api/fetchMessageBord";

export type FetchMessageBord = {
  messageBordData: MessageBord | undefined;
  error: Error | undefined;
};

export const useMessageBordSWR = (messageBordId: string): FetchMessageBord => {
  const fetcher = () => fetchMessageBord(messageBordId);
  const { data: messageBordData, error } = useSWR(
    messageBordId ? `firebaseFirestore/${messageBordId}` : null,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );
  return { messageBordData, error };
};
