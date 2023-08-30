# IP Address Geolocation Viewer

IP Address Geolocation Viewer is a web application built using React, Leaflet, and other technologies, allowing users to discover information about their IP address and its geographical location.

 [![Netlify](https://img.shields.io/badge/Netlify-Open%20App-blueviolet)](https://whatsyourip.netlify.app)

# Features
- Displays the user's IP address and its location on an interactive map.
- Showcase important data such as country, state/province, city, zip code, ISP, coordinates, and continent.
- Enhance user experience by visualizing the corresponding country flag.

# Getting Started
Follow these instructions to set up and run the project locally on your machine.

### Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from nodejs.org.
### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/adhanif/mapReact.git
   ```
2. Navigate to the project directory:
   
   ```bash
   cd mapReact
   ```
3. Install  dependencies:

   ```bash
   npm install
   ```
## Configuration
1. Obtain an API key from `ipgeolocation.io` by signing up for an account.
2. Create a .env file in the project root directory and add your API key:

   ```bash
   VITE_API_KEY=your_api_key_here
   ```
## Running the Application

   ```bash
   npm run dev
   ```
## Technologies Used
- React: JavaScript library for building user interfaces.
- Leaflet: Open-source JavaScript library for interactive maps.
- Bootstrap: Front-end component library for responsive design.
- Axios: Promise-based HTTP client for making API requests.


