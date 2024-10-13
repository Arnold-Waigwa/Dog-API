import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
const ACCESS_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [catData, setCatData] = useState(null);
  const query = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&api_key=live_B1lsNHKvsj9DwVdRNWfY6S4gKjuhSENKFZ4CxvNQEqT5IS9k3m4nl4aFICrANWVw`;

  const apiCall = async (query) => {
    try {
      const response = await fetch(query);
      const json = await response.json();
      if (json.length > 0) {
        const breed =
          json[0].breeds && json[0].breeds.length > 0
            ? json[0].breeds[0]
            : null;
        const catInfo = {
          name: breed?.name || "Unknown Cat",
          imageUrl: json[0].url,
          breed: breed?.name || "Unknown breed",
          origin: breed?.origin || "Unknown origin",
          weight: breed?.weight?.imperial || "Unknown weight",
          temperament: breed?.temperament || "Unknown temperament",
          lifeSpan: breed?.life_span || "Unknown lifespan",
          description: breed?.description || "No description available",
        };
        setCatData(catInfo);
      }
    } catch (error) {
      alert(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    setCatData(null);
    apiCall(query);
  }, []); // The empty array ensures the effect runs only once, on mount.

  return (
    <Hero
      catData={catData}
      handleClick={() => apiCall(query)} // Pass the query when calling the API
    />
  );
}

export default App;
