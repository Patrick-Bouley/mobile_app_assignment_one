import { Image, StyleSheet, Text, View } from "react-native";

/**
 * Top navigation/header area from the reference Instagram profile.
 * It contains a back icon, centered profile title/username, and add icon.
 */

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("@/assets/icons/back.png")}
        style={styles.icon}
      />

      <View style={styles.titleSection}>
        <Text style={styles.title}>Group Profile</Text>
        <Text style={styles.username}>pb_productions</Text>
      </View>

      <Image
        source={require("@/assets/icons/add.png")}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: -15,
    // I added the margins to display better on both android and web. just helps with the symbol spacing
    // and helps keep the contnent below it to not be squished down with it
  },
  titleSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  username: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: "#000",
  },
});

export default Header;