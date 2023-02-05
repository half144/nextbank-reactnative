import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserAndTokenInAsyncStorage = async (user) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user.id));
    await AsyncStorage.setItem("token", user.token);
  } catch (error) {
    console.log(error);
  }
};

export const getUserAndTokenInAsyncStorage = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    const token = await AsyncStorage.getItem("token");

    return { user, token };
  } catch (error) {
    console.log(error);
  }
};

export const removeUserAndTokenInAsyncStorage = async () => {
  try {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
};
