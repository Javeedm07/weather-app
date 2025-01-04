import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3000;

const appid = process.env.OPEN_WEATHER_API;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/weather", async (req, res) => {
  try {
    const city = req.body.city;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    );
    const result = response.data;
    res.render("index.ejs", {
      weatherData: result,
    });
  } catch (error) {
    let errorMessage = "An error occurred.";

    if (error.response) {
      if (error.response.status === 404) {
        errorMessage = "City not found. Please enter a valid city name.";
      } else if (error.response.status === 401) {
        errorMessage = "Unauthorized. Please check your API key.";
      } else {
        errorMessage = `API Error: ${error.response.statusText}`;
      }
    } else if (error.request) {
      errorMessage = "Network error. Please check your internet connection.";
    } else {
      errorMessage = `Error: ${error.message}`;
    }
    console.error("Failed to make request:", errorMessage);
    res.render("index.ejs", {
      error: errorMessage,
    });
  }
});

app.listen(PORT, () => {
  console.log(`LISTENING AT PORT ${PORT}`);
});
