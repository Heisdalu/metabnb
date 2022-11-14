import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [active, setActive] = useState(true);

  const func = () => {
    setActive((prev) => !prev);
  };

  const data = {
    active,
    toggle: func,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
