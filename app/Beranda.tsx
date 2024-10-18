import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Text style={styles.title}>U-Meet</Text>
                    <Text style={styles.subtitle}>Selamat Datang, OCTA DWIANSYAH</Text>
                    <Text style={styles.description}>
                        RIFKO telah mengikuti <Text style={styles.highlight}>3 Kegiatan bulan ini</Text>
                    </Text>
                    <View style={styles.statContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>15 Mengikuti</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>5 Sertifikat</Text>
                        </View>
                    </View>
                    <View style={styles.upcomingEvents}>
                        <Text style={styles.sectionTitle}>Kegiatan mendatang</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Sedang diikuti</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSecondary}>
                            <Text style={styles.buttonTextSecondary}>Disimpan</Text>
                        </TouchableOpacity>
                        <View style={styles.eventCard}>
                            <Text style={styles.eventTime}>Hari ini, 08:00</Text>
                            <Text style={styles.eventTitle}>IF FEST 2024</Text>
                            <Text style={styles.eventOrganizer}>HMIF Fasilkom Unsri</Text>
                        </View>
                        <View style={styles.followedByContainer}>
                            <Text style={styles.followedByText}>Diikuti oleh</Text>
                            <View style={styles.avatarContainer}>
                                {/* Sample avatars */}
                                <Image source={{ uri: "https://placehold.co/20x20" }} style={styles.avatar} />
                                <Image source={{ uri: "https://placehold.co/20x20" }} style={styles.avatar} />
                                <Image source={{ uri: "https://placehold.co/20x20" }} style={styles.avatar} />
                                <Image source={{ uri: "https://placehold.co/20x20" }} style={styles.avatar} />
                                <Image source={{ uri: "https://placehold.co/20x20" }} style={styles.avatar} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.exploreEvents}>
                        <Text style={styles.sectionTitle}>Jelajahi event</Text>
                        <View style={styles.eventIcons}>
                            <View style={styles.iconContainer}>
                                <Text style={styles.icon}>📋</Text>
                                <Text style={styles.iconText}>Terdaftar</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Text style={styles.icon}>❤️</Text>
                                <Text style={styles.iconText}>Favorit</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Text style={styles.icon}>⏳</Text>
                                <Text style={styles.iconText}>Riwayat</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Text style={styles.icon}>🎓</Text>
                                <Text style={styles.iconText}>Sertifikat</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.organizers}>
                        <Text style={styles.sectionTitle}>Penyelenggara</Text>
                        <View style={styles.organizerLogos}>
                            <Image source={{ uri: "https://placehold.co/50x50" }} style={styles.organizerLogo} />
                            <Image source={{ uri: "https://placehold.co/50x50" }} style={styles.organizerLogo} />
                            <Image source={{ uri: "https://placehold.co/50x50" }} style={styles.organizerLogo} />
                            <Image source={{ uri: "https://placehold.co/50x50" }} style={styles.organizerLogo} />
                        </View>
                    </View>
                    <View style={styles.recommendations}>
                        <Text style={styles.sectionTitle}>Rekomendasi untuk Anda</Text>
                        <View style={styles.recommendationContainer}>
                            <View style={styles.recommendationCard}>
                                <Image source={{ uri: "https://placehold.co/150x100" }} style={styles.recommendationImage} />
                                <Text style={styles.recommendationTitle}>Pertamina Goes to Campus</Text>
                                <Text style={styles.recommendationSubTitle}>PNRE University Outreach & Engagement</Text>
                            </View>
                            <View style={styles.recommendationCard}>
                                <Image source={{ uri: "https://placehold.co/150x100" }} style={styles.recommendationImage} />
                                <Text style={styles.recommendationTitle}>Open Recruitment Staff</Text>
                                <Text style={styles.recommendationSubTitle}>Open Recruitment Staff All BEM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.calendar}>
                        <Text style={styles.sectionTitle}>Kalender</Text>
                        {/* Calendar structure can be implemented here */}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        marginTop: 10,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 5,
    },
    description: {
        fontSize: 16,
        color: '#6b7280',
    },
    highlight: {
        color: '#1E90FF',
        fontWeight: 'bold',
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
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
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 20,
        marginTop: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonSecondary: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 20,
        marginTop: 5,
        alignItems: 'center',
    },
    buttonTextSecondary: {
        color: '#6b7280',
        fontWeight: 'bold',
    },
    eventCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    eventTime: {
        fontSize: 12,
        color: '#6b7280',
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventOrganizer: {
        fontSize: 14,
        color: '#6b7280',
    },
    followedByContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    followedByText: {
        fontSize: 14,
        color: '#6b7280',
    },
    avatarContainer: {
        flexDirection: 'row',
        marginLeft: 5,
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    iconContainer: {
        alignItems: 'center',
    },
    icon: {
        fontSize: 24,
        color: '#1E90FF',
    },
    iconText: {
        fontSize: 12,
    },
    organizers: {
        marginTop: 20,
    },
    organizerLogos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    recommendationCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginRight: 10,
        width: '48%',
    },
    recommendationImage: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    recommendationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
    },
    recommendationSubTitle: {
        fontSize: 14,
        color: '#6b7280',
        padding: 5,
    },
    calendar: {
        marginTop: 20,
    },
});

export default HomeScreen;
