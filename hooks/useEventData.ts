import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; // Import the initialized Supabase client

type Params = {
  id?: string | number |any| null;
  title?: string | null;
  category?: string | null;
  organizer?: string | null;
  date?: string | null;
};

const useEventData = (params: Params | null) => {
  const [eventData, setEventData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Start with a base query
        let query = supabase
          .from("Event")
          .select("*, category: Event_Types(name)");

        // If params is not null, add conditions based on available params
        if (params) {
          if (params.id) {
            query = query.eq("id", params.id);
          }

          if (params.title) {
            query = query.ilike("title", `%${params.title}%`);
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
  }, [params?.title]); // Re-run the effect whenever `params` change

  return { eventData, loading, error };
};

export default useEventData;
