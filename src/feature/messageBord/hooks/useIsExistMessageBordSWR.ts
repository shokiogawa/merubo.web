import { isExistMessageBord } from "../api/api";
import useSWR from "swr";

export type FetchMessageBord = {
  isExist: boolean | undefined;
  error: Error | undefined;
  isLoading: boolean | undefined;
};
export const useIsExistMessageBordSWR = (messageBordId: string) => {
  const fetcher = () => isExistMessageBord(messageBordId);
  const {
    data: isExist,
    error,
    isLoading,
  } = useSWR(`api/isExistMessageBord/${messageBordId}`, fetcher);

  return { isExist, error, isLoading };
};
