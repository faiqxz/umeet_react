import { router } from "expo-router";
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
} from "react-native";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
    const YourComponent: React.FC = () => {
        // Inisialisasi state searchQuery dengan string kosong
        const [searchQuery, setSearchQuery] = useState<string>('');
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={styles.card}>
                        <TextInput
                            style={styles.searchBar}
                            placeholder="Cari event..."
                            onChangeText={(text: string) => setSearchQuery(text)}
                            value={searchQuery}
                        />
                        <View style={styles.content}>
                            <View style={styles.eventIcons}>
                                <TouchableOpacity
                                    onPress={() => {
                                        router.push("/Terdaftar");
                                    }}
                                >
                                    <View style={styles.iconContainer}>
                                        <Text style={[styles.icon, { fontSize: 40 }]}>📋</Text>
                                        <Text style={styles.iconText}>Terdaftar</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        router.push("/Favorit");
                                    }}
                                >
                                    <View style={styles.iconContainer}>
                                        <Text style={[styles.icon, { fontSize: 40 }]}>❤️</Text>
                                        <Text style={styles.iconText}>Favorit</Text>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={() => {
                                        router.push("/Riwayat");
                                    }}
                                >
                                    <View style={styles.iconContainer}>
                                        <Text style={[styles.icon, { fontSize: 40 }]}>⏳</Text>
                                        <Text style={styles.iconText}>Riwayat</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        router.push("/Sertifikat");
                                    }}
                                >
                                    <View style={styles.iconContainer}>
                                        <Text style={[styles.icon, { fontSize: 40 }]}>🎓</Text>
                                        <Text style={styles.iconText}>Sertifikat</Text>
                                    </View>
                                </TouchableOpacity>

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

                            <View style={styles.recommendations}>
                                <Text style={styles.sectionTitle}>
                                    Terakhir Dilihat
                                </Text>
                                <View style={styles.recommendationContainer}>
                                    <View style={styles.recommendationCard}>
                                        <Image
                                            source={require("../assets/images/genbi.png")}
                                            style={styles.recommendationImage}
                                        />
                                        <Text style={styles.recommendationTitle}>
                                            Beasiswa Bank Indonesia 2024
                                        </Text>
                                        <Text style={styles.recommendationSubTitle}>
                                            Generasi Baru Indonesia (GENBI) SUMSEL 2024
                                        </Text>
                                    </View>
                                    <View style={styles.recommendationCard}>
                                        <Image
                                            source={require("../assets/images/sobatbumi.png")}
                                            style={styles.recommendationImage}
                                        />
                                        <Text style={styles.recommendationTitle}>
                                            Beasiswa Pertamina SobatBumi 2024
                                        </Text>
                                        <Text style={styles.recommendationSubTitle}>
                                            Saatnya menjadi bagian dari Keluarga Besar Beasiswa Sobat Bumi
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.recommendations}>
                                <Text style={styles.sectionTitle}>
                                    Sedang Trending
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
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }


    const styles = StyleSheet.create({
        searchBar: {
            height: 50, // Tinggi sedikit lebih besar untuk tampilan lebih modern
            borderColor: '#3470A2', // Ganti dengan warna biru yang lebih cerah
            borderWidth: 1,
            borderRadius: 15, // Sudut yang lebih halus
            paddingHorizontal: 15, // Padding yang lebih baik
            marginVertical: 1,
            marginHorizontal: 20,
            backgroundColor: '#F8F8F8', // Warna latar belakang yang lebih cerah
            elevation: 2, // Efek bayangan untuk tampilan lebih menarik
            shadowColor: '#000', // Bayangan yang lebih baik di iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
        },
        container: {
            flexGrow: 1,
            backgroundColor: "#white",
            padding: 10,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            backgroundColor: "#fff",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
            paddingTop: 5, // Ubah menjadi 20 untuk merapatkan jarak dengan search bar
            paddingBottom: 20,
        },
        content: {
            padding: 20,
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
            backgroundColor: "#f0f0f0",
            padding: 10,
            borderRadius: 20,
            marginTop: 5,
            alignItems: "center",
        },
        buttonTextSecondary: {
            color: "#6b7280",
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
    return <YourComponent />;
}