import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { firebaseAuth } from "../../../lib/firebase";

export const login = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    const user = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return user;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
