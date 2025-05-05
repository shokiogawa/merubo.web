import { useRouter } from "next/router";
import { useLoginForm } from "./hooks/useLoginForm";
import { useLoginMutaton } from "./hooks/useLoginMutation";
import { LoginPresentation } from "./LoginPresentation";
import { useSnackbar } from "notistack";

const LoginContainer: React.FC = () => {
  const navigate = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { email, handlerEmail, password, handlerPassword } = useLoginForm();
  const { loginMutation } = useLoginMutaton({
    onSuccess: (data) => {
      enqueueSnackbar("ログインに成功しました", {
        variant: "success",
      });
      navigate.push("/manage");
    },
    onError: (error) => {
      enqueueSnackbar("ログインに失敗しました", {
        variant: "error",
      });
    },
  });
  return (
    <LoginPresentation
      email={email}
      password={password}
      handlerEmail={handlerEmail}
      handlerPassword={handlerPassword}
      signIn={async () => {
        await loginMutation.mutateAsync({
          email: email,
          password: password,
        });
      }}
    />
  );
};

export default LoginContainer;
