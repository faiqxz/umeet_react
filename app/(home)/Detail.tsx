import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DetailScreen = () => {
    const [activeTab, setActiveTab] = useState("detail");

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require("../../assets/images/sipesdetail.png")}
                style={styles.eventImage}
            />

            {/* Event Details Card */}
            <View style={styles.detailCard}>
                <Text style={styles.tag}>Seminar</Text>
                <Text style={styles.title}>Seminar SI Fest 2023</Text>

                {/* Event Date and Time */}
                <View style={styles.infoRow}>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Tanggal</Text>
                        <Text style={styles.value}>12 November 2023</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Waktu</Text>
                        <Text style={styles.value}>09:00 - 12:00 WIB</Text>
                    </View>
                </View>

                {/* Event Location */}
                <View style={styles.infoRowTempat}>
                    <Text style={styles.label}>Tempat</Text>
                    <Text style={styles.value}>Grand Ballroom Ayola Hotel Palembang</Text>
                </View>

                {/* Organizer */}
                <View style={styles.organizer}>
                    <Text style={styles.orgName}>HIMSI FASILKOM UNSRI</Text>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followText}>FOLLOW</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Tabs for Detail and Ticket */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === "detail" && styles.tabButtonActive]}
                    onPress={() => setActiveTab("detail")}
                >
                    <Text style={[styles.tabButtonText, activeTab === "detail" && styles.tabButtonTextActive]}>
                        Detail Kegiatan
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === "ticket" && styles.tabButtonActive]}
                    onPress={() => setActiveTab("ticket")}
                >
                    <Text style={[styles.tabButtonText, activeTab === "ticket" && styles.tabButtonTextActive]}>
                        Tiket
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Conditional Rendering based on active tab */}
            {activeTab === "detail" ? (
                // Detail Kegiatan Content
                <View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.sectionTitle}>Deskripsi</Text>
                        <Text style={styles.descriptionText}>
                            [ SEMINAR IT NASIONAL SI FEST 2023 ]{"\n"}
                            Hello Fellas! 👋 {"\n\n"}
                            HIMSI UNSRI Proudly Present{"\n"}✨SEMINAR IT NASIONAL SI FEST 2023✨{"\n"}
                            Pada tahun ini, SI FEST 2023 kembali menghadirkan acara puncak dari rangkaian SI FEST itu
                            sendiri yaitu, Seminar Nasional dengan mengangkat tema “Artificial Intelligence: Is It a Good Thing or a Bad Thing?”{" "}
                        </Text>
                    </View>

                    {/* Benefits */}
                    <View style={styles.benefitsContainer}>
                        <Text style={styles.sectionTitle}>Keuntungan</Text>
                        <View style={styles.benefitsList}>
                            <Text style={styles.benefitItem}>• Seminar Kit</Text>
                            <Text style={styles.benefitItem}>• Sertifikat</Text>
                            <Text style={styles.benefitItem}>• Ilmu yang bermanfaat</Text>
                            <Text style={styles.benefitItem}>• Menambah Relasi</Text>
                        </View>
                    </View>
                </View>
            ) : (
                // Ticket Content
                <View>
                    <View style={styles.ticketContainer}>
                        <Text style={styles.sectionTitle}>Tiket Tersedia</Text>
                        <View style={styles.ticketCard}>
                            <View style={styles.ticketLabel}>
                                <Text style={styles.ticketLabelText}>TERBUKA UNTUK UMUM</Text>
                            </View>
                            <View style={styles.ticketInfo}>
                                <Text style={styles.ticketInfoText}>
                                    <Icon name="calendar" size={14} color="#000" /> 12 November 2023, 10.00 - 15.00{" "}
                                </Text>
                                <Text style={styles.ticketInfoText}>
                                    {" "}<Icon name="map-marker" size={14} color="#000" />{" "} Offline (Tatap Muka)
                                </Text>
                            </View>
                            <View style={styles.ticketFooter}>
                                <Text style={styles.ticketPrice}>GRATIS</Text>
                                <TouchableOpacity style={styles.selectButton}>
                                    <Text style={styles.selectButtonText}>PILIH</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Checkout Button */}
                    <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#f9f9f9",
    },
    header: {
        flexDirection: "row",
        padding: 10,
    },
    eventImage: {
        width: "100%",
        height: 550,
    },
    detailCard: {
        backgroundColor: "#fff",
        margin: 15,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    tag: {
        backgroundColor: "#E0E7FF",
        color: "#1E40AF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontFamily: "Outfit-Semibold",
        fontSize: 14,
        alignSelf: "flex-start",
    },
    title: {
        fontSize: 24,
        fontFamily: "Outfit-Bold",
        marginVertical: 10,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    infoRowTempat: {
        justifyContent: "space-between",
        marginBottom: 10,
    },
    infoItem: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontFamily: "Outfit-Medium",
        color: "#6B7280",
    },
    value: {
        fontSize: 16,
        fontFamily: "Outfit-Regular",
    },
    organizer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    orgName: {
        fontSize: 16,
        fontFamily: "Outfit-Semibold",
    },
    followButton: {
        backgroundColor: "#1E40AF",
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    followText: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Outfit-Semibold",
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#F3F4F6",
        marginTop: 10,
    },
    tabButton: {
        padding: 15,
    },
    tabButtonActive: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#1E40AF",
    },
    tabButtonText: {
        fontSize: 16,
        fontFamily: "Outfit-Semibold",
        color: "#6B7280",
    },
    tabButtonTextActive: {
        fontSize: 16,
        color: "#1E40AF",
        fontFamily: "Outfit-Semibold",
    },
    descriptionContainer: {
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: "Outfit-Medium",
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 14,
        fontFamily: "Outfit-Regular",
        color: "#4B5563",
    },
    benefitsContainer: {
        padding: 15,
    },
    benefitsList: {
        marginTop: 10,
    },
    benefitItem: {
        fontSize: 14,
        fontFamily: "Outfit-Regular",
        marginBottom: 5,
    },
    ticketContainer: {
        padding: 15,
    },
    ticketCard: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    ticketLabel: {
        backgroundColor: "#E0E7FF",
        borderRadius: 5,
        padding: 5,
    },
    ticketLabelText: {
        color: "#1E40AF",
        fontSize: 14,
        fontFamily: "Outfit-Semibold",
    },
    ticketInfo: {
        marginTop: 10,
    },
    ticketInfoText: {
        fontSize: 14,
        fontFamily: "Outfit-Medium",
        color: "#4B5563",
        marginBottom: 5,
    },
    ticketFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    ticketPrice: {
        fontSize: 16,
        fontFamily: "Outfit-Semibold",
        color: "#1E40AF",
    },
    selectButton: {
        backgroundColor: "#1E40AF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    selectButtonText: {
        color: "#fff",
        fontFamily: "Outfit-Semibold",
    },
    checkoutButton: {
        backgroundColor: "#1E40AF",
        paddingVertical: 15,
        marginHorizontal: 15,
        borderRadius: 25,
        alignItems: "center",
        marginBottom: 10,
    },
    checkoutButtonText: {
        color: "#fff",
        fontFamily: "Outfit-Bold",
        fontSize: 16,
    },
});

export default DetailScreen;
