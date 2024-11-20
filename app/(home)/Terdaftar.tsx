import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.eventList}>

        {/* Mulai Sifest */}
        <TouchableOpacity
          onPress={() => {
            router.push("/Detail");
          }}
        // activeOpacity={1}
        >
          <View style={styles.eventCard}>
            <View style={styles.eventImageContainer}>
              <Image
                source={require("../../assets/images/flyer/sifest.png")}
                style={styles.eventImage}
              />
            </View>
            <View style={styles.eventInfo}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventDate}>12 November 2023</Text>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../assets/images/ava/ava1.jpg")}
                    style={styles.avatar}
                  />
                  <Image
                    source={require("../../assets/images/ava/ava2.png")}
                    style={styles.avatar}
                  />
                  <Image
                    source={require("../../assets/images/ava/ava3.png")}
                    style={styles.avatar}
                  />
                </View>
              </View>
              <Text style={styles.eventTitle}>SI FEST 2023</Text>
              <Text style={styles.eventDescription}>
                Artificial Intelligence, Is It A Good Thing Or Bad Thing?
              </Text>
              <View style={styles.eventBottom}>
                <Text style={styles.eventOrganizer}>👨‍👦‍👦 HIMSI FASILKOM UNSRI</Text>
                <View style={styles.eventActions}>
                  <TouchableOpacity style={styles.iconButton}>
                    <Icon name="link" size={20} color="#3470A2" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
        </TouchableOpacity>
        {/* Selesai Sifest */}

        {/* Mulai Iffest */}
        <TouchableOpacity
          onPress={() => {
            router.push("/Detail");
          }}
        >
          <View style={styles.eventCard}>
            <View style={styles.eventImageContainer}>
              <Image
                source={require("../../assets/images/flyer/iffest.png")}
                style={styles.eventImage}
              />
            </View>
            <View style={styles.eventInfo}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventDate}>15 April 2024</Text>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../assets/images/ava/ava1.jpg")}
                    style={styles.avatar}
                  />
                  <Image
                    source={require("../../assets/images/ava/ava2.png")}
                    style={styles.avatar}
                  />
                  <Image
                    source={require("../../assets/images/ava/ava3.png")}
                    style={styles.avatar}
                  />
                </View>
              </View>
              <Text style={styles.eventTitle}>IFFEST 2024</Text>
              <Text style={styles.eventDescription}>
                Ignite The Competition, Sparks Of Informatics!
              </Text>
              <View style={styles.eventBottom}>
                <Text style={styles.eventOrganizer}>👨‍👦‍👦 HMIF FASILKOM UNSRI</Text>
                <View style={styles.eventActions}>
                  <TouchableOpacity style={styles.iconButton}>
                    <Icon name="link" size={20} color="#3470A2" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* Selesai Iffest */}

        {/* Mulai Intel */}
        <TouchableOpacity
          onPress={() => {
            router.push("/Detail");
          }}
        >
          <View style={styles.eventCard}>
            <View style={styles.eventImageContainer}>
              <Image
                source={require("../../assets/images/flyer/Intel.png")}
                style={styles.eventImage}
              />
            </View>
            <View style={styles.eventInfo}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventDate}>12 November 2023</Text>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../assets/images/ava/ava1.jpg")}
                    style={styles.avatar}
                  />
                  <Image
                    source={require("../../assets/images/ava/ava2.png")}
                    style={styles.avatar}
                  />
                  <Image
                    source={require("../../assets/images/ava/ava3.png")}
                    style={styles.avatar}
                  />
                </View>
              </View>
              <Text style={styles.eventTitle}>
                Open Recruitment INTEL 2024
              </Text>
              <Text style={styles.eventDescription}>
                Join us to explore new opportunities!
              </Text>
              <View style={styles.eventBottom}>
                <Text style={styles.eventOrganizer}>👨‍👦‍👦 BO INTEL FASILKOM UNSRI</Text>
                <View style={styles.eventActions}>
                  <TouchableOpacity style={styles.iconButton}>
                    <Icon name="link" size={20} color="#3470A2" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* Selesai Intel */}

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
    // space: 20,
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
  eventImageContainer: {
    padding: 10,
    marginBottom: -10,
  },
  eventImage: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  eventInfo: {
    padding: 15,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventDate: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Outfit-Regular",
  },
  avatarContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 40,
    marginLeft: -5,
    borderColor: "#000",
    borderWidth: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontFamily: "Outfit-Semibold",
  },
  eventDescription: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Outfit-Regular",
  },
  eventBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  eventOrganizer: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Outfit-Regular',
  },
  eventActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15, // Memberikan jarak antar ikon
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
