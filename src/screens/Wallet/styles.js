import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.View`
  height: 35%;
  width: 100%;
  padding-top: ${StatusBar.currentHeight}px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  border-bottom-left-radius: 30px;
`;

export const Ammount = styled.Text`
  color: white;
  font-size: 42px;
  font-weight: bold;
`;

export const BankAccount = styled.Text`
  font-size: 14px;
  color: white;
`;

export const BankAccountArea = styled.View`
  width: 100%;
  height: 20%;
  padding-left: 20px;
  position: absolute;
  top: ${StatusBar.currentHeight + 10}px;
`;

export const Main = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;
