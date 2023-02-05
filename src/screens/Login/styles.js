import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const FormArea = styled.View`
  flex: 18;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Form = styled.View`
  height: 50%;
  width: 80%;
  align-items: center;
  justify-content: space-around;
`;

export const TextLink = styled.Text`
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const Footer = styled.View`
  align-items: flex-end;
  width: 80%;
  flex: 1;
  background-color: #fff;
`;
