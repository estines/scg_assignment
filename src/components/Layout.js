import React from "react";
import { View } from "react-native";
import { Flex, Title, Header, Footer, MenuIcon, TouchBtn } from "./common";

const Layout = ({ children, title, navigate }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ backgroundColor: "white", height: 20 }} />
      <Header>
        <Title>{title}</Title>
      </Header>
      {children}
      <Footer>
        <Flex selected={title === "Home" ? true : false}>
          <TouchBtn onPress={() => navigate("Home")}>
            <MenuIcon source={require("../../assets/images/home.png")} />
          </TouchBtn>
        </Flex>
        <Flex selected={title === "Test" ? true : false}>
          <TouchBtn onPress={() => navigate("Test")}>
            <MenuIcon
              source={require("../../assets/images/logistics-delivery-truck-in-movement.png")}
            />
          </TouchBtn>
        </Flex>
        <Flex selected={title === "Food" ? true : false}>
          <TouchBtn onPress={() => navigate("Food")}>
            <MenuIcon source={require("../../assets/images/restaurant.png")} />
          </TouchBtn>
        </Flex>
      </Footer>
    </View>
  );
};

export default Layout;
