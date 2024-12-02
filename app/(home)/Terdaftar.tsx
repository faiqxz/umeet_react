import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import EventCard from "@/components/EventCard";
import { EventList } from "@/components/EventList";
import useEventData from "@/hooks/useEventData";

export default function TerdaftarScreen() {
  const { eventData } = useEventData(null);
  return (
    <View>
      <EventList
        event={eventData}
        isHorizontal={false}
        footerComponent={null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  organizer: {
    fontSize: 14,
    color: "#555",
  },
  category: {
    fontSize: 14,
    color: "#555",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
  description: {
    fontSize: 12,
    color: "#777",
    marginVertical: 5,
  },
});
