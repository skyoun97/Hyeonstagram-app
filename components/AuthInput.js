import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AppConstants from "../AppConstants";

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numberic",
    "email-address",
    "phone-pad",
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  onChange: PropTypes.func.isRequired,
};

const Container = styled.View`
  margin-bottom: 10px;
`;
const TextInput = styled.TextInput`
  width: ${AppConstants.width * 0.85};
  padding: 10px;
  background-color: ${(props) => props.theme.greyColor};
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const AuthInput = ({
  placeholder,
  value,
  keyboardType = "default",
  autoCapitalize = "none",
  onChange,
}) => {
  return (
    <Container>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </Container>
  );
};

AuthInput.propTypes = propTypes;

export default AuthInput;
