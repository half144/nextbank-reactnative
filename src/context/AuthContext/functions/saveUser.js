import { saveUserAndTokenInAsyncStorage } from "./AuthAsyncStorage";
import api from "../../../services/api";

export const setDefaultTokenInRequests = async (token) => {
  try {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } catch (error) {
    console.log(error);
  }
};

export const saveUser = async (user) => {
  try {
    await saveUserAndTokenInAsyncStorage(user);
    await setDefaultTokenInRequests(user.token);
  } catch (error) {
    console.log(error);
  }
};
