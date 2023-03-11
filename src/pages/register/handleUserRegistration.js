import { isPasswordConfirmed } from "./isPasswordConfirmed";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export const handleUserRegistration = async (e) => {
  e.preventDefault();
  let displayName = e.target.username.value;
  let email = e.target.email.value;
  let password = e.target.password.value;
  let passwordRepeat = e.target.password_repeat.value;

  try {
    //if not the same password
    if (!isPasswordConfirmed(password, passwordRepeat)) {
      return true;
      //   setErr(true);
      //   alert("passwords not matching");
    } else {
      // otherwise a new userr is created
      //   setErr(false);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // a new user inside the users collection
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
    return err;
  }
};
