import { Alert, Pressable, Platform, FlatList, Text, Image, View, StyleSheet } from "react-native";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/ProfileHeader";
import IMAGES from "@/data/images"

/**
 * Main screen for the Instagram-style profile clone.
 * The page is split into reusable header/footer components with the image grid
 * and the Alert button is controlled from this screen.*/

const Index =() => {

  /**
   * React Native's Alert works on iOS and Android.
   * On web, window.alert is used so the same button also works in the browser.
   * Again, I mostly did this in the web version so I made sure both worked*/
  const handleAlert = () => {
  if (Platform.OS === "web") {
    window.alert("Alert Button pressed");
  } else {
    Alert.alert("Alert Button pressed");
  }};

  return (
    <View style={styles.container}>
      <Header />
      <ProfileHeader />

      {/* 
        FlatList is used for Repeating Data Because it only renders the items
        needed on the main screen. the numsColumns just splits the list into a three column grid
       */}
      <FlatList
        data={IMAGES}
        numColumns={3}
        // React needs to track each image, so we give them a unique key
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
      <Image
        // URI is needed for an internet address style image. so we give the URL from the data set into it
        source={{ uri: item.url }}
        style={styles.gridImage}
      />
    )}
  />

  {/* The Alert button you can interact with. I just put it above the footer as it does need to be at the bottom of the page */}
    <Pressable
      style={styles.alertButton}
      onPress={handleAlert}>
    <Text style={styles.alertButtonText}>Alert</Text>
    </Pressable>
    <Footer />
</View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    // I did this to keep the overal width about the same as a phone while working on the web side
    width: Platform.OS === "web" ? 500 : "100%",
    alignSelf: "center",
    flex: 1,
    backgroundColor: "white",
  },
  gridImage: {
    // I didnt make it 1/3rd so there could be added space around the images and not have the third row get cut off
    width: "32.6%",
    // aspect ratio just keeps the images square if they get resized weird with our width changes
    aspectRatio: 1,
    margin: 1.5,
  },
  alertButton: {
    marginHorizontal: 16,
    marginVertical: 12,
    paddingVertical: 12,
    backgroundColor: "#1877F2",
    borderRadius: 6,
    alignItems: "center",
  },
  alertButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});