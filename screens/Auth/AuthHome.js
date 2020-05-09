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
  width: ${AppConstants.width / 2.5};
`;

const ButtonContainer = styled.TouchableOpacity``;
const Button = styled.View`
  background-color: ${(props) => props.theme.blueColor};
`;
const ButtonText = styled.Text`
  color: white;
`;

const Text = styled.Text``;

export default ({ navigation }) => (
  <View>
    <Logo resizeMode={"contain"} source={require("../../assets/logo.png")} />
    <ButtonContainer onPress={() => navigation.navigate("Login")}>
      <Button>
        <ButtonText>I have an account</ButtonText>
      </Button>
    </ButtonContainer>
    <ButtonContainer onPress={() => navigation.navigate("Login")}>
      <Button>
        <ButtonText>Create New Account</ButtonText>
      </Button>
    </ButtonContainer>
  </View>
);
