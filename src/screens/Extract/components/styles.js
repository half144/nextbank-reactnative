import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Bold = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const FlexCenter = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Transitions = styled.View``;

export const Resume = styled.View``;

export const Transition = styled.View`
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Ammount = styled.Text`
  font-size: 16px;
  color: ${(props) => props.color};
`;
