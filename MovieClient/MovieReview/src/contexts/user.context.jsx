import { createContext, useState, useEffect } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider (component)
export const UserProvider = ({ children }) => {
  // [useState]
  // -> const [state, setState] = useState(initialState);
  const [ currentUser, setCurrentUser ] = useState(null);
  const value = { currentUser, setCurrentUser };

  // why using useEffect? ->
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // it returns the UserContext.Provider tag
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

