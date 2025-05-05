import { NextPage } from "next";
import useIsLogin from "../../hooks/UseIsLogin";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../components/FirebaseAuthProvider";
import ManagePresentation from "../../feature/manage/ManagePresentation";
import ManageContainer from "../../feature/manage/ManageContainer";

const Manage: NextPage = () => {
  const userContext = useContext(FirebaseAuthContext);
  useIsLogin("/login");
  if (userContext.currentUser) {
    return <ManageContainer />;
  } else {
    return (
      <section>
        <p>ログインしていません。</p>
      </section>
    );
  }
};

export default Manage;
