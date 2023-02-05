import { createContext, useEffect, useState } from "react";
import useUser from "./useUser";

const useBalance = () => {
  const { user, loading: loadingUserData } = useUser();
  const [isVisible, setIsVisible] = useState(true);
  const [ammount, setAmmount] = useState(0);

  useEffect(() => {
    setAmmount(user?.ammount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
  }, [user]);

  const handleToggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return { ammount, isVisible, handleToggleVisible, user, loadingUserData };
};

export default useBalance;
