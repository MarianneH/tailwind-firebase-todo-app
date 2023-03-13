import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const handleUserLogout = () => {
  signOut(auth)
    .then(() => {
      return null;
    })
    .catch((err) => {
      console.error(err);
    });
};
