import { isPasswordConfirmed } from "./isPasswordConfirmed";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export const handleUserRegistration = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  let displayName = e.currentTarget.username.value;
  let email = e.currentTarget.email.value;
  let password = e.currentTarget.password.value;
  let passwordRepeat = e.currentTarget.password_repeat.value;

  try {
    if (!isPasswordConfirmed(password, passwordRepeat)) {
      return true;
    } else {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

      await updateProfile(res.user, {
        displayName,
      });

      return false;
    }
  } catch (err) {
    console.error(err);
    return true;
  }
};
