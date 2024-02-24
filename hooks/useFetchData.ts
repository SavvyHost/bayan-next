"use client";
import { useState, useEffect } from "react";

function useFetchData<T>(endpoint: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const baseURL = import.meta.env.VITE_BASE_URL;
  console.log("🚀 ~ baseURL:", baseURL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseURL}${endpoint}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const jsonData = await res.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
export default useFetchData;
