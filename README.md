# Weather App

A modern, responsive weather dashboard application built with Node.js, Express, and the OpenWeatherMap API. This application provides real-time weather information for cities worldwide with a beautiful and intuitive user interface.

## Features

- Real-time weather data fetching from OpenWeatherMap API
- Detailed weather information including:
  - Current temperature and "feels like" temperature
  - Weather description with icons
  - High and low temperatures
  - Humidity and wind speed
  - Atmospheric pressure
  - Visibility
  - Sunrise and sunset times
- Responsive design that works on desktop and mobile devices
- Popular cities quick-access buttons
- Error handling with user-friendly messages
- Modern UI with smooth animations and hover effects

## Screenshots
![weather-app-home](https://github.com/user-attachments/assets/f2248930-4b05-437e-950e-56e3e8d7d191)
![weather-app-city](https://github.com/user-attachments/assets/67df2c62-3e2e-4535-9f05-77bf75c0eca5)



## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - EJS (Embedded JavaScript templates)
  - Axios for API requests

- **Frontend:**
  - HTML5
  - CSS3
  - Font Awesome icons
  - Responsive design

## Prerequisites

- Node.js installed on your system
- OpenWeatherMap API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Javeedm07/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```
OPEN_WEATHER_API=your_api_key_here
```

4. Start the application:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
weather-app/
├── public/
│   └── styles/
│       └── main.css
├── views/
│   └── index.ejs
└── index.js
```

## Configuration

The application uses the following environment variables:
- `PORT`: The port number for the server (default: 3000)
- `OPEN_WEATHER_API_`: Your OpenWeatherMap API key

## Usage

1. Open the application in your web browser
2. Enter a city name in the search bar
3. Click the search button or press Enter
4. View detailed weather information for the selected city
5. Use the popular cities buttons for quick access to major Indian cities

## Error Handling

The application includes error handling for:
- Invalid city names
- Failed API requests
- Network errors

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
