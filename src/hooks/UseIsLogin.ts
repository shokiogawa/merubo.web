import { useEffect } from "react";
import { firebaseAuth } from "../lib/firebase";
import { useRouter } from "next/navigation";

const useIsLogin = (redirectPath: string) => {
  const router = useRouter();
  useEffect(() => {
    // 認証
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
      } else {
        router.push(redirectPath);
      }
    });
  }, [redirectPath, router]);
};

export default useIsLogin;
