import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { supabase } from '@/lib/supabase';
import EventCard from '@/components/EventCard';
import { EventList } from '@/components/EventList';



const FavoritScreen = () => {
    return (
      <View style={styles.container}>
        <EventList />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f9f9f9",
    },
  });
  
  export default FavoritScreen;