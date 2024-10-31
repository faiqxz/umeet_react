import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StyleSheet } from "react-native";
import Calendar from './Kalender';

export default function HomeScreen() {
  // State untuk mengatur apakah card disimpan ditampilkan
  const [showSavedCard, setShowSavedCard] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.content}>
              <Text style={styles.title}>U-Meet</Text>
              <Text style={styles.subtitle}>Selamat Datang, MOH RIZKY SINAGA!</Text>
              <TouchableOpacity onPress={() => {
                router.push("/Riwayat");
              }}>
                <Text style={styles.description}>
                  RIZKY telah mengikuti{" "}
                  <Text style={styles.highlight}>3 Kegiatan bulan ini</Text>
                </Text>
              </TouchableOpacity>

              <View style={styles.statContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statText}>16 Mengikuti</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statText}>5 Sertifikat</Text>
                </View>
              </View>

              <View style={styles.upcomingEvents}>
                <Text style={styles.sectionTitle}>Kegiatan mendatang</Text>
                <TouchableOpacity style={[styles.button, showSavedCard ? styles.inactiveButton :styles]} 
                  onPress={() => setShowSavedCard(false)}>
                  <Text style={styles.buttonText}>Sedang diikuti</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonSecondary, showSavedCard && styles.activeButton]} 
                  onPress={() => setShowSavedCard(true)}>
                  <Text style={styles.buttonTextSecondary}>Disimpan</Text>
                </TouchableOpacity>

                {/* Tampilkan card berbeda jika showSavedCard true */}
                {showSavedCard ? (
                  <View style={styles.eventCard}>
                    <Text style={styles.eventTime}>Hari ini, 10:00</Text>
                    <Text style={styles.eventTitle}>Workshop React Native</Text>
                    <Text style={styles.eventOrganizer}>HIMSI Fasilkom Unsri</Text>
                  </View>
                ) : (
                  <View style={styles.eventCard}>
                    <Text style={styles.eventTime}>Hari ini, 08:00</Text>
                    <Text style={styles.eventTitle}>IF FEST 2024</Text>
                    <Text style={styles.eventOrganizer}>HMIF Fasilkom Unsri</Text>
                  </View>
                )}
                <View style={styles.container}>
                  <View style={styles.followedByContainer}>
                    <Text style={styles.followedByText}>Diikuti oleh   </Text>
                    <View style={styles.avatarContainer}>
                      {/* Sample avatars */}
                      <Image
                        source={require("../assets/images/ava1.jpg")}
                        style={styles.avatar}
                      />
                      <Image
                        source={require("../assets/images/ava2.png")}
                        style={styles.avatar}
                      />
                      <Image
                        source={require("../assets/images/ava3.png")}
                        style={styles.avatar}
                      />
                      <Image
                        source={require("../assets/images/ava1.jpg")}
                        style={styles.avatar}
                      />
                      <Image
                        source={require("../assets/images/ava3.png")}
                        style={styles.avatar}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.exploreEvents}>
            <View style={styles.exploreEvents}>
              <View style={styles.othersEvent}>
                <Text style={styles.sectionTitle}>Jelajahi event</Text>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/Lainnya");
                  }}
                >
                  <View style={styles.statItem}>
                    <Text style={styles.statText}>Lainnya</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.eventIcons}>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/Terdaftar");
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>📋</Text>
                    <Text style={styles.iconText}>Terdaftar</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    router.push("/Favorit");
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>❤️</Text>
                    <Text style={styles.iconText}>Favorit</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => {
                    router.push("/Riwayat");
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>⏳</Text>
                    <Text style={styles.iconText}>Riwayat</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    router.push("/Sertifikat");
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>🎓</Text>
                    <Text style={styles.iconText}>Sertifikat</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </View>

            <View style={styles.organizers}>
              <Text style={styles.sectionTitle}>Penyelenggara</Text>
              <View style={styles.organizerLogos}>
                <Image
                  source={require("../assets/images/himsi.png")}
                  style={styles.organizerLogo}
                />
                <Image
                  source={require("../assets/images/bem.png")}
                  style={styles.organizerLogo}
                />
                <Image
                  source={require("../assets/images/hmif.png")}
                  style={styles.organizerLogo}
                />
                <Image
                  source={require("../assets/images/intelll.png")}
                  style={styles.organizerLogo}
                />
              </View>
            </View>
            <View style={styles.recommendations}>
              <Text style={styles.sectionTitle}>
                Rekomendasi Event untuk Anda
              </Text>
              <View style={styles.recommendationContainer}>
                <View style={styles.recommendationCard}>
                  <Image
                    source={require("../assets/images/pertamina.png")}
                    style={styles.recommendationImage}
                  />
                  <Text style={styles.recommendationTitle}>
                    Pertamina Goes to Campus
                  </Text>
                  <Text style={styles.recommendationSubTitle}>
                    PNRE University Outreach & Engagement
                  </Text>
                </View>
                <View style={styles.recommendationCard}>
                  <Image
                    source={require("../assets/images/oprecbem.png")}
                    style={styles.recommendationImage}
                  />
                  <Text style={styles.recommendationTitle}>
                    Open Recruitment Staff
                  </Text>
                  <Text style={styles.recommendationSubTitle}>
                    Open Recruitment Staff BEM
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.calendar}>
              <Text style={styles.sectionTitle}>Kalender</Text>
              <Calendar />
            </View>
          </View>
        </View>
      </ScrollView >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: "#f9f9f9",
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    backgroundColor: "#f9f9f9",
  },
  aturLah: {
    padding: 30,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  content: {
    // padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E90FF",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: "#6b7280",
  },
  highlight: {
    color: "#1E90FF",
    fontWeight: "bold",
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    fontSize: 16,
    marginLeft: 10,
  },
  upcomingEvents: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 20,
    marginTop: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonSecondary: {
    color: "#fff",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    marginTop: 5,
    alignItems: "center",
  },
  buttonTextSecondary: {
    color: "#fff",
    fontWeight: "bold",
  },
  activeButton: {
    backgroundColor: "#1E90FF",
  },
  // Gaya tombol untuk saat tidak aktif
  inactiveButton: {
    backgroundColor: "#f0f0f0",
  },
  // Gaya teks tombol saat aktif
  buttonTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  // Gaya teks tombol saat tidak aktif
  buttonTextInactive: {
    color: "#fff",
    fontWeight: "bold",
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTime: {
    fontSize: 12,
    color: "#6b7280",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventOrganizer: {
    fontSize: 14,
    color: "#6b7280",
  },
  followedByContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  followedByText: {
    fontSize: 16,
    color: "#6b7280",
  },
  avatarContainer: {
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 2,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -5,
  },
  exploreEvents: {
    marginTop: 20,
    // padding: 20,
  },
  othersEvent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    color: "#1E90FF",
  },
  iconText: {
    fontSize: 12,
  },
  organizers: {
    marginTop: 20,
  },
  organizerLogos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  organizerLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  recommendations: {
    marginTop: 20,
  },
  recommendationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recommendationCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginRight: 10,
    width: "48%",
  },
  recommendationImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  recommendationSubTitle: {
    fontSize: 14,
    color: "#6b7280",
    padding: 5,
  },
  calendar: {
    marginTop: 20,
  },
});