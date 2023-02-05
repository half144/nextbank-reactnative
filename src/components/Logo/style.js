import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const ImageElement = styled.Image`
  height: 60%;
  width: 60%;
`;

export const Container = styled.View`
  width: 50%;
  height: 80px;
  margin-top: ${StatusBar.currentHeight}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;
