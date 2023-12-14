import { useEffect } from "react";
import { firebaseAuth } from "../lib/firebase";
import { redirect } from "next/navigation";

const useIsLogin = (redirectPath: string) => {
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("ログインしてます。");
      } else {
        redirect(redirectPath);
      }
    });
  });
};

export default useIsLogin;
