// Home.js
import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
import { SIZES, icons, images } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { SafeAreaView } from "react-native-safe-area-context";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

// Assuming navigation is passed correctly through props
export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      ),
      headerRight: () => (
        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
      ),
      headerTitle: "",
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
      {/* Your content here */}
    </SafeAreaView>
  );
}
