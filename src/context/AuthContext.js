import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
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

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
