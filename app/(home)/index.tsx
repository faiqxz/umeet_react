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
import { useAuth } from "@/provider/AuthProvider";
import { supabase } from "@/lib/supabase";

export default function HomeScreen() {
  const { profile } = useAuth()
  console.log(profile)

  const [showSavedCard, setShowSavedCard] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={styles.headd}>
                <Text style={styles.title}>
                  <Text style={styles.logoU}>U-</Text>
                  <Text style={styles.logoMeet}>Meet</Text>
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    router.push("/Profil");
                  }}>
                  <Image
                    source={require("../../assets/images/avapro.jpg")}
                    style={styles.avatarProfile}
                  />
                </TouchableOpacity>
              </View>

              {/* {profile.full_name.toUpperCase()} */}
              <View style={styles.headerContainer}>
                <Text style={styles.subtitle}>Selamat Datang, {profile.full_name.toUpperCase()} MOHAMMAD RIZKY!</Text>
                <TouchableOpacity onPress={() => {
                  router.push("/Riwayat");
                }}>
                  <Text style={styles.description}>
                    Anda telah mengikuti{" "}
                    <Text style={styles.highlight}>3 Kegiatan bulan ini</Text>
                  </Text>
                </TouchableOpacity>


                <View style={styles.statsContainer}>
                  <View style={styles.stattItem}>
                    <Text style={styles.statTitle}>Mengikuti</Text>
                    <View style={styles.statValueContainer}>
                      <Text style={styles.iconn}>👨‍👦‍👦</Text>
                      <Text style={styles.statValue}>10 Penyelenggara</Text>
                    </View>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.stattItem}>
                    <Text style={styles.statTitle}>Sertifikat</Text>
                    <View style={styles.statValueContainer}>
                      <Text style={styles.iconn}>🎖️</Text>
                      <Text style={styles.statValue}>3 Sertifikat</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.upcomingEvents}>
                <Text style={styles.sectionTitle}>Kegiatan mendatang</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, showSavedCard ? styles.inactiveButton : null]}  // Perbaiki bagian ini
                    onPress={() => setShowSavedCard(false)}
                  >
                    <Text style={styles.buttonText}>Sedang diikuti</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.buttonSecondary, showSavedCard && styles.activeButton]}  // Ini sudah benar
                    onPress={() => setShowSavedCard(true)}
                  >
                    <Text style={styles.buttonTextSecondary}>Disimpan</Text>
                  </TouchableOpacity>
                </View>


                {/* Tampilkan card berbeda jika showSavedCard true */}
                {showSavedCard ? (
                  <View style={styles.eventCard}>

                    <Text style={styles.eventTime}>Besok, 14:00</Text>
                    <Text style={styles.eventTitle}>WEBINAR | React Native</Text>
                    <Text style={styles.eventOrganizer}>HIMSI Fasilkom Unsri</Text>
                    <View style={styles.followedByContainer}>
                      <Text style={styles.followedByText}>Diikuti oleh   </Text>
                      <View style={styles.avatarContainer}>
                        {/* Sample avatars */}
                        <Image
                          source={require("../../assets/images/ava1.jpg")}
                          style={styles.avatar}
                        />
                        <Image
                          source={require("../../assets/images/ava3.png")}
                          style={styles.avatar}
                        />
                        <Image
                          source={require("../../assets/images/ava2.png")}
                          style={styles.avatar}
                        />
                      </View>
                    </View>
                  </View>
                ) : (
                  <View style={styles.eventCard}>
                    <Text style={styles.eventTime}>Hari ini, 08:00</Text>
                    <Text style={styles.eventTitle}>IF FEST 2024</Text>
                    <Text style={styles.eventOrganizer}>HMIF Fasilkom Unsri</Text>
                    <View style={styles.followedByContainer}>
                      <Text style={styles.followedByText}>Diikuti oleh   </Text>
                      <View style={styles.avatarContainer}>
                        {/* Sample avatars */}
                        <Image
                          source={require("../../assets/images/ava1.jpg")}
                          style={styles.avatar}
                        />
                        <Image
                          source={require("../../assets/images/ava2.png")}
                          style={styles.avatar}
                        />
                        <Image
                          source={require("../../assets/images/ava3.png")}
                          style={styles.avatar}
                        />
                        <Image
                          source={require("../../assets/images/ava1.jpg")}
                          style={styles.avatar}
                        />
                      </View>
                    </View>
                  </View>
                )}

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
                    <Text style={[styles.statText, { textDecorationLine: 'underline' }]}>Lainnya</Text>
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
                    <Text style={[styles.iconn, { fontSize: 40 }]}>📋</Text>
                    <Text style={styles.iconText}>Terdaftar</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    router.push("/Favorit");
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Text style={[styles.iconn, { fontSize: 40 }]}>❤️</Text>
                    <Text style={styles.iconText}>Favorit</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => {
                    router.push("/Riwayat");
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Text style={[styles.iconn, { fontSize: 40 }]}>⏳</Text>
                    <Text style={styles.iconText}>Riwayat</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    router.push("/Sertifikat");
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Text style={[styles.iconn, { fontSize: 40 }]}>🎓</Text>
                    <Text style={styles.iconText}>Sertifikat</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </View>

            <View style={styles.organizers}>
              <Text style={styles.sectionTitle}>Penyelenggara</Text>
              <View style={styles.organizerLogos}>
                <Image
                  source={require("../../assets/images/himsi.png")}
                  style={styles.organizerLogo}
                />
                <Image
                  source={require("../../assets/images/bem.png")}
                  style={styles.organizerLogo}
                />
                <Image
                  source={require("../../assets/images/hmif.png")}
                  style={styles.organizerLogo}
                />
                <Image
                  source={require("../../assets/images/intelll.png")}
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
                    source={require("../../assets/images/pertamina.png")}
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
                    source={require("../../assets/images/oprecbem.png")}
                    style={styles.recommendationImage}
                  />
                  <Text style={styles.recommendationTitle}>
                    Open Recruitment Staff BEM UNSRI 2024
                  </Text>
                  <Text style={styles.recommendationSubTitle}>
                    Open Recruitment Staff BEM UNSRI 2024
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
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    // padding: 10,
  },
  headd: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    paddingTop: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "#3470A2",
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
    color: "#3470A2",
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
  statsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
    paddingLeft: 0,
  },
  stattItem: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 10,
  },
  statTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    alignItems: 'flex-start',
    textAlign: "left",
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#ddd",
    marginHorizontal: 30,
  },
  upcomingEvents: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: 'row', // Mengatur agar elemen berada dalam baris
  },
  button: {
    backgroundColor: "#000000",
    padding: 11,
    borderRadius: 30,
    marginTop: 5,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  buttonText: {
    color: "#f0f0f0",
    fontWeight: "bold",
  },
  buttonSecondary: {
    backgroundColor: "#f0f0f0",
    padding: 11,
    borderRadius: 30,
    marginTop: 5,
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 1,
    marginLeft: 7,
  },
  buttonTextSecondary: {
    color: "#f0f0f0",
    fontWeight: "bold",
  },
  activeButton: {
    backgroundColor: "#000000",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  // Gaya tombol untuk saat tidak aktif
  inactiveButton: {
    backgroundColor: "#f0f0f0",
    borderColor: "#000000",
    borderWidth: 1,
  },
  // Gaya teks tombol saat aktif
  buttonTextActive: {
    color: "#f0f0f0",
  },
  // Gaya teks tombol saat tidak aktif
  buttonTextInactive: {
    color: "#f0f0f0",
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  eventTime: {
    fontSize: 12,
    color: "#6b7280",
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eventOrganizer: {
    fontSize: 15,
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
  avatarProfile: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderColor: '#3470A2',
  },
  headerContainer: {
    alignItems: "flex-start",
  },
  exploreEvents: {
    marginTop: 10,
    paddingEnd: 10,
    paddingStart: 10,
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
  iconn: {
    fontSize: 24,
    color: "#3470A2",
  },
  iconText: {
    fontSize: 12,
  },
  organizers: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  organizerLogos: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  organizerLogo: {
    width: 50,
    height: 52,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  recommendations: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  recommendationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recommendationCard: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000000",
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
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 20,
  },
  logoU: {
    color: '#DDA915',
  },
  logoMeet: {
    color: '#3470A2',
  },
});