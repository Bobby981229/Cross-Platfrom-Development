import React from "react";
import styled from "styled-components/native";
import CustomButton from "./components/CustomButton";
import colours from "./components/Colours";
import Categories from "./components/Categories";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Titlebar>
          <Avatar source={require("./assets/avatar.png")} />
          <Title>Welcome Back !</Title>
          <Name>Dr. Shangyuan</Name>
          <Ionicons
            name="md-cart"
            size={32}
            color={colours.red}
            style={{ position: "absolute", right: 20, top: 5 }}
          />
        </Titlebar>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: ${colours.background};
  // justify-content: center;
  // align-items: center;
`;

const Titlebar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
  // justify-content: center;
  // align-items: center;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size = 20x;
  font-weight = 500;
  color: ${colours.white};
`;

const Name = styled.Text`
  font-size = 20x;
  color: ${colours.red};
  font-weight = blod;
`;

// const items = [
//   { text: "Avengers |" },
//   { text: "Thor |" },
//   { text: "Ironman |" },
//   { text: "Captain America |" },
//   { text: "Guardians |" },
//   { text: "Black Widow " },
//   { text: "Hawkeye " },
// ];
