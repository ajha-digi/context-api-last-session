import { useState, useEffect, useMemo } from "react";
import { RootContext } from "./RootContext";
import { getUser } from "../services";

const RootProvider = ({ children }) => {
  const [age, setAge] = useState(23);
  const [user, setUser] = useState({});
  const fetchAllUsers = async () => {
    const data = await getUser();
    setUser(data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const value = useMemo(() => ({ age, setAge, user }), [age, setAge, user]);
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};
export { RootProvider };
