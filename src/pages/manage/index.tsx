import { NextPage } from "next";
import Head from "next/head";
import useIsLogin from "../../hooks/UseIsLogin";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../components/FirebaseAuthProvider";
import ManagePresentation from "../../feature/manage/ManagePresentation";
import ManageContainer from "../../feature/manage/ManageContainer";

const Manage: NextPage = () => {
  const userContext = useContext(FirebaseAuthContext);
  useIsLogin("/login");
  if (userContext.currentUser) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <ManageContainer />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <section>
          <p>ログインしていません。</p>
        </section>
      </>
    );
  }
};

export default Manage;
