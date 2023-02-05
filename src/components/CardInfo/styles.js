import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const CardInfo = styled.View`
  padding-top: 20px;
`;

export const Options = styled.View`
  width: ${Dimensions.get("screen").width}px;
  align-items: center;
`;
