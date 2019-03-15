import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Layout from "../components/Layout";
import { VerticalContainer, ContentTitle } from "../components/common";
import axios from "axios";

const apiKey = "AIzaSyDB94pf4EPQNk-bpJnCFiD98TaijEa8EC8";

const FoodScreen = ({ navigation: { navigate } }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+Bangsue&key=${apiKey}`
      );

      if (response.status !== 200) {
        return alert("Failed to get restaurants from server");
      }

      setData(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <Layout title="Food" navigate={navigate}>
      <VerticalContainer noMargin="true">
        <ContentTitle style={{ marginLeft: 15 }}>
          All Restaurants in Bangsue
        </ContentTitle>
        <ScrollView style={{ marginTop: 15 }}>
          {Array.isArray(data) &&
            data.map((shop, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: index % 2 !== 0 ? "#fff" : "#D3D3D3",
                  paddingBottom: 5
                }}
              >
                <View
                  style={{
                    marginLeft: 15,
                    marginTop: 5,
                    flexDirection: "row"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Image
                      source={{ uri: shop.icon }}
                      style={{ width: "50%", height: 40 }}
                    />
                  </View>
                  <View style={{ flex: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>{shop.name}</Text>
                    <Text>Rating: {shop.rating}</Text>
                    <Text>Address : {shop.formatted_address}</Text>
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      </VerticalContainer>
    </Layout>
  );
};

export default FoodScreen;
