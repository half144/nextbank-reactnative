import styled from "styled-components/native";

export const OptionInline = styled.Pressable`
  width: 90%;
  margin-top: 20px;
  align-items: center;
  height: 70px;
  flex-direction: row;
  border-radius: 8px;
`;

export const SmallText = styled.Text`
  font-weight: ${(props) => (!props.noBold ? "bold" : 300)};
  font-size: 12px;
  margin-left: 20px;
`;

export const IconsArea = styled.View`
  width: 10%;
`;

export const Paragraph = styled.Text`
  font-size: 14px;
  color: ${(props) => props.color || "black"};
`;

export const BoldText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
