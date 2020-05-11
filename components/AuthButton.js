import React from "react";
import styled from "styled-components";
import AppConstants from "../AppConstants";
import PropTypes from "prop-types";

const propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const Touchable = styled.TouchableOpacity``;
const Container = styled.View`
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  width: ${AppConstants.width * 0.85};
  border-radius: 4px;
`;
const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const AuthButton = ({ text, onPress }) => (
  <Touchable onPress={onPress}>
    <Container>
      <Text>{text}</Text>
    </Container>
  </Touchable>
);

AuthButton.propTypes = propTypes;

export default AuthButton;
