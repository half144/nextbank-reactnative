import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import api from "../../../../../services/api";

const pixTransfer = async (resumeTransition) => {
  try {
    const res = await api.post("/pix/send", resumeTransition);
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

const usePix = (resumeTransition) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isSuccess, data } = useMutation(pixTransfer, {
    onSettled: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  // pix for example 66359195255

  useEffect(() => {
    const handlePix = async () => {
      const result = await mutateAsync(resumeTransition);
    };
    handlePix();
  }, []);

  return { isLoading, isSuccess, data };
};

export default usePix;
