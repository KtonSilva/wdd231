document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    document.getElementById("year").textContent = new Date().getFullYear();

    loadGamesFromAPI();  // Carregar jogos da API
});

// Função para buscar jogos da API RAWG
async function loadGamesFromAPI() {
    const apiKey = 'e58fe9955caa4d488a0685411a25bc80';  // Substitua pela sua chave de API
    const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=4`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayGames(data.results);  // Exibir jogos
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

// Função para exibir jogos
function displayGames(games) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';  // Limpar conteúdo existente

    games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.innerHTML = `
            <img src="${game.background_image || 'images/custom.jpg'}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>Released: ${game.released}</p>
            <p>Rating: ${game.rating}</p>
        `;
        gameList.appendChild(card);
    });
}
