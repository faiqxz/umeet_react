import { router } from "expo-router";
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { supabase } from "@/lib/supabase";

const ProfilePage: React.FC = () => {
    const handleSignOut = async () => {
        try {
            await supabase.auth.signOut();
            // Tindakan setelah berhasil sign out, misalnya navigasi
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profilePictureWrapper}>
                <Image
                    source={require("../../assets/images/avapro.jpg")}
                    style={styles.profilePicture}
                />
            </View>
            <Text style={styles.nameText}>Mohammad Rizky S</Text>
            <Text style={styles.universityText}>Universitas Sriwijaya</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => { }}>
                <Text style={styles.editButtonText}>Edit Profil</Text>
            </TouchableOpacity>
            <View style={styles.profileSection}>
                <Text style={styles.sectionTitle}>Profil</Text>
                <TextInput
                    value="Mohammad Rizky S"
                    style={styles.input}
                    editable={false}
                />
                <TextInput
                    value="@rzkynaga"
                    style={styles.input}
                    editable={false}
                />
                <TextInput
                    value="rzkynaga1@gmail.com"
                    style={styles.input}
                    editable={false}
                />
                <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
                    <Text style={styles.logoutButtonText}>Keluar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    profilePictureWrapper: {
        position: 'relative',
        borderColor: "#3470A2",
        borderWidth: 2,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 5,
        borderRadius: 100,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    nameText: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    universityText: {
        color: 'gray',
        marginBottom: 5,
        fontSize: 15,
    },
    editButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#3470A2',
        borderRadius: 35,
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileSection: {
        marginTop: 20,
        width: '100%',
        maxWidth: 300,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        backgroundColor: '#f9f9f9',
    },
    logoutButton: {
        marginTop: 20,
        paddingVertical: 10,
        backgroundColor: '#740D0D',
        borderRadius: 25,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfilePage;
