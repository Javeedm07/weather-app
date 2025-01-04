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
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`LISTENING AT PORT ${PORT}`);
});
