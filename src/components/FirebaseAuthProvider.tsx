import { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../lib/firebase";
import { useRouter } from "next/router";

type CurrentUser = {
  displayName: string | null;
  phoneNumber: string | null;
  uid: string;
};
type AuthContextState = {
  currentUser: CurrentUser | null;
};

type Props = {
  allowPaths: [string] | null;
  children: React.ReactNode;
};

// 状態管理 (子コンポーネントに使える？)
export const FirebaseAuthContext = createContext<AuthContextState>({
  currentUser: null,
});

const FirebaseAuthProvider: React.FC<Props> = ({ allowPaths, children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const router = useRouter();
  const pathName = router.pathname;

  const isAllowPath = allowPaths?.find((_) => _ == pathName);
  useEffect(() => {
    const unsubsc = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return () => {
      // アンマウント時に購読解除
      unsubsc();
    };
  }, [currentUser]);
  return (
    <FirebaseAuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
