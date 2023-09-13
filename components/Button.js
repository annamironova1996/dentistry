import React from "react";
import styled from "styled-components";

const AllButton = ({ children, color }) => {
  return (
    <ButtonWrapper color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

 AllButton.defaultProps = {
    color: '#2a86ff'
 }

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 30px;
  background: ${props => props.color};
  height: 45px;
  justify-content: center;
  align-items: center;
`;

export default AllButton;
