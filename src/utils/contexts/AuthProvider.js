import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
// import graphqlClient from "../graphqlClient";

const AuthContext = createContext("");
const SetAuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [cookies] = useCookies();
  const [value, setAuth] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      if (cookies && cookies.jsis) {
        setAuth(true);
        // console.log("Web-Token", cookies.jsis);
        // graphqlClient.setHeader("Web-Token", cookies.jsis);
      } else {
        setAuth(false);
      }
      setLoaded(true);
    }
  }, [cookies, loaded, setLoaded, setAuth]);

  if (!loaded) {
    return null;
  }
  return (
    <AuthContext.Provider value={value}>
      <SetAuthContext.Provider value={setAuth}>{children}</SetAuthContext.Provider>
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth === undefined) {
    throw new Error("useAuth must be used withing an AuthProvider");
  }
  return auth;
};
