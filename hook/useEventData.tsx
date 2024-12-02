import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; // Import the initialized Supabase client

const useEventData = (params: { [key: string]: any }) => {
  const [eventData, setEventData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Building the query dynamically based on the params object
        let query = supabase.from("Event").select("*, category: Event_Types(name)");

        if (params.id) {
          query = query.eq("id", params.id);
        }

        if (params.title) {
          query = query.like("title", params.title);
        }
        
        if (params.category) {
          query = query.eq("category", params.category);
        }

        if (params.organizer) {
          query = query.eq("organizer", params.organizer);
        }

        if (params.date) {
          query = query.eq("date", params.date);
        }

        // Fetch the event data from Supabase
        const { data, error: fetchError } = await query;

        if (fetchError) {
          throw new Error(fetchError.message);
        }

        setEventData(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, []); // Re-run the effect whenever `params` change

  return { eventData, loading, error };
};

export default useEventData;
