import { Image, StyleSheet, View } from "react-native";

/**
 * Decorative Instagram-style bottom navigation bar.
 * The assignment does not require these copied navigation icons to be functional.
 * I designed these using the web version, so I added the icons
 * but on the phone, it does overlay with the phones natural navigation bar
 */

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
      // the require() just loads image files that are stored locally inside this project. 
      // All of them are assests I added and am using for instagram style navbar and buttons
        source={require("@/assets/icons/home.png")}
        style={styles.navIcon}
      />

      <Image
        source={require("@/assets/icons/search.png")}
        style={styles.navIcon}
      />

      <Image
        source={require("@/assets/icons/video.png")}
        style={styles.navIcon}
      />

      <Image
        source={require("@/assets/icons/shopping.png")}
        style={styles.navIcon}
      />

      <Image
        source={require("@/assets/icons/account.png")}
        style={styles.navIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    // Row places all icons next to eachother 
    flexDirection: "row",
    // space around distributes the icons evenly across the available width
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    borderTopWidth: 3,
    borderTopColor: "#000",
    backgroundColor: "#fff",
  },
  navIcon: {
    width: 26,
    height: 26,
    // tintColor makes the icons more visible than their original colors. 
    tintColor: "#000"
  },
});

export default Footer;