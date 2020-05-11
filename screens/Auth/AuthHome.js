import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppConstants from "../../AppConstants";
import AuthButton from "../../components/AuthButton";

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

const LoginButton = styled.View``;
const LoginButtonText = styled.Text`
  text-align: center;
  font-weight: 400;
  margin-top: 20px;
  color: ${(props) => props.theme.blueColor};
`;

export default ({ navigation }) => (
  <View>
    <Logo resizeMode={"contain"} source={require("../../assets/logo.png")} />
    <AuthButton
      text={"Create New Account"}
      onPress={() => navigation.navigate("Signup")}
    />

    <Touchable onPress={() => navigation.navigate("Login")}>
      <LoginButton>
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>
    </Touchable>
  </View>
);
