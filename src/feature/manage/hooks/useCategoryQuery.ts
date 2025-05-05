import fetchCategortList from "../api/fetchCategory";
import { useQuery } from "@tanstack/react-query";

const useCategoryQuery = () => {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["category_list"],
    queryFn: fetchCategortList,
  });
  return {
    isLoading,
    data,
    error,
    refetch,
  };
};

export default useCategoryQuery;
