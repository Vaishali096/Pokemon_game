import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
