document.addEventListener("DOMContentLoaded", () => {
    const weatherApiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Recife&appid=${weatherApiKey}&units=metric`;

    async function fetchWeather() {
        try {
            const response = await fetch(weatherApiUrl);
            const weatherData = await response.json();

            const temperature = Math.round(weatherData.main.temp);
            const weatherDescription = weatherData.weather.map(item => item.description.charAt(0).toUpperCase() + item.description.slice(1)).join(", ");
            
            document.getElementById('temperature').textContent = `Current Temperature: ${temperature}°C`;
            document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;
            displayForecast(weatherData);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    async function fetchSpotlights() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            const spotlights = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
            const randomSpotlights = spotlights.sort(() => 0.5 - Math.random()).slice(0, 3);
            displaySpotlights(randomSpotlights);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displaySpotlights(members) {
        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = members.map(member => `
            <div class="spotlight-card">
                <h3>${member.name}</h3>
                <img src="${member.image}" alt="${member.name}">
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            </div>
        `).join('');
    }

    function displayForecast(weatherData) {
        const forecastContainer = document.getElementById('forecast');
        // Add 3-day forecast logic here if you have that data
    }

    fetchWeather();
    fetchSpotlights();

    // Set the copyright year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
