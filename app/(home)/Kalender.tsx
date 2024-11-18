import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface DayProps {
  date: number;
  isToday: boolean;
  onPress: () => void;
}

const Day: React.FC<DayProps> = ({ date, isToday, onPress }) => (
  <TouchableOpacity style={[styles.dayContainer, isToday && styles.today]} onPress={onPress}>
    <Text style={styles.dayText}>{date}</Text>
  </TouchableOpacity>
);

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const monthDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysArray = [...Array(firstDayOfMonth).fill(null), ...Array.from({ length: monthDays }, (_, i) => i + 1)];

  const handlePress = (date: number) => {
    console.log(`Tanggal ${date} diklik oleh user!`);
  };

  return (
    <View style={styles.calendar}>
      <Text style={styles.sectionTitle}>{today.toLocaleString('default', { month: 'long' })} {currentYear}</Text>
      <View style={styles.daysContainer}>
        {days.map((day) => (
          <View key={day} style={styles.dayHeader}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={daysArray}
        renderItem={({ item }) => (
          item ? (
            <Day 
              date={item} 
              isToday={item === currentDate} 
              onPress={() => handlePress(item)} 
            />
          ) : (
            <View style={styles.emptyDay} /> 
          )
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={7}
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
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Outfit-Medium',
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 8,
  },
  dayHeader: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    justifyContent: 'center', 
  },
  dateContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  dayContainer: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    marginHorizontal: 2,
    minWidth: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  today: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderColor: '#3470A2',
    borderWidth: 2,
  },
  dayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Outfit-Regular',
  },
  emptyDay: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 2,
    minWidth: 40,
  },
});

export default Calendar;