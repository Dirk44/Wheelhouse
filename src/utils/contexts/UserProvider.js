import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const UserContext = createContext("");
const SetUserContext = createContext("");

export const UserProvider = ({ children }) => {
  const [cookies] = useCookies();
  const [value, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      if (cookies && cookies.jsis) {
        const user = window.jsi.getSession();
        if (user) {
          setUser(user.session.user.id);
        } else {
          setUser(false);
        }
      } else {
        setUser(false);
      }
      setLoaded(true);
    }
  }, [cookies, loaded, setLoaded, setUser]);

  if (!loaded) {
    return null;
  }
  return (
    <UserContext.Provider value={value}>
      <SetUserContext.Provider value={setUser}>{children}</SetUserContext.Provider>
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const user = useContext(UserContext);
  if (user === undefined) {
    throw new Error("useUser must be used withing an UserProvider");
  }
  return user;
};
