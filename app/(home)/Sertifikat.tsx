import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Modal } from "react-native";
import { StyleSheet } from "react-native";

const sifestImage = require("../../assets/images/sifest.png");

type EventData = {
  title: string;
  image: any;
  type: "Semua" | "Lomba" | "Seminar" | "Beasiswa";
};

const eventData: EventData[] = [
  {
    title: "SI FEST 2023",
    image: sifestImage,
    type: "Seminar",
  },
];

const HomeScreen = () => {
  const [activeFilter, setActiveFilter] = useState<
    "Semua" | "Lomba" | "Seminar" | "Beasiswa"
  >("Semua");

  const [modalVisible, setModalVisible] = useState(false);

  const handleFilterChange = (
    filter: "Semua" | "Lomba" | "Seminar" | "Beasiswa"
  ) => {
    setActiveFilter(filter);
  };

  const handleDownload = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000); // Modal akan otomatis menutup setelah 2 detik
  };

  const filteredData = eventData.filter((event) =>
    activeFilter === "Semua" ? true : event.type === activeFilter
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonContainer}>
        {["Semua", "Lomba", "Seminar", "Beasiswa"].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.button,
              activeFilter === filter && styles.activeButton,
            ]}
            onPress={() =>
              handleFilterChange(filter as "Semua" | "Lomba" | "Seminar" | "Beasiswa")
            }
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
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Image source={event.image} style={styles.eventImage} />
            <TouchableOpacity style={styles.detailButton} onPress={handleDownload}>
              <Text style={styles.detailButtonText}>Unduh Sertifikat</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Modal untuk pemberitahuan */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Sertifikat berhasil diunduh!</Text>
          </View>
        </View>
      </Modal>
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
  eventTitle: {
    fontSize: 18,
    fontFamily: "Outfit-Semibold",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    fontFamily: "Outfit-Semibold",
    color: "#333",
  },
});

export default HomeScreen;
