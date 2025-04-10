import { createContext, useEffect, useState } from "react";
import api from "../utils/Api";

// Context'in temelini oluşturma
export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("https://yt-api.p.rapidapi.com/search?query=fi");
        setVideos(response.data?.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, []);
  return (
    <VideoContext.Provider value={{ videos, error, isLoading }}>
      {children}
    </VideoContext.Provider>
  )
}