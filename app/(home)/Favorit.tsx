import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { supabase } from "@/lib/supabase";
import EventCard from "@/components/EventCard";
import { EventList } from "@/components/EventList";
import useEventData from "@/hooks/useEventData";

const FavoritScreen = () => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
});

export default FavoritScreen;
