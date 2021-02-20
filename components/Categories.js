import React from "react";
import styled from "styled-components";
import colours from "./components/Colours";

// const Categories = (props) => (
//   <Container>
//     <Name>item1</Name>
//     <Name>item2</Name>
//     <Name>item3</Name>
//     <Name>item4</Name>
//   </Container>
// );

const Categories = (props) => <Name>{props.name}</Name>;

export default Categories;

const Container = styled.View``;

const Name = styled.Text`
  font-size: 16px;
  font-weight: 300;
  margin-left: 15px;
  color: ${colours.white};
`;
