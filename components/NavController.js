import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import MainNavigation from "../navigation/MainNavigation";
import AuthHome from "../screens/Auth/AuthHome";

const Container = styled.View`
  flex: 1;
`;
export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = useLogOut();
  return (
    <Container>{isLoggedIn ? <MainNavigation /> : <AuthHome />}</Container>
  );
};
