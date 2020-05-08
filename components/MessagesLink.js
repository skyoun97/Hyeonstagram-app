import React from "react";
import styled from "styled-components";
import * as MainNavigation from "../navigation/MainNavigation";

const Container = styled.TouchableOpacity``;

const Text = styled.Text``;

export default () => (
  <Container onPress={() => MainNavigation.navigate("Messages", {})}>
    <Text>Messages</Text>
  </Container>
);
