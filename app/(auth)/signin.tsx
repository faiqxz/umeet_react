import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function SignInScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Login berhasil!');
      // Navigasi ke halaman utama setelah login
    }
    setLoading(false);
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Selamat Datang di <Text style={styles.logoU}>U-</Text>
          <Text style={styles.logoMeet}>Meet</Text>
        </Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan kata sandi"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          keyboardType="default"
          autoCapitalize="none"
        />

        {/* Tombol Sign In */}
        <TouchableOpacity
          disabled={loading}
          style={[styles.button, { backgroundColor: '#24A' }]}
          onPress={signInWithEmail}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>MASUK</Text>
          )}
        </TouchableOpacity>

        {/* Tombol untuk pindah ke Sign Up */}
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.linkButtonText}>
            Belum punya akun? {""} 
            <Text style={styles.linkButtonTextDaftar}>Daftar</Text>
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
    marginBottom: 4,
    marginHorizontal: 20,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  logoU: {
    color: '#DDA915',
  },
  logoMeet: {
    color: '#3470A2',
  },
  button: {
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
  linkButtonTextDaftar: {
    fontFamily: "Outfit-Medium",
    textDecorationLine: "underline",
  },
});
