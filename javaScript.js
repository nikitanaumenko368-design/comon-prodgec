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

const gameCatalogue = [
    { name: "Grand Theft Auto V", genre: "Action" },
    { name: "The Witcher 3: Wild Hunt", genre: "RPG" },
    { name: "Red Dead Redemption 2", genre: "Action" },
    { name: "Cyberpunk 2077", genre: "RPG" },
    { name: "Minecraft", genre: "Sandbox" },
    { name: "FIFA 25", genre: "Sport" },
    { name: "GTA San Andreas", genre: "Action" } 
];


function renderGames(gamesToShow) {
    const resultsContainer = document.getElementById('gameResults');
    
    resultsContainer.innerHTML = ''; 

    if (gamesToShow.length === 0) {
        
        resultsContainer.innerHTML = '<p class="no-results">На жаль, за вашим запитом нічого не знайдено.</p>';
        return;
    }

    gamesToShow.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-item');
        
        gameDiv.innerHTML = `
            <strong>${game.name}</strong> 
            <span class="genre">(${game.genre})</span>
        `;
        resultsContainer.appendChild(gameDiv);
    });
}


function filterGames() {
    const inputElement = document.getElementById('gameSearchInput');
    const filterText = inputElement.value.toUpperCase();
    
    
    const filteredList = gameCatalogue.filter(game => {
        
        return game.name.toUpperCase().includes(filterText);
    });
    
    
    renderGames(filteredList);
}


document.addEventListener('DOMContentLoaded', () => {
    renderGames(gameCatalogue); 
});
function filterGames() {
    // 1. Отримуємо значення з поля пошуку і переводимо у верхній регістр
    const inputElement = document.getElementById('gameSearchInput');
    const filter = inputElement.value.toUpperCase();
    
    // 2. Отримуємо контейнер з результатами та всі елементи-ігри
    const resultsContainer = document.getElementById('gameResults');
    const gameItems = resultsContainer.getElementsByClassName('game-item');

    let foundResults = false; // Прапорець для перевірки, чи щось знайдено

    // 3. Проходимо по всіх елементах списку і порівнюємо
    for (let i = 0; i < gameItems.length; i++) {
        const gameItem = gameItems[i];
        const gameName = gameItem.textContent || gameItem.innerText; // Отримуємо назву гри

        // Якщо назва гри містить текст з поля пошуку
        if (gameName.toUpperCase().indexOf(filter) > -1) {
            gameItem.style.display = ""; // Показуємо елемент
            foundResults = true;
        } else {
            gameItem.style.display = "none"; // Приховуємо елемент
        }
    }

    
 <p id="noResults" style="display:none;">Результатів не знайдено.</p> 
    const noResults = document.getElementById('noResults');
    if (noResults) {
        if (!foundResults && filter.length > 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
}