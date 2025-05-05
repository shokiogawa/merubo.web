import fetchMessageBordTemplateList from "../api/fetchMessageBordTemplate";
import { useQuery } from "@tanstack/react-query";

const useMessageBordTemplateListQuery = (categoryId: string) => {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["message_bord_template_list" + categoryId],
    queryFn: () => fetchMessageBordTemplateList(categoryId.toString()),
  });
  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useMessageBordTemplateListQuery;
