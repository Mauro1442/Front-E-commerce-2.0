import { useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider(props) {


  const [userLogin, setUserLogin] = useState(false);



  const loginUser = () => {
    setUserLogin(true);
  };
  const logoutUser = () => {
    setUserLogin(false);
  };

  JSON.parse(window.localStorage.getItem("access_token"))? setTimeout(() => {loginUser()}, 50)  : setTimeout(() => {logoutUser()}, 50) ;

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        loginUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
