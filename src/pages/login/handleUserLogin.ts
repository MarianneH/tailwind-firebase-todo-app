import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const handleUserLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return { failed: false, user: user };
  } catch (e) {
    return { failed: true, user: null };
  }
};
