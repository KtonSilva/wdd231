// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'); // Select hamburger button
    const navLinks = document.querySelector('.nav-links'); // Select navigation links
    
    // Add click event to the hamburger button
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle the 'show' class to display the menu
        console.log('Hamburger clicked!'); // Log for debugging
    });

    // Dynamically load the current year into the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Load game data from JSON
    loadGames();
});

// Function to load game data
async function loadGames() {
    try {
        const response = await fetch('data/games.json'); // Fetch game data from JSON file
        const games = await response.json(); // Parse JSON data
        displayGames(games); // Display game data
    } catch (error) {
        console.error('Error loading game data:', error); // Log error if fetching fails
    }
}

// Function to display game data
function displayGames(games) {
    const gameList = document.getElementById('game-list'); // Select game list element
    games.forEach(game => {
        const gameItem = document.createElement('div'); // Create a new div for each game
        gameItem.innerHTML = `<h3>${game.name}</h3><p>Rating: ${game.rating}</p>`; // Set inner HTML with game data
        gameList.appendChild(gameItem); // Append game item to the game list
    });
}
