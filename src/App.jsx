import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
const ACCESS_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [catData, setCatData] = useState(null);
  const [banned, setBanned] = useState([]);
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
        };

        const isBanned = [
          catInfo.breed,
          catInfo.weight,
          catInfo.origin,
          catInfo.lifeSpan,
          catInfo.temperament,
        ].some((attr) => banned.includes(attr));

        if (!isBanned) {
          setCatData(catInfo);
        } else {
          apiCall(query);
        }
      }
    } catch (error) {
      alert(`Error fetching data: ${error.message}`);
    }
  };

  const handleAttribute = (attribute) => {
    setBanned((prevBanned) => [...prevBanned, attribute]);
  };

  const handleUnban = (attribute) => {
    setBanned((prevBanned) => prevBanned.filter((item) => item !== attribute));
  };

  return (
    <Hero
      catData={catData}
      handleClick={() => apiCall(query)} // Pass the query when calling the API
      handleAttribute={handleAttribute}
      banned={banned}
      handleUnban={handleUnban}
    />
  );
}

export default App;
