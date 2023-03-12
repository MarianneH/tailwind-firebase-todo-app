import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const handleUserLogin = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return [false, user];
  } catch (e) {
    return [true, null];
  }
};
