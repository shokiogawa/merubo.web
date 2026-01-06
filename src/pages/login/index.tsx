import Head from "next/head";
import LoginContainer from "../../feature/login/LoginContainer";

const LoginPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <LoginContainer />
    </>
  );
};

export default LoginPage;
