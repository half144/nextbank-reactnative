import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components/native";
import AuthProvider from "./src/context/AuthContext";
import Router from "./src/routes";

const theme = {
  primary: "red",
  primaryShadow: "#E96600",
};

const queryClient = new QueryClient();

queryClient.defaultQueryOptions({
  keepPreviousData: true,
  staleTime: 1000 * 20,
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <StatusBar style="auto" />
            <Router />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
