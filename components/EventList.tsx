import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import EventCard from "./EventCard";


export function EventList({
  isHorizontal,
  footerComponent,
  filterFavorites = false, // New prop to determine if we fetch only favorites
  searchQuery = "", // New prop for search query
  event = [],
}: {
  isHorizontal: boolean;
  footerComponent: any;
  filterFavorites?: boolean; // Defaults to false
  searchQuery: string; // Accept searchQuery prop
  event: any 
}) {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Loading state for fetching

  // Fetch events whenever `filterFavorites` or `searchQuery` changes
  // useEffect(() => {
  //   fetchEvents();
  // }, [filterFavorites, searchQuery]); // Refetch when either filterFavorites or searchQuery changes

  // const fetchEvents = async () => {
  //   setLoading(true);
  //   try {
  //     let fetchedData: any[] = [];
      
  //     // Check if we need to fetch only the favorites
  //     if (filterFavorites) {
  //       const { data: { session } } = await supabase.auth.getSession();
  //       if (session) {
  //         // Fetch favorites for the logged-in user
  //         const { data, error } = await supabase
  //           .from("favorites")
  //           .select("event_id, events(*)") // Join with the events table
  //           .eq("user_id", session.user.id);

  //         if (error) throw error;
  //         fetchedData = data.map((fav: any) => fav.events); // Extract the events from the favorite data
  //       }
  //     } else {
  //       // Fetch all events if filterFavorites is false
  //       const { data: Event, error } = await supabase.from("Event").select("*");
  //       if (error) throw error;
  //       fetchedData = Event || []; // Use an empty array if no events are found
  //     }

  //     // Apply search query filtering
  //     if (searchQuery !== "") {
  //       fetchedData = fetchedData.filter((event: any) =>
  //         event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         event.description.toLowerCase().includes(searchQuery.toLowerCase())
  //       );
  //     }

  //     setEvents(fetchedData); // Set the fetched events to state
  //   } catch (error) {
  //     console.error("Error fetching events:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // Display loading text if events are still being fetched
  // if (loading) {
  //   return <Text>Loading events...</Text>;
  // }

  // // Display message when no events are found
  // if (events.length === 0) {
  //   return <Text>No events available.</Text>;
  // }

  return (
    <FlatList
      ListFooterComponent={footerComponent} // Footer component to display at the bottom
      horizontal={isHorizontal} // Set whether the list should be horizontal
      data={event} // Use fetched events as data source
      renderItem={({ item }) => (
        <EventCard
          id={item.id}
          title={item.title}
          description={item.description}
          eventDate={item.event_date}
          avatars={null}
          imageUrl={item.image_url}
          organizer={item.organizer}
          price={item.price}
        />
      )}
    />
  );
}