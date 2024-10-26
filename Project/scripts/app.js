// Add click event to the hamburger icon
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the menu visibility on click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Load the current year dynamically
    document.getElementById("year").textContent = new Date().getFullYear();

    // Call the function to load games from the RAWG API
    loadGamesFromAPI();
});

// Function to fetch games from the RAWG API
async function loadGamesFromAPI() {
    const apiKey = 'e58fe9955caa4d488a0685411a25bc80';  // Replace with your actual API key
    const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=5`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayGames(data.results);
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

// Function to display the fetched games
function displayGames(games) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';  // Clear existing content

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.innerHTML = `
            <h3>${game.name}</h3>
            <p>Released: ${game.released}</p>
            <p>Rating: ${game.rating}</p>
            <img src="${game.background_image}" alt="${game.name}" width="300">
        `;
        gameList.appendChild(gameItem);
    });
}
