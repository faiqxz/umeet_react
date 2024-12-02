import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import EventCard from "@/components/EventCard";
import { EventList } from "@/components/EventList";
import useEventData from "@/hooks/useEventData";

interface Event {
  id: string;
  title: string;
  description: string;
  image: any;
}

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Outfit-Regular": require("../../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Semibold": require("../../assets/fonts/Outfit-SemiBold.ttf"),
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { eventData } = useEventData({ title: searchQuery });

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Cari event..."
        placeholderTextColor="#B0B0B0"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Text style={styles.sectionTitle}>Rekomendasi Event untuk Anda</Text>

      {/* {filteredEvents.length > 0 ? (
          <FlatList
            data={filteredEvents}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <EventList event={item} />} // Ensure EventList can accept a single event
            contentContainerStyle={styles.recommendationContainer}
          />
        ) : (
          <Text style={styles.noResults}>Tidak ada event ditemukan.</Text>
        )} */}
      {eventData.length > 0 ? (
        <EventList
          event={eventData}
          isHorizontal={false}
          footerComponent={null}
        />
      ) : (
        <Text style={styles.noResults}>Tidak ada event ditemukan.</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  searchBar: {
    height: 50,
    borderColor: "#3470A2",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    margin: 20,
    backgroundColor: "#F8F8F8",
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Outfit-Semibold",
    marginLeft: 20,
    marginBottom: 10,
  },
  recommendationContainer: {
    paddingHorizontal: 20,
  },
  noResults: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    padding: 20,
  },
});
