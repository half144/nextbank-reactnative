import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Header = styled.View`
  margin-top: ${StatusBar.currentHeight + 20}px;
  height: 20%;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const AmmountSended = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const TransitionResume = styled.View`
  flex: 1;
  width: 100%;
`;
