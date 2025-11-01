document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResultsDiv = document.getElementById('searchResults');
    const searchPlaceholder = document.querySelector('.search-placeholder');

    
    const allGames = [
        { id: 1, title: "DOOM Eternal", price: "59.99$", tags: ["fps", "action", "top"] },
        { id: 2, title: "Red Dead Redemption II", price: "49.99$", tags: ["adventure", "openworld", "top"] },
        { id: 3, title: "S.T.A.L.K.E.R. 2", price: "69.99$", tags: ["shooter", "survival"] },
        { id: 4, title: "The Elder Scrolls IV: Oblivion", price: "9.99$", tags: ["rpg", "classic"] },
        { id: 5, title: "Stray", price: "29.99$", tags: ["indie", "adventure"] },
        { id: 6, title: "Subnautica", price: "19.99$", tags: ["survival", "adventure"] }
        
    ];

    
    function displayResults(results) {
        searchResultsDiv.innerHTML = ''; 

        if (results.length === 0) {
            searchResultsDiv.innerHTML = '<p class="search-placeholder">Нічого не знайдено. Спробуйте інший запит.</p>';
            searchPlaceholder.style.display = 'none';
            return;
        }

        searchPlaceholder.style.display = 'none'; 

        
        results.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('search-result-item');
            gameElement.innerHTML = `
                <h4>${game.title}</h4>
                <p>Ціна: ${game.price}</p>
                <p class="tags">Теги: ${game.tags.join(', ')}</p>
            `;
            searchResultsDiv.appendChild(gameElement);
        });

        
        searchResultsDiv.style.display = 'grid';
        searchResultsDiv.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        searchResultsDiv.style.gap = '15px';
        searchResultsDiv.style.padding = '15px';
    }

    
    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();

        if (query === '') {
            searchPlaceholder.style.display = 'block';
            searchResultsDiv.style.display = 'block';
            searchResultsDiv.innerHTML = '';
            return;
        }

        const filteredGames = allGames.filter(game =>
            game.title.toLowerCase().includes(query) ||
            game.tags.some(tag => tag.includes(query))
        );

        displayResults(filteredGames);
    }
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});