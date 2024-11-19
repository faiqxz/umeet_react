import React, { useState } from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";

const sifestImage = require('../../assets/images/sifest.png');
const uxResearchImage = require('../../assets/images/UX.png');
const pertaminaImage = require('../../assets/images/pertamina.png');

type EventData = {
  title: string;
  image: any;
  type: "Semua" | "Lomba" | "Seminar" | "Beasiswa"; // Update tipe untuk type
};

const eventData: EventData[] = [
  {
    title: "SI FEST 2023",
    image: sifestImage,
    type: "Seminar", 
  },
  {
    title: "Mastering Your UX Research",
    image: uxResearchImage,
    type: "Lomba", 
  },
  {
    title: "Pertamina Goes to Campus",
    image: pertaminaImage,
    type: "Seminar", 
  },
];

const HomeScreen = () => {
  const [activeFilter, setActiveFilter] = useState<"Semua" | "Lomba" | "Seminar" | "Beasiswa">("Semua"); // Default filter

  const handleFilterChange = (filter: "Semua" | "Lomba" | "Seminar" | "Beasiswa") => {
    setActiveFilter(filter);
  };

  const filteredData = eventData.filter((event) =>
    activeFilter === "Semua" ? true : event.type === activeFilter
  );

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); 
  const [commentText, setCommentText] = useState(""); 

  const handleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index); 
  };

  const handleSend = () => {
    console.log("Komentar terkirim:", commentText);
    setCommentText(""); 
    setExpandedIndex(null); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonContainer}>
        {["Semua", "Lomba", "Seminar", "Beasiswa"].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.button,
              activeFilter === filter && styles.activeButton, // Gaya untuk tombol aktif
            ]}
            onPress={() => handleFilterChange(filter as "Semua" | "Lomba" | "Seminar" | "Beasiswa")}
          >
            <Text
              style={[
                styles.buttonText,
                activeFilter === filter && styles.activeButtonText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.eventList}>
        {filteredData.map((event, index) => (
          <View key={index} style={styles.eventCard}>
            <View style={styles.eventHeader}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.status}>Selesai</Text>
            </View>
            <Image source={event.image} style={styles.eventImage} />
            <View style={styles.ratingContainer}>
              <View style={styles.starContainer}>
                {[...Array(5)].map((_, starIndex) => (
                  <FontAwesomeIcon
                    key={starIndex}
                    icon={faStar}
                    color="#FFD700"
                  />
                ))}
              </View>

              <TouchableOpacity onPress={() => handleExpand(index)}>
                <Text style={styles.commentText}>Beri komentar</Text>
              </TouchableOpacity>
            </View>

            {/* Expandable Comment Box */}
            {expandedIndex === index && (
              <View style={styles.commentBox}>
                <TextInput
                  style={styles.textInput}
                  value={commentText}
                  onChangeText={setCommentText}
                  placeholder="Tulis komentar Anda..."
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                  <Text style={styles.sendButtonText}>Kirim</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailButtonText}>Rincian Kegiatan</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    flexGrow: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#3470A2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Outfit-Regular",
  },
  activeButton: {
    backgroundColor: "#0B3954", 
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  activeButtonText: {
    fontFamily: "Outfit-Semibold",
  },
  eventList: {
    flexGrow: 1,
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
    marginBottom: 16,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 18,
    fontFamily: "Outfit-Semibold",
  },
  status: {
    color: "#3470A2",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  eventImage: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  starContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  commentText: {
    color: "#6b7280",
    fontFamily: "Outfit-Regular",
    textDecorationLine: "underline",
  },
  commentBox: {
    marginTop: 8,
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginRight: 8,
    fontFamily: "Outfit-Regular",
  },
  sendButton: {
    backgroundColor: "#3470A2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  sendButtonText: {
    color: "#fff",
    fontFamily: "Outfit-Semibold",
  },
  detailButton: {
    backgroundColor: "#3470A2",
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  detailButtonText: {
    color: "#fff",
    fontFamily: "Outfit-Semibold",
  },
});

export default HomeScreen;
