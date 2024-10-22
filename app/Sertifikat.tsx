import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import sifestImage from "../assets/images/sifest.png";
import iffestImage from "../assets/images/iffest.png"; // Example: Replace with correct image

const events = [
  {
    date: "12 November 2023",
    title: "SI Fest 2023",
    description: "Artificial Intelligence, Is It A Good Thing Or Bad Things?",
    organization: "HIMSI FASILKOM UNSRI",
    image: sifestImage, // Local image
    participants: 3,
  },
  {
    date: "15 April 2024",
    title: "IFFEST 2024",
    description: "Ignite The Competition: Sparks Of Informatics",
    organization: "HIMIF FASILKOM UNSRI",
    image: iffestImage, // Remote image
    participants: 4,
  },
  {
    date: "12 November 2023",
    title: "SI Fest 2023",
    description: "Artificial Intelligence, Is It A Good Thing Or Bad Things?",
    organization: "HIMSI FASILKOM UNSRI",
    image: sifestImage, // Local image
    participants: 3,
  },
];

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArrowLeft} size={32} color="#1E90FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Jangan lewatkan event favoritmu!</Text>
      </View>

      {events.map((event, index) => (
        <View key={index} style={styles.eventCard}>
          {/* Check if the image is a URL or local */}
          <Image
            source={
              typeof event.image === "string"
                ? { uri: event.image }
                : event.image
            }
            style={styles.eventImage}
          />
          <View style={styles.eventContent}>
            <View style={styles.eventHeader}>
              <Text style={styles.eventDate}>{event.date}</Text>
              <View style={styles.participantIcons}>
                {[...Array(event.participants)].map((_, i) => (
                  <Text key={i} style={styles.participantIcon}>
                    👤
                  </Text>
                ))}
              </View>
            </View>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventOrganization}>{event.organization}</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.certificateButton}>
                <Text style={styles.buttonText}>Unduh Sertifikat</Text>
              </TouchableOpacity>
              <View style={styles.iconActions}>
                <TouchableOpacity style={styles.actionIcon}>
                  <Text style={styles.icon}>🔖</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionIcon}>
                  <Text style={styles.icon}>🔗</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: "#1E90FF",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventContent: {
    padding: 15,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 14,
    color: "#6b7280",
  },
  participantIcons: {
    flexDirection: "row",
  },
  participantIcon: {
    fontSize: 16,
    marginLeft: 5,
    color: "#ff4500",
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
  eventOrganization: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  certificateButton: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  iconActions: {
    flexDirection: "row",
  },
  actionIcon: {
    marginLeft: 10,
  },
  icon: {
    fontSize: 24,
    color: "#1E90FF",
  },
});

export default HomeScreen;
