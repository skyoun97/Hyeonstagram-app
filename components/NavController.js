import React from "react";
import styled from "styled-components";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import MainNavigation from "../navigation/MainNavigation";
import AuthNavigation from "../navigation/AuthNavigation";

const Container = styled.View`
  flex: 1;
`;
export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = useLogOut();
  return (
    <Container>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </Container>
  );
};
