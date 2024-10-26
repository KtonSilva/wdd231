document.getElementById('review-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    const newGame = {
        name: document.getElementById('game-name').value,
        rating: parseFloat(document.getElementById('rating').value),
        image: 'images/custom.jpg'
    };

    try {
        const response = await fetch('data/games.json');
        const games = await response.json();

        games.push(newGame); // Adiciona o novo jogo à lista

        await saveGames(games); // Salva a lista atualizada
        alert('Review submitted successfully!');
    } catch (error) {
        console.error('Error submitting review:', error);
        alert('Failed to submit review.');
    }
});

// Função para salvar os jogos no arquivo JSON (simulada)
async function saveGames(games) {
    console.log('Updated games:', JSON.stringify(games, null, 2));
    // Simula a gravação do JSON (A gravação real depende do backend)
}
