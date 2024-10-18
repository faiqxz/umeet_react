import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faArrowLeft} size={32} color="#1E90FF" />
                </TouchableOpacity>
                <Text style={styles.title}>Riwayat</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Beasiswa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Lomba</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Seminar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Kegiatan</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.eventList}>
                {eventData.map((event, index) => (
                    <View key={index} style={styles.eventCard}>
                        <View style={styles.eventHeader}>
                            <Text style={styles.eventTitle}>{event.title}</Text>
                            <Text style={styles.status}>Selesai</Text>
                        </View>
                        <Image source={{ uri: event.image }} style={styles.eventImage} />
                        <View style={styles.ratingContainer}>
                            <View style={styles.starContainer}>
                                {[...Array(5)].map((_, starIndex) => (
                                    <FontAwesomeIcon key={starIndex} icon={faStar} color="#FFD700" />
                                ))}
                            </View>
                            <Text style={styles.commentText}>Beri komentar</Text>
                        </View>
                        <TouchableOpacity style={styles.detailButton}>
                            <Text style={styles.detailButtonText}>Rincian Kegiatan</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const eventData = [
    {
        title: 'SI FEST 2023',
        image: 'https://placehold.co/600x300',
    },
    {
        title: 'Mastering Your UX Research',
        image: 'https://placehold.co/600x300',
    },
    {
        title: 'Pertamina Goes to Campus',
        image: 'https://placehold.co/600x300',
    },
];

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    eventList: {
        space: '4',
    },
    eventCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        padding: 16,
        marginBottom: 16,
    },
    eventHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        color: '#FFD700',
        fontWeight: 'bold',
    },
    eventImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    starContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    commentText: {
        color: '#6b7280',
    },
    detailButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: 'center',
    },
    detailButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
