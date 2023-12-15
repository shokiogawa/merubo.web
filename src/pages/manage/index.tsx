import { NextPage } from "next";
import CategoryListComponent from "../../feature/manage/component/CategoryList";
import useIsLogin from "../../hooks/UseIsLogin";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../components/FirebaseAuthProvider";

const Manage: NextPage = () => {
  const userContext = useContext(FirebaseAuthContext);
  useIsLogin("/login");
  if (userContext.currentUser) {
    return (
      <section className="category">
        <CategoryListComponent />
      </section>
    );
  } else {
    return (
      <section>
        <p>ログインしていません。</p>
      </section>
    );
  }
};

export default Manage;
