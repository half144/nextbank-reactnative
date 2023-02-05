import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/api";
import { useQueryClient } from "react-query";

const useSwitch = ({ state, type, cardId }) => {
  const [isEnabled, setIsEnabled] = useState(state);
  const { user } = useAuth();
  const queryClient = useQueryClient();

  useEffect(() => {
    setIsEnabled(state);
  }, [state]);

  const currentRequestBody = () => {
    const newOptions = {
      [type]: !isEnabled,
    };
    const requestBody = {
      cardId,
      userId: user,
      options: newOptions,
    };

    return requestBody;
  };

  const updateOptionsCard = useCallback(async () => {
    try {
      const requestBody = currentRequestBody();
      const res = await api.put("/card", requestBody);
      queryClient.invalidateQueries(["user"]);
    } catch (error) {
      console.log(error.response.data);
    }
  }, [isEnabled, type, cardId, user, queryClient]);

  const handleSwitch = () => {
    setIsEnabled((prev) => !prev);
    updateOptionsCard();
  };

  return [isEnabled, handleSwitch];
};

export default useSwitch;
