import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { StyleSheet } from "react-native";
import Calendar from './Kalender';
import { useAuth } from "@/provider/AuthProvider";
import { supabase } from "@/lib/supabase";
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    'Outfit-Regular': require('../../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('../../assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Semibold': require('../../assets/fonts/Outfit-SemiBold.ttf'),
    'Outfit-Bold': require('../../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Black': require('../../assets/fonts/Outfit-Black.ttf'),

  });

  const { profile } = useAuth();

  const [showSavedCard, setShowSavedCard] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.content}>

          {/* Mulai Card */}
          <View style={styles.card}>
            <ImageBackground
              source={require("../../assets/images/element.png")}
              resizeMode="cover"
              style={styles.backgroundImage}
              imageStyle={{
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15, 
              }}
            >

              {/* Mulai Atas */}
              <View style={styles.contentCard}>

                {/* Mulai Header */}
                <View style={styles.headProfile}>
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
                {/* Selesai Header */}

                {/* Mulai Deskripsi */}
                {/* {profile.full_name.toUpperCase()} */}
                <View style={styles.headerContainer}>

                  <View style={styles.headerWelcoming}>
                    <Text style={styles.subtitle}>Selamat Datang, </Text>
                    <Text style={{ fontFamily: "Outfit-Regular", fontSize: 20, }}>MOHAMMAD RIZKY!</Text>

                  </View>
                  <View style={styles.headerDesc}>
                    <Text style={styles.description}>
                      Anda telah mengikuti{" "}
                    </Text>
                    <TouchableOpacity onPress={() => {
                      router.push("/Riwayat");
                    }}>
                      <Text style={styles.highlight}>
                        3 Kegiatan bulan ini
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* Mulai Mengikuti & Sertif */}
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
                        <TouchableOpacity
                          onPress={() => {
                            router.push("/Sertifikat");
                          }}>
                          <Text style={styles.statValue}>3 Sertifikat</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {/* Selesai Mengikuti & Sertif */}

                </View>
                {/* Selesai Deskripsi */}
                <View style={styles.horizontalDivider} />

                {/* Mulai Upcoming */}
                <View style={styles.upcomingEvents}>
                  <Text style={styles.sectionTitle}>Kegiatan mendatang</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={[styles.button, showSavedCard ? styles.inactiveButton : null]}
                      onPress={() => setShowSavedCard(false)}
                    >
                      <Text style={styles.buttonText}>Sedang diikuti</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.buttonSecondary, showSavedCard && styles.activeButton]}
                      onPress={() => setShowSavedCard(true)}
                    >
                      <Text style={styles.buttonTextSecondary}>Disimpan</Text>
                    </TouchableOpacity>
                  </View>

                  {showSavedCard ? (
                    <View style={styles.eventCard}>
                      <ImageBackground
                        source={require("../../assets/images/element.png")}
                        resizeMode="cover"
                        style={styles.backgroundImage}
                        imageStyle={{
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15, // Sesuaikan jika card bawah rounded
                        }}
                      ></ImageBackground>
                      <Text style={styles.eventTime}>Besok, 14:00 WIB</Text>
                      <Text style={styles.eventTitle}>WEBINAR | React Native</Text>
                      <Text style={styles.eventOrganizer}>👨‍👦‍👦 HIMSI Fasilkom Unsri</Text>

                      <View style={styles.followedByContainer}>
                        <Text style={styles.followedByText}>Diikuti oleh   </Text>
                        <View style={styles.avatarContainer}>
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
                      <Text style={styles.eventTime}>Hari ini, 08:00 WIB</Text>
                      <Text style={styles.eventTitle}>IF FEST 2024</Text>
                      <Text style={styles.eventOrganizer}>👨‍👦‍👦 HMIF Fasilkom Unsri</Text>

                      <View style={styles.followedByContainer}>
                        <Text style={styles.followedByText}>Diikuti oleh   </Text>
                        <View style={styles.avatarContainer}>
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
                {/* Selesai Upcoming */}

              </View>
              {/* Selesai Atas */}
            </ImageBackground>
          </View>
          {/* Selesai Card */}

          {/* Mulai Fitur */}

          <View style={styles.fiturEvents}>
            <View style={styles.exploreEvents}>

              <View style={styles.othersEvent}>
                <Text style={styles.sectionTitle}>Jelajahi event</Text>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/Lainnya");
                  }}
                >
                  <View style={styles.statItem}>
                    <Text style={[styles.statText, { textDecorationLine: 'underline', fontFamily: "Outfit-Regular" }]}>Lainnya</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Mulai 4 Fitur */}
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
              {/* Selesai 4 Fitur */}


            </View>

            <View style={styles.organizers}>
              <Text style={styles.sectionTitle}>Penyelenggara</Text>
              <View style={styles.organizerLogos}>

                <View style={styles.iconContainer}>
                  <Image
                    source={require("../../assets/images/himsi.png")}
                    style={styles.organizerLogo}
                  />
                  <Text style={styles.iconOrg}>HIMSI</Text>
                </View>

                <View style={styles.iconContainer}>
                  <Image
                    source={require("../../assets/images/bem.png")}
                    style={styles.organizerLogo}
                  />
                  <Text style={styles.iconOrg}>BEM KM FASILKOM</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../../assets/images/hmif.png")}
                    style={styles.organizerLogo}
                  />
                  <Text style={styles.iconOrg}>HMIF</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../../assets/images/intelll.png")}
                    style={styles.organizerLogo}
                  />
                  <Text style={styles.iconOrg}>BO INTEL</Text>
                </View>

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
          {/* Selesai Fitur */}

        </View>
      </ScrollView >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    backgroundColor: "#f9f9f9",
  },
  card: {

  },
  contentCard: {
    backgroundColor: '#fff',
    backgroundBlendMode: 'lighten',
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: "hidden", // Penting agar gambar tetap di dalam card
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.9
  },
  content: {
    backgroundColor: "#f0f0f0",
  },
  headProfile: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    paddingTop: 10,
    fontSize: 35,
  },
  logoU: {
    color: '#DDA915',
    fontFamily: 'Outfit-Bold',
  },
  logoMeet: {
    color: '#3470A2',
    fontFamily: 'Outfit-Bold',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Outfit-Regular',
    marginTop: 5,
    marginBottom: 5,
  },
  headerDesc: {
    flexDirection: "row",
  },
  description: {
    fontFamily: 'Outfit-Regular',
    flexDirection: "row",
    fontSize: 16,
    color: "#6b7280",
  },
  highlight: {
    fontFamily: 'Outfit-Semibold',
    fontSize: 16,
    color: "#3470A2",
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
    fontFamily: 'Outfit-Regular',
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
    marginStart: 10,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    color: '#000',
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#ddd",
    marginHorizontal: 30,
  },
  horizontalDivider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  upcomingEvents: {

  },
  sectionTitle: {
    fontSize: 19,
    fontFamily: "Outfit-Medium",
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: "#3470A2",
    padding: 9,
    borderRadius: 20,
    marginTop: 5,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontFamily: 'Outfit-Regular',
    fontSize: 13,
    padding: 4,
  },
  buttonSecondary: {
    backgroundColor: "#f0f0f0",
    padding: 9,
    borderRadius: 20,
    marginTop: 5,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
    borderColor: "#3470A2",
    borderWidth: 1,
    marginLeft: 7,
  },
  buttonTextSecondary: {
    fontSize: 13,
    color: "#3470A2",
    padding: 4,
    fontFamily: 'Outfit-Regular',
  },
  activeButton: {
    backgroundColor: "#3470A2",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  inactiveButton: {
    backgroundColor: "#f0f0f0",
  },
  buttonTextActive: {
    color: "#fff",
  },
  buttonTextInactive: {
    color: "#000000",
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderStartStartRadius: 50,
    borderEndEndRadius: 50,
    padding: 10,
    paddingTop: 20,
    paddingStart: 30,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 7,
  },
  eventTime: {
    fontSize: 12,
    fontFamily: 'Outfit-Regular',
    color: "#6b7280",
  },
  eventTitle: {
    fontSize: 18,
    fontFamily: 'Outfit-Semibold',
    color: '#3470A2',
  },
  eventOrganizer: {
    fontSize: 15,
    fontFamily: 'Outfit-Regular',
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
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
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
    borderColor: "#000",
    borderWidth: 1,
  },
  avatarProfile: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderColor: '#3470A2',
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  headerContainer: {
    alignItems: "flex-start",
  },
  headerWelcoming: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  fiturEvents: {
    marginTop: 10,
    paddingEnd: 10,
    paddingStart: 10,
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
    fontFamily: "Outfit-Regular",
  },
  iconOrg: {
    fontSize: 12,
    fontFamily: "Outfit-Regular",
    marginTop: 5,
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
    width: 55,
    height: 55,
    borderRadius: 100,
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
    fontFamily: "Outfit-Regular",
    padding: 6,
  },
  recommendationSubTitle: {
    fontSize: 14,
    fontFamily: "Outfit-Regular",
    color: "#6b7280",
    padding: 6,
  },
  calendar: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 20,
  },
});