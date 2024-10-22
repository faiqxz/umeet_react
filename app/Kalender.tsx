// Calendar.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Komponen untuk menampilkan satu hari
const Day = ({ date, isToday, onPress }) => (
  <TouchableOpacity style={[styles.dayContainer, isToday && styles.today]} onPress={onPress}>
    <Text style={styles.dayText}>{date}</Text>
  </TouchableOpacity>
);

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Mengambil tanggal saat ini
  const today = new Date();
  const currentDate = today.getDate(); // Hari bulan
  const currentMonth = today.getMonth(); // Bulan (0-11)
  const currentYear = today.getFullYear(); // Tahun

  // Misalnya, kita akan menampilkan bulan ini
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1); // Tanggal 1-31

  const handlePress = (date) => {
    console.log(`Tanggal ${date} diklik!`);
    // Anda dapat menambahkan logika lain sesuai kebutuhan di sini
  };

  return (
    <View style={styles.calendar}>
      <Text style={styles.sectionTitle}>Oktober</Text>
      <FlatList
        data={days}
        renderItem={({ item }) => (
          <View style={styles.dayHeader}>
            <Text style={styles.dayText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={styles.daysContainer}
      />
      <FlatList
        data={monthDays}
        renderItem={({ item }) => (
          <Day 
            date={item} 
            isToday={item === currentDate} 
            onPress={() => handlePress(item)} 
          />
        )}
        keyExtractor={(item) => item.toString()}
        numColumns={7} // 7 kolom untuk 7 hari
        contentContainerStyle={styles.dateContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  daysContainer: {
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  dayHeader: {
    padding: 10,
    alignItems: 'center',
  },
  dateContainer: {
    justifyContent: 'center',
  },
  dayContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  today: {
    backgroundColor: '#3B82F6', // Warna untuk tanggal hari ini
    borderRadius: 10, // Bulatkan sudut
  },
  dayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

export default Calendar;
