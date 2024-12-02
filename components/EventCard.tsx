import { truncateText } from "@/lib/truncateText";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const EventCard = ({
  id,
  title,
  description,
  organizer,
  eventDate,
  imageUrl,
  price,
  avatars,
}: {
  id: string;
  title: string;
  description: string;
  organizer: string;
  eventDate: string;
  imageUrl: string;
  price: string; // Menambahkan tipe harga
  avatars: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({ pathname: "/(home)/[id]", params: { id: id } });
      }}
      style={styles.card}
    >
      {/* Bagian Gambar */}
      <Image
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={styles.image}
      />

      {/* Bagian Konten */}
      <View style={styles.content}>
        {/* Tanggal dan Harga */}
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>
            {new Date(eventDate).toLocaleDateString("id-ID")}
          </Text>
          <Text style={styles.priceText}>{price}</Text>
          {/* Menambahkan harga */}
        </View>

        {/* Judul dan Deskripsi */}
        <Text style={styles.eventTitle}>{title}</Text>
        <Text
          style={styles.eventDescription}
          numberOfLines={2}
          ellipsizeMode="tail"
          className=""
        >
          {truncateText(description, 50)}
        </Text>

        {/* Penyelenggara dan Tombol */}
        <View style={styles.organizerRow}>
          <Text style={styles.organizer}>
            <Icon name="university" size={14} /> {organizer}
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Icon name="bookmark" size={16} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeButton}>
              <Icon name="heart" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    padding: 15,
  },
  dateRow: {
    flexDirection: "row", // Menyusun tanggal dan harga dalam satu baris
    justifyContent: "space-between", // Memisahkan mereka ke kiri dan kanan
    alignItems: "center",
  },
  dateText: {
    color: "#6b7280",
    fontSize: 14,
  },
  priceText: {
    color: "#1f2937", // Warna dan gaya yang mirip dengan teks lain
    fontSize: 16,
    fontFamily: "Outfit-Semibold",
  },
  eventTitle: {
    fontSize: 18,
    fontFamily: "Outfit-Semibold",
    marginBottom: 5,
  },
  eventDescription: {
    color: "#9ca3af",
    fontSize: 13, // Kurangi ukuran font deskripsi
    marginBottom: 8, // Kurangi margin bawah
  },
  organizerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  organizer: {
    color: "#9ca3af",
    fontSize: 14,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookmarkButton: {
    backgroundColor: "#2563eb",
    padding: 6, // Kurangi ukuran tombol bookmark
    borderRadius: 50,
    marginRight: 6, // Kurangi margin kanan
  },
  likeButton: {
    backgroundColor: "#ef4444",
    padding: 6, // Kurangi ukuran tombol like
    borderRadius: 50,
    marginRight: 6,
  },
});

export default EventCard;
