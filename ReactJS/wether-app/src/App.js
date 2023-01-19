import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(" ");
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const getWetherDetails = () => {
    let response = axios
      .get("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather", {
        params: { city: input },
        headers: {
          "X-RapidAPI-Key":
            "db469dda77msh2a858af8d4713e0p181b7ajsnd140358bc5e7",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      })
      .then((response) => setData(response.data));

    // const options = {
    //   method: "GET",
    //   url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    //   params: { city: "mumbai" },
    //   headers: {
    //     "X-RapidAPI-Key": "db469dda77msh2a858af8d4713e0p181b7ajsnd140358bc5e7",
    //     "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    //   },
    // };
  };
  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h2 className="heading">Wether App</h2>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={getWetherDetails}
          >
            Search
          </button>
        </div>
      </div>

      <div className="col-md-12 text-centter mt-5">
        <div className="shadow rounded wetherResultBox">
          <img
            className="wether-icon"
            src="data:image/png;base64,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"
          />
          <h5 className="wetherCity">{input}</h5>
          <h6 className="wetherTemp">{data.temp}°C</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
