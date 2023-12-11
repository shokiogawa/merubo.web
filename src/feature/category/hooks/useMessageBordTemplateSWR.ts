import useSWR from "swr";
import { Category } from "../../../types/Category";
import { MessageBord } from "../../../types/MessageBord";
import fetchCategortList from "../api/fetchCategory";
import fetchMessageBordTemplateList from "../api/fetchMessageBordTemplate";

export type FetchMessageBordTemplateList = {
  messageBordTemplateDatas: Array<MessageBord> | undefined;
  error: Error | undefined;
};

export const useMessageBordTemplateListSWR = (
  categoryId: string
): FetchMessageBordTemplateList => {
  const fetcher = () => fetchMessageBordTemplateList(categoryId);
  const { data: messageBordTemplateDatas, error } = useSWR(
    `firebase/${categoryId}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { messageBordTemplateDatas, error };
};
