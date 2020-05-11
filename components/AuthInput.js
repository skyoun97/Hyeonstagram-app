import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const Container = styled.View``;
const TextInput = styled.TextInput``;

const AuthInput = ({ placeholder, value }) => {
  return (
    <Container>
      <TextInput placeholder={placeholder} />
    </Container>
  );
};

AuthInput.propTypes = propTypes;

export default AuthInput;
