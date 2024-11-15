import { router } from "expo-router";
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useAuth } from "@/provider/AuthProvider";
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ position: 'relative' }}>
                <Image
                    source={require("../../assets/images/avapro.jpg")}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
            </View>
            <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>Mohammad Rizky S</Text>
            <Text style={{ color: 'gray' }}>Universitas Sriwijaya</Text>
            <Button title="Edit Profil" onPress={() => { }} />
            <View style={{ marginTop: 20, width: '100%', maxWidth: 300 }}>
                <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>Profil</Text>
                <TextInput
                    value="Mohammad Rizky S"
                    style={{ width: '100%', marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
                    editable={false}
                />
                <TextInput
                    value="@rzkynaga"
                    style={{ width: '100%', marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
                    editable={false}
                />
                <TextInput
                    value="rzkynaga1@gmail.com"
                    style={{ width: '100%', marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
                    editable={false}
                />
                {/* <TouchableOpacity
                    onPress={async () => {
                        await supabase.auth.signOut()
                    }}>
                    <Text>
                        Sign Out
                    </Text>
                </TouchableOpacity> */}
                <Button title="Keluar" onPress={handleSignOut}/>
            </View>
        </View>
    );
};

export default ProfilePage;
