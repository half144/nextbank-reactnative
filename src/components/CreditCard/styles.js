import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Card = styled.View`
  height: 240px;
  width: ${Dimensions.get("screen").width - 40}px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const SmallText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: white;
`;

export const CardNumber = styled.Text`
  color: white;
  font-size: 25px;
`;

export const CardDetails = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  padding-left: 20px;
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
`;
