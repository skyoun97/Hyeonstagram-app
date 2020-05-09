import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppConstants from "../../AppConstants";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Logo = styled.Image`
  width: ${AppConstants.width / 2.3};
  height: 100px;
`;

const Touchable = styled.TouchableOpacity``;
const SignUpButton = styled.View`
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  width: ${AppConstants.width * 0.9};
  margin: 20px 50px;
  border-radius: 4px;
`;
const SignUpButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const LoginButton = styled.View``;
const LoginButtonText = styled.Text`
  text-align: center;
  font-weight: 400;
  color: ${(props) => props.theme.blueColor};
`;

const Text = styled.Text``;

export default ({ navigation }) => (
  <View>
    <Logo resizeMode={"contain"} source={require("../../assets/logo.png")} />
    <Touchable onPress={() => navigation.navigate("Signup")}>
      <SignUpButton>
        <SignUpButtonText>Create New Account</SignUpButtonText>
      </SignUpButton>
    </Touchable>
    <Touchable onPress={() => navigation.navigate("Login")}>
      <LoginButton>
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>
    </Touchable>
  </View>
);
