/**
 * Sign in page
 * @author: @fahmousss
 * @version: 1.0.0
 * @since: 2024-11-12
 * @assigned_to : @ini_trik
 * @description : Sign in page
 **/

import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Button, Touchable, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';
import * as Font from 'expo-font';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) Alert.alert(error.message);

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

        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          autoCapitalize="words"
          keyboardType="default"
        />

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

        <TouchableOpacity
          disabled={loading}
          style={{
            backgroundColor:"#24A",
            padding:16,
            marginBottom:6,
            borderRadius:10,
            alignItems:'center',
          }}
          onPress={signInWithEmail}>
            <Text
            style={{
              color:"white",
              fontWeight:"bold",
            }}>
              MASUK
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={loading}
          style={{
            backgroundColor:"#DDA915",
            padding:16,
            marginBottom:6,
            borderRadius:10,
            alignItems:'center',
          }}
          onPress={signUpWithEmail}>
            <Text
            style={{
              color:"white",
              fontWeight:"bold",
            }}>
              DAFTAR
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
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  logoU: {
    color: '#DDA915',
  },
  logoMeet: {
    color: '#3470A2',
  },
});