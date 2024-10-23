import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import sifestImage from "../assets/images/sifest.png";
import iffestImage from "../assets/images/iffest.png"; // Example: Replace with correct image
import uxResearchImage from "../assets/images/UX.png"; // Example: Replace with correct image


const events = [
    {
        date: "12 November 2023",
        title: "SI Fest 2023",
        description: "Artificial Intelligence, Is It A Good Thing Or Bad Thing?",
        organizer: "HIMSI FASILKOM UNSRI",
        image: sifestImage,
        attendees: 3
    },
    {
        date: "15 April 2024",
        title: "IFFEST 2024",
        description: "Ignite The Competition: Sparks Of Informatics",
        organizer: "HIMIF FASILKOM UNSRI",
        image: iffestImage,
        attendees: 4
    },
    {
        date: "12 November 2023",
        title: "Mastering Your UX Research",
        description: "How to Conduct User Research",
        organizer: "GDSC UNSRI",
        image: uxResearchImage,
        attendees: 5
    },
];

const EventCard = ({ event }) => (
    <View style={styles.card}>
        <Image source={event.image} style={styles.eventImage} />
        <View style={styles.eventContent}>
            <View style={styles.eventHeader}>
                <Text style={styles.eventDate}>{event.date}</Text>
                <View style={styles.attendees}>
                    {Array.from({ length: event.attendees }).map((_, index) => (
                        <Image
                            key={index}
                            source={{ uri: "https://placehold.co/24x24" }}
                            style={styles.attendeeAvatar}
                        />
                    ))}
                </View>
            </View>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventOrganizer}>
                <Text style={styles.icon}>👥</Text> {event.organizer}
            </Text>
            <View style={styles.actions}>
                <TouchableOpacity>
                    <Text style={styles.actionIcon}>🔖</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.actionIcon}>🔗</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);


const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 24,
        color: '#1E90FF',
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 20,
    },
    eventImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    eventContent: {
        padding: 15,
    },
    eventHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    eventDate: {
        color: '#6b7280',
        fontSize: 14,
    },
    attendees: {
        flexDirection: 'row',
    },
    attendeeAvatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginLeft: -5,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    eventDescription: {
        color: '#6b7280',
        fontSize: 14,
        marginBottom: 10,
    },
    eventOrganizer: {
        fontSize: 14,
        color: '#6b7280',
    },
    icon: {
        marginRight: 5,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionIcon: {
        fontSize: 20,
        color: '#1E90FF',
    },
});

export default HomeScreen;