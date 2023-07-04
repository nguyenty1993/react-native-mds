import React from 'react';
import styled from 'styled-components/native';
const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props: { bgColor: any; onPress: any }) => props.bgColor};
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export interface PressableButtonProps {
  onPress: () => void;
  bgColor: string;
  title: string;
}

const PressableButton: React.FC<PressableButtonProps> = ({
  onPress,
  bgColor,
  title,
}) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;
