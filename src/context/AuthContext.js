import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
      }
      setLoading(false);
      return null;
    });

    return () => {
      unsub();
    };
  }, []);

  const isLoggedIn = (currentUser) => {
    if (currentUser) {
      return true;
    }
    return false;
  };

  const logOut = (auth) => {
    //does this need a prop to work?
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  async function fetchTodosFromDb() {
    if (currentUser) {
      let todos = [];
      const querySnapshot = await getDocs(
        collection(db, "users", currentUser.uid, "todos")
      );
      querySnapshot.forEach((doc) => {
        todos.push(doc.id);
      });
    }
  }

  useEffect(() => {
    if (currentUser) {
      fetchTodosFromDb();
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoggedIn,
        logOut,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
