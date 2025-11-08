const gameCatalogue = [
    { title: "Indiana Jones and the great circle", price: "58,69$", tags: ["action", "adventure", "new"] },
    { title: "Nine Souls", price: "14,67$", tags: ["indie", "platformer"] },
    { title: "The Elder Scrolls IV Oblivion Remastered", price: "43,12$", tags: ["rpg", "fantasy", "classic"] },
    { title: "Assassin’s Creed Shadows", price: "47,91$", tags: ["action", "stealth", "new"] },
    { title: "Subnautica", price: "19,16$", tags: ["survival", "adventure", "indie"] },
    { title: "S.T.A.L.K.E.R. 2", price: "33,54$", tags: ["shooter", "survival", "horror"] },
    { title: "Cyberpunk 2077", price: "33,54$", tags: ["rpg", "openworld", "scifi"] },
    { title: "Stray", price: "14,37$", tags: ["indie", "adventure"] },
    
    { title: "GTA VI", price: "79,99$", tags: ["action", "openworld"] },
    { title: "GTA V", price: "29,99$", tags: ["action", "openworld"] },
    { title: "Red Dead Redemption 2", price: "49,99$", tags: ["action", "openworld", "western"] },
    { title: "Elden Ring", price: "59,99$", tags: ["rpg", "soulslike", "fantasy"] },
    { title: "Halo", price: "39.99$", tags: ["fps", "scifi"] },
    { title: "God of War", price: "49.99$", tags: ["action", "adventure"] },
    { title: "The Witcher 3", price: "19.99$", tags: ["rpg", "fantasy"] },
    { title: "Forza Horizon 3", price: "19.99$", tags: ["racing", "simulation"] },
    { title: "Minecraft", price: "26.95$", tags: ["sandbox", "survival"] },
    { title: "Dying Light", price: "14.99$", tags: ["action", "horror", "survival"] },
    { title: "Horizon Zero Dawn", price: "29.99$", tags: ["action", "rpg", "openworld"] }
];

const resultsContainer = document.getElementById('gameResultsContainer');
const initialPlaceholder = document.getElementById('initialPlaceholder');

/**
 * @param {Array<Object>} results
 */
function renderResults(results) {
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        const noResults = document.createElement('p');
        noResults.classList.add('placeholder-text');
        noResults.style.fontSize = '32px';
        noResults.textContent = 'НІЧОГО НЕ ЗНАЙДЕНО';
        resultsContainer.appendChild(noResults);
        resultsContainer.style.justifyContent = 'center';
    } else {
        results.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('search-result-item');
            gameElement.innerHTML = `
                <h4>${game.title.toUpperCase()}</h4>
                <p>Ціна: <span class="red-text">${game.price}</span></p>
                <p class="tags">Теги: ${game.tags.join(', ')}</p>
            `;
            resultsContainer.appendChild(gameElement);
        });
        resultsContainer.style.justifyContent = 'flex-start';
    }
}

function filterGames() {
    const inputElement = document.getElementById('gameSearchInput');
    const filterText = inputElement.value.trim().toUpperCase();

    if (filterText === '') {
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(initialPlaceholder);
        initialPlaceholder.style.display = 'block';
        resultsContainer.style.justifyContent = 'center';
        return;
    }
    
    if (initialPlaceholder) {
        initialPlaceholder.style.display = 'none';
    }

    const filteredList = gameCatalogue.filter(game => {
        return game.title.toUpperCase().includes(filterText) ||
               game.tags.some(tag => tag.toUpperCase().includes(filterText));
    });

    renderResults(filteredList);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('gameSearchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', filterGames);
    }
});