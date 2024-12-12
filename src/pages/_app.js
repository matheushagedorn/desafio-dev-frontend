import React, { useState } from "react";
import { fetchWeather, fetchCitySuggestions } from "@/pages/api/WeatherApp";
import "@/styles/globals.css";

import Image from "next/image";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import SearchIcon from "@mui/icons-material/Search";

import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import WbCloudyTwoToneIcon from '@mui/icons-material/WbCloudyTwoTone';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import DehazeTwoToneIcon from '@mui/icons-material/DehazeTwoTone';

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ name: "", country: "" });

  const handleFetchCitySuggestions = async (query) => {
    const suggestions = await fetchCitySuggestions(query);
    setCitySuggestions(suggestions);
  };

  const handleFetchWeather = async () => {
    if (!selectedCity || !selectedCity.name) {
      setError("Por favor, selecione ou insira o nome de uma cidade válida.");
      return;
    }

    try {
      const weatherData = await fetchWeather(selectedCity.name);
      setWeather(weatherData);
      setError("");
    } catch (err) {
      setError("Cidade não encontrada. Tente novamente.");
      setWeather(null);
    }
  };

  const weatherTranslations = {
    Clear: {
      text: "Céu limpo",
      icon: (<WbSunnyTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Clouds: {
      text: "Nuvens",
      icon: (<WbCloudyTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Rain: {
      text: "Chuva",
      icon: (<WaterDropTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Drizzle: {
      text: "Garoa",
      icon: (<WaterDropTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Thunderstorm: {
      text: "Trovoada",
      icon: (<ThunderstormTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Snow: {
      text: "Neve",
      icon: (<AcUnitTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Mist: {
      text: "Névoa",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Smoke: {
      text: "Fumaça",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Haze: {
      text: "Neblina",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Dust: {
      text: "Poeira",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Fog: {
      text: "Nevoeiro",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Sand: {
      text: "Areia",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />),
    },
    Ash: {
      text: "Cinzas",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />)
    },
    Squall: {
      text: "Rajada",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />)
    },
    Tornado: {
      text: "Tornado",
      icon: (<DehazeTwoToneIcon fontSize="inherit" style={{ fontSize: "120px" }} />)
    },
  };

  const getTranslatedWeather = (weatherMain) => {
    return (
      weatherTranslations[weatherMain] || { text: weatherMain, icon: null }
    );
  };

  const handleCityInputChange = (event) => {
    const query = event.target.value;
    setCity(query);
    handleFetchCitySuggestions(query);
  };

  const handleCitySelect = async (cityName, country) => {
    setCity(cityName);
    setSelectedCity({ name: cityName, country });
    setCitySuggestions([]);

    try {
      const weatherData = await fetchWeather(cityName);
      setWeather(weatherData);
      setError("");
    } catch (err) {
      setError("Cidade não encontrada. Tente novamente.");
      setWeather(null);
    }
  };

  return (
    <div className="justify-center text-center flex flex-col items-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Manchester Weather</h1>
      <div className="relative w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mx-auto p-2">
        <input
          type="text"
          value={city || ""}
          onChange={handleCityInputChange}
          placeholder="Digite o nome da cidade"
          className="border rounded-3xl border-black p-4 pl-8 w-full"
        />
        <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </div>

      {citySuggestions.length > 0 && (
        <ul className="bg-white border rounded p-2 mt-2 w-1/3 max-h-40 overflow-auto">
          {citySuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() =>
                handleCitySelect(suggestion.name, suggestion.country)
              }
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {weather && (
        <div className="mt-6">
          <div className="flex-col text-center justify-center gap-4">
            <p className="flex justify-center items-center text-5xl">
              {getTranslatedWeather(weather.weather[0].main).icon}
            </p>
            <p className="text-gray-500 mt-6">
              {getTranslatedWeather(weather.weather[0].main).text}
            </p>
            <p className="text-5xl mt-6">{weather.main.temp.toFixed(0)}°C</p>
          </div>
          <h2 className="text-5xl">
            {selectedCity.name}{" "}
            {selectedCity.country && `(${selectedCity.country})`}
          </h2>
          <div className="m-6 gap-6 flex items-center justify-center">
            <div className="flex items-center gap-2 text-2xl">
              <ArrowUpwardOutlinedIcon /> {weather.main.temp_max.toFixed(0)}°C
            </div>
            <div className="flex items-center gap-2 text-2xl">
              <ArrowDownwardOutlinedIcon /> {weather.main.temp_min.toFixed(0)}°C
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
