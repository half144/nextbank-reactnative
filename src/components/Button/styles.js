import styled from "styled-components/native";

export const ButtonElement = styled.TouchableOpacity`
  width: ${(props) => props.width || "100%"};
  height: 50px;
  background-color: ${(props) => props.theme.primary};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: ${(props) => (props.margin ? 20 : 0)}px;
`;

export const Value = styled.Text`
  color: white;
  font-weight: bold;
`;
