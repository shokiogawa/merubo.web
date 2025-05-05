import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { login } from "../api/api";
import { LogininputParam } from "../type/LoginInputParam";

export const useLoginMutaton = (
  options?: UseMutationOptions<any, any, LogininputParam>
) => {
  const loginMutation = useMutation({
    mutationFn: async (data: LogininputParam) => {
      return await login(data.email, data.password);
    },
    ...options,
  });
  return { loginMutation };
};
