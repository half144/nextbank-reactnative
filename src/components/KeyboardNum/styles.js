import styled from "styled-components/native";

export const ContainerNum = styled.View`
  height: 50%;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const NumRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Num = styled.Pressable`
  background-color: #fff;
  height: 100%;
  width: 33%;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  border-color: #f5f5f5;
  border-radius: 10px;
`;

export const NumValue = styled.Text`
  font-size: 30px;
`;
