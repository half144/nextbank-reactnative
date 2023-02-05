import { useQuery } from "react-query";
import { useAuth } from "../context/AuthContext";
import { UserServices } from "../services/http/UserServices";

const useUser = () => {
  const { user: userId } = useAuth();

  const getUser = async () => {
    try {
      if (!userId) return;
      const res = await UserServices.getUser(userId);
      return res;
    } catch (error) {
      console.log("have a error");
      console.log(error.response.data);
    }
  };

  const { data: user, isLoading: loading } = useQuery(["user"], getUser, {
    refetchInterval: 1000 * 10,
  });

  return {
    user,
    loading,
  };
};

export default useUser;
