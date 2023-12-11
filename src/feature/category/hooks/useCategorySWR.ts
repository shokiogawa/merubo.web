import useSWR from "swr";
import { Category } from "../../../types/Category";
import fetchCategortList from "../api/fetchCategory";

export type FetchCategoryList = {
  categoryDatas: Array<Category> | undefined;
  error: Error | undefined;
};

export const useCategoryListSWR = (): FetchCategoryList => {
  const fetcher = () => fetchCategortList();
  const { data: categoryDatas, error } = useSWR("firebase/category", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { categoryDatas, error };
};
