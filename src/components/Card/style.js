import styled from "styled-components/native";

export const CardElement = styled.Pressable`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background-color: white;
  border: 2px ${(props) => props.theme.primary};
  margin-left: ${(props) => (props.hasMargin ? "9px" : "0px")};
`;

export const Text = styled.Text`
  margin-top: 8px;
  font-weight: bold;
  font-size: 10px;
`;

export const IconArea = styled.View`
  height: 30%;
`;
