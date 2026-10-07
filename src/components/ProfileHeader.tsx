import { Pressable, View, Text, StyleSheet, Image } from "react-native";

/**
 * Profile information shown between the top navigation and the photo grid.
 * This section recreates the avatar, profile statistics, bio, and Member button.
 */

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        {/* 
         * The wrapper creates the colored ring around the profile picture.
         * Padding leaves a small gap between the image and the ring.
         */}
        <View style={styles.profileImageBorder}>
          <Image
            source={{ uri: "https://picsum.photos/seed/a/321" }}
            style={styles.profileImage}
          />
        </View>

        {/* Each stat will use the same styles, so the row can stay consistent
          * The first one is the number for posts 
          */}
        <View style={styles.stat}>
          <Text style={styles.statNumber}>53</Text>
          <Text>Posts</Text>
        </View>

        {/* This stat is the amount of members on the account */}
        <View style={styles.stat}>
          <Text style={styles.statNumber}>12</Text>
          <Text>Members</Text>
        </View>

        {/* This stat Shows the number of Admins */}
        <View style={styles.stat}>
          <Text style={styles.statNumber}>1</Text>
          <Text>Admins</Text>
        </View>
      </View>

      {/* This is the text section for the bio  */}
      <View style={styles.bio}>
        <Text style={styles.profileName}>PB Productions</Text>
        <Text>Professional Photography Company</Text>
        <Text>Photoshoots available! Feel free to contact us in the DMs</Text>
      </View>

        {/* This is just a decorative copy of the Member Button,
        the mouse changes and it seems pressable, but it doesnt actually do anything */}
      <Pressable style={styles.memberButton}>
        <Text style={styles.memberText}>Member ▼</Text>
      </Pressable>

    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    container: {
      // This just separates the profile information from the photo grid below it, 
      // I know theirs no underline in the example but it helps me visualize things a little better
        borderBottomWidth: 1,
        borderColor: "#555050"
    },
    profileRow: {
        flexDirection: "row",
        alignItems: "center",
        // Space round gives the image and stats even horizontal Spacing
        justifyContent: "space-around",
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    profileImage: {
      // this fills the inside of the border wrapper while staying circular 
        width: "100%",
        height: "100%",
        borderRadius: 44
    },
    profileImageBorder: {
      width: 88,
      height: 88,
      borderRadius: 44,
      borderWidth: 2,
      borderColor: "#cc1c1c",
    // this padding creates the small space between the photo and the outer ring
      padding: 3,
    },
    stat: {
      alignItems: "center",
    },
    statNumber: {
      fontSize: 18,
      fontWeight: "bold",
    },
    bio: {
      paddingHorizontal: 15,
      paddingBottom: 15,
    },
    profileName: {
      fontWeight: "bold",
      marginBottom: 3,
    },
    memberButton: {
      marginHorizontal: 15,
      marginBottom: 12,
      height: 34,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 3,
      alignItems: "center",
      justifyContent: "center",
    },
    memberText: {
      fontSize: 13,
      fontWeight: "bold",
  },
});