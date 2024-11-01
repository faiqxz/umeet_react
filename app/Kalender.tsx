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
      <View style={styles.daysContainer}>
        {days.map((day) => (
          <View key={day} style={styles.dayHeader}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
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
    marginTop: 10,
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
    textAlign: 'center',
    marginBottom: 16,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  dayHeader: {
    flex: 1,
    alignItems: 'center',
  },
  dateContainer: {
    justifyContent: 'space-around',
  },
  dayContainer: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    marginHorizontal: 2,
    minWidth: 40, // Minimal lebar untuk setiap tanggal
  },
  today: {
    backgroundColor: '#f0f0f0', // Warna untuk tanggal hari ini
    borderRadius: 10,
    borderColor: "#3470A2",
    borderWidth: 1,
  },
  dayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

export default Calendar;
