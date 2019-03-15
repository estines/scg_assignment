import React, { useState } from "react";
import Layout from "../components/Layout";
import { TextInput, Text, View, ScrollView } from "react-native";
import {
  VerticalContainer,
  ContentTitle,
  ContentMsg,
  TouchBtn
} from "../components/common";

const TestScreen = ({ navigation: { navigate } }) => {
  const [str, setStr] = useState("");
  const [array, setArray] = useState(null);

  const onTextChanged = text => {
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(text) && text !== "") {
      alert("Please fill only number");
    } else {
      setStr(text);
    }
  };

  const plusTwoDifference = n => {
    let initial = 3;
    let diff = 2;
    let arr = [];
    for (let i = 0; i < n; i++) {
      initial += diff * i;
      arr.push(initial);
    }
    setArray(arr);
  };

  return (
    <Layout title="Test" navigate={navigate}>
      <VerticalContainer>
        <ContentTitle>Assignment</ContentTitle>
        <ContentMsg>
          create function in term of x to find the next value in the given
          sequence: 3, 5, 9, 15, and so forth.
        </ContentMsg>
        <ContentMsg>Fill times you need (Max 2 digits)</ContentMsg>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 3 }}>
            <TextInput
              value={str}
              keyboardType="number-pad"
              onChangeText={onTextChanged}
              blurOnSubmit={true}
              maxLength={2}
              style={{ height: 30, backgroundColor: "#eae8e8" }}
            />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchBtn
              style={{ backgroundColor: "#ee2524" }}
              onPress={() => plusTwoDifference(Math.round(parseInt(str)))}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Calculate
              </Text>
            </TouchBtn>
          </View>
        </View>
        <ScrollView style={{ marginTop: 20 }}>
          <View style={{ alignItems: "center" }}>
            {Array.isArray(array) &&
              array.map((result, index) => (
                <Text
                  key={index}
                  style={{
                    fontSize: 18,
                    color: "#000",
                    marginTop: 5,
                    marginBottom: 5
                  }}
                >
                  {result}
                </Text>
              ))}
          </View>
        </ScrollView>
      </VerticalContainer>
    </Layout>
  );
};

export default TestScreen;
