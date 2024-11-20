import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';


export default function SignUpScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);

    async function signUpWithEmail() {

        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                },
            },
        });

        if (error) {
            Alert.alert('Pendaftaran Gagal: ', error.message || 'Kesalahan tidak diketahui.');
        } else {
            Alert.alert('Register sukses.', 'Akun berhasil dibuat! Selamat datang di U-Meet.');
        }
        setLoading(false);
    }

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.container}>
                <Text style={styles.title}>
                    Register Akun <Text style={styles.logoU}>U-</Text>
                    <Text style={styles.logoMeet}>Meet</Text>
                </Text>

                <Text style={styles.label}>Nama Lengkap</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan nama lengkap"
                    value={fullName}
                    onChangeText={setFullName}
                    autoCapitalize="words"
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Kata Sandi</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan kata sandi"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    disabled={loading}
                    style={[styles.button, { backgroundColor: '#DDA915' }]}
                    onPress={signUpWithEmail}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>DAFTAR</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.linkButton}
                    onPress={() => router.push('/(auth)/signin')}
                >
                    <Text style={styles.linkButtonText}>
                        Sudah punya akun?{' '}
                        <Text style={styles.linkButtonTextMasuk}>
                            Masuk di sini
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        fontFamily: 'Outfit-Semibold',
        textAlign: 'center',
        color: '#333',
    },
    label: {
        fontSize: 16,
        color: '#333',
        fontFamily: 'Outfit-Medium',
        marginHorizontal: 20,
        marginBottom: 4,
        marginTop: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 12,
        marginHorizontal: 20,
        marginBottom: 4,
        fontFamily: 'Outfit-Regular',
    },
    logoU: {
        color: '#DDA915',
    },
    logoMeet: {
        color: '#3470A2',
    },
    button: {
        marginTop: 15,
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 130,
        alignItems: 'center',
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Outfit-Semibold',
        fontSize: 15,
    },
    linkButton: {
        marginTop: 16,
        alignItems: 'center',
    },
    linkButtonText: {
        color: '#3470A2',
        fontFamily: 'Outfit-Regular',
    },
    linkButtonTextMasuk: {
        color: '#3470A2',
        fontFamily: 'Outfit-Regular',
        textDecorationLine: "underline",
    },
});
