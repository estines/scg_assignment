import React, { useEffect } from "react";
import { Container, Logo } from "../components/common";

const logo = {
  uri: "http://thedialoguebytbs.com/wp-content/uploads/2017/02/11.png"
};

const SplashScreen = ({ navigation: { navigate } }) => {
  useEffect(() => {
    setTimeout(() => navigate("App"), 3000);

    return clearTimeout(() => navigate("App"), 3000);
  });

  return (
    <Container bgColor="#000">
      <Logo source={logo} />
    </Container>
  );
};

SplashScreen.navigationOptions = {
  header: null
};

export default SplashScreen;
