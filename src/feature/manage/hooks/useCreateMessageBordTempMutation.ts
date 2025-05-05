import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { CreateMessageBordTempParam } from "../type/CreateMessageBordTempParam";
import { createMessageBordTemplate } from "../api/createMessageBordTemplate";

export const useCreateMessageBordTemplateMutation = (categoryId: string) => {
  const query = useQueryClient();
  const createMutation = useMutation({
    mutationFn: async (data: CreateMessageBordTempParam) => {
      return await createMessageBordTemplate(data.categoryId, data.data);
    },
    onSuccess: (data) => {
      query.invalidateQueries({
        queryKey: ["message_bord_template_list" + categoryId],
      });
    },
    onError: (error) => {},
  });
  return { createMutation };
};

// import { useMutation, UseMutationOptions } from "@tanstack/react-query";
// import { login } from "../api/api";
// import { LogininputParam } from "../type/LoginInputParam";

// export const useLoginMutaton = (
//   options?: UseMutationOptions<any, any, LogininputParam>
// ) => {
//   const loginMutation = useMutation({
//     mutationFn: async (data: LogininputParam) => {
//       return await login(data.email, data.password);
//     },
//     ...options,
//   });
//   return { loginMutation };
// };
