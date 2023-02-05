import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.View`
  margin-top: ${StatusBar.currentHeight + 20}px;
  width: 100%;
  background-color: #fff;
  height: 200px;
  flex-direction: row;
`;

export const UserDetailsArea = styled.View`
  width: 70%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const UserDetails = styled.View`
  width: 100%;
  padding-left: 30px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const BoldText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Balance = styled.View`
  font-size: 25px;
  font-weight: bold;
  align-items: center;
  flex-direction: row;
`;

export const Amount = styled.Text`
  font-size: 25px;
  font-weight: bold;
  padding-left: 10px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  margin-top: 10px;
`;

export const ServicesArea = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const OptionsArea = styled.View`
  width: 30%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
