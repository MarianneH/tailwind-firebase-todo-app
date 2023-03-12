import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

export const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
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
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    async function fetchTodosFromDb() {
      let todos = [];
      const querySnapshot = await getDocs(
        collection(db, "users", currentUser.uid, "todos")
      );
      querySnapshot.forEach((doc) => {
        todos.push(doc.id);
      });
    }
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
