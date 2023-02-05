import api from "../api";

const login = async (credentials) => {
  try {
    const res = await api.post("/user/login", credentials);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const register = async (credentials) => {
  try {
    const res = await api.post("/user/register", credentials);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
const getUser = async (id) => {
  try {
    const res = await api.get(`/user/get/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const UserServices = {
  login,
  register,
  getUser,
};
