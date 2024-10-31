import { router } from "expo-router";
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { FaChevronLeft } from "react-icons/fa";
import Icon from "react-native-vector-icons/FontAwesome";
import iffestImage from "../assets/images/iffest.png";
import sifestImage from "../assets/images/sifest.png";
import intelImage from "../assets/images/intel.png";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.eventList}>

        <TouchableOpacity
          onPress={() => {
            router.push("/Detail");
          }}
        >
          {/* Event 1 */}
          <View style={styles.eventCard}>
            <Image
              source={require("../assets/images/sifest.png")}
              style={styles.eventImage}
            />
            <View style={styles.eventInfo}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventDate}>12 November 2023</Text>
                <View style={styles.avatarContainer}>
                  <Image
                    source={{ uri: "https://placehold.co/24x24" }}
                    style={styles.avatar}
                  />
                  <Image
                    source={{ uri: "https://placehold.co/24x24" }}
                    style={styles.avatar}
                  />
                  <Image
                    source={{ uri: "https://placehold.co/24x24" }}
                    style={styles.avatar}
                  />
                </View>
              </View>
              <Text style={styles.eventTitle}>SI Fest 2023</Text>
              <Text style={styles.eventDescription}>
                Artificial Intelligence, Is It A Good Thing Or Bad Thing?
              </Text>
              <Text style={styles.eventOrganizer}>HIMSI FASILKOM UNSRI</Text>

            <View style={styles.eventActions}>
              <TouchableOpacity>
                <Icon name="comment" size={20} color="#1E90FF" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="share" size={20} color="#1E90FF" />
              </TouchableOpacity>
            </View>
          </View>

      </View>
      </TouchableOpacity>


      {/* Event 2 */}
      <View style={styles.eventCard}>
        <Image
          source={require("../assets/images/iffest.png")}
          style={styles.eventImage}
        />
        <View style={styles.eventInfo}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventDate}>15 April 2024</Text>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: "https://placehold.co/24x24" }}
                style={styles.avatar}
              />
              <Image
                source={{ uri: "https://placehold.co/24x24" }}
                style={styles.avatar}
              />
              <Image
                source={{ uri: "https://placehold.co/24x24" }}
                style={styles.avatar}
              />
              <Image
                source={{ uri: "https://placehold.co/24x24" }}
                style={styles.avatar}
              />
            </View>
          </View>
          <Text style={styles.eventTitle}>IFFEST 2024</Text>
          <Text style={styles.eventDescription}>
            Ignite The Competition, Sparks Of Informatics
          </Text>
          <Text style={styles.eventOrganizer}>HMIF FASILKOM UNSRI</Text>
          <View style={styles.eventActions}>
            <TouchableOpacity>
              <Icon name="comment" size={20} color="#1E90FF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="share" size={20} color="#1E90FF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Event 3 */}
      <View style={styles.eventCard}>
        <Image
          source={require("../assets/images/Intel.png")}
          style={styles.eventImage}
        />
        <View style={styles.eventInfo}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventDate}>12 November 2023</Text>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: "https://placehold.co/24x24" }}
                style={styles.avatar}
              />
              <Image
                source={{ uri: "https://placehold.co/24x24" }}
                style={styles.avatar}
              />
              <Image
                source={{ uri: "https://placehold.co/24x24" }}
                style={styles.avatar}
              />
            </View>
          </View>
          <Text style={styles.eventTitle}>
            Recruitment for BO INTEL FASILKOM UNSRI 2024
          </Text>
          <Text style={styles.eventDescription}>
            Join us to explore new opportunities!
          </Text>
          <Text style={styles.eventOrganizer}>HIMSI FASILKOM UNSRI</Text>
          <View style={styles.eventActions}>
            <TouchableOpacity>
              <Icon name="comment" size={20} color="#1E90FF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="share" size={20} color="#1E90FF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  eventList: {
    space: 20,
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  eventImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventInfo: {
    padding: 15,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 14,
    color: "#6b7280",
  },
  avatarContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 2,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 5,
  },
  eventOrganizer: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 5,
  },
  eventActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
