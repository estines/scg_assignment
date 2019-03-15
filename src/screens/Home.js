import React from "react";
import Layout from "../components/Layout";
import { Container, ContentMsg } from "../components/common";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <Layout title="Home" navigate={navigate}>
      <Container>
        <ContentMsg onPress={() => navigate("Test")}>This is a Home Screen</ContentMsg>
      </Container>
    </Layout>
  );
};

export default HomeScreen;
