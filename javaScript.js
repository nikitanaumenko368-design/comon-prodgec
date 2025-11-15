function randomColors(count) {
    const hex = '0123456789abcdef';
    const colors = [];
    for (let i = 0; i < count; i++) {
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        colors.push(color);
    }
    return colors;
}

const app = {
    tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        },

        setColors(newColors) {
            this.colors = newColors;
            console.log('Tubes colors set to:', this.colors);
        },
        setLightsColors(newColors) {
            this.lights.colors = newColors;
            console.log('Lights colors set to:', this.lights.colors);
        }
    }
};

document.body.addEventListener('click', () => {
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
});

const gameModal = document.getElementById('gameModal');
const closeBtn = document.querySelector('.close-btn');
const catalogItems = document.querySelectorAll('.catalog-item');
const gameData = {
    "gta6": {
        title: "Grand Theft Auto VI",
        genre: "Екшн-пригоди, Відкритий світ",
        developer: "Rockstar Games",
        release: "2025",
        description: "Очікувана шоста частина культової серії GTA, що повертає гравців у Леоніду (прототип Флориди) з новою історією та двома головними героями.",
        price: "79.99$",
        cover: "https://upload.wikimedia.org/wikipedia/ru/f/f0/GTA_VI_Poster.jpg"
    },
    "gtav": {
        title: "Grand Theft Auto V",
        genre: "Екшн-пригоди, Відкритий світ",
        developer: "Rockstar North",
        release: "2013",
        description: "Легендарна гра з трьома героями, що борються за виживання та багатство в Лос-Сантосі. Має великий онлайн-режим.",
        price: "29.99$",
        cover: "https://upload.wikimedia.org/wikipedia/ru/c/c8/GTAV_Official_Cover_Art.jpg"
    },
    "rdr2": {
        title: "Red Dead Redemption 2",
        genre: "Екшн-пригоди, Відкритий світ (Вестерн)",
        developer: "Rockstar Games",
        release: "2018",
        description: "Епічна історія про життя Артура Моргана та банди Ван дер Лінде наприкінці епохи Дикого Заходу. Визнана однією з найкращих ігор в історії.",
        price: "39.99$",
        cover: "https://cdn.displate.com/artwork/857x1200/2023-06-12/6e217abc7f5bb5d0dc56e68752193a11_5c51574f5f2f216f9ef25a0d08fa6400.jpg"
    },
    "cyberpunk": {
        title: "Cyberpunk 2077",
        genre: "Action RPG, Кіберпанк",
        developer: "CD Projekt Red",
        release: "2020",
        description: "Історія про найманця V в Найт-Сіті, місті, де влада, розкіш і модифікації тіла цінуються понад усе. Величезний відкритий світ та глибока кастомізація.",
        price: "49.99$",
        cover: "https://m.media-amazon.com/images/M/MV5BNTQ4MjEyZjQtOTM1MC00N2FmLWJhYzUtYWVjZGU3ZjNlZGI3XkEyXkFqcGc@._V1_.jpg"
    },
    "eldenring": {
        title: "Elden Ring",
        genre: "Action RPG, Soulslike",
        developer: "FromSoftware",
        release: "2022",
        description: "Фентезійна RPG від творців Dark Souls у співпраці з Джорджем Р.Р. Мартіном. Досліджуйте величне Междузем'я у пошуках Кільця Елден.",
        price: "59.99$",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbUJT3Iynt_A7LfxS30JyWpeD8uD3dG4YhQ&s"
    },
    "halo": {
        title: "Halo Infinite",
        genre: "Шутер від першої особи (FPS)",
        developer: "343 Industries",
        release: "2021",
        description: "Майстер Чіф повертається в новій місії, щоб врятувати людство. Грандіозний відкритий світ та динамічний мультиплеєр.",
        price: "59.99$",
        cover: "https://cdn.displate.com/artwork/270x380/2024-12-28/7e1833c1-224c-4792-a52e-850eadea108e.jpg"
    },
    "gow": {
        title: "God of War (2018)",
        genre: "Екшн-пригоди",
        developer: "Santa Monica Studio",
        release: "2018",
        description: "Кратос, що переїхав у скандинавські землі, разом із сином Атреєм вирушає в епічну подорож. Нова глава у сазі про бога війни.",
        price: "34.99$",
        cover: "https://images-cdn.ubuy.com.sa/6340060e7369363c3b397998-god-of-war-gaming-poster-size.jpg"
    },
    "witcher3": {
        title: "The Witcher 3: Wild Hunt",
        genre: "Action RPG",
        developer: "CD Projekt Red",
        release: "2015",
        description: "Геральт з Рівії вирушає на пошуки своєї прийомної доньки Цирі. Один з наймасштабніших відкритих світів та найкращих сюжетів у RPG.",
        price: "19.99$",
        cover: "https://m.media-amazon.com/images/M/MV5BYTBkOGFhZDAtZTE5Yy00OTQ2LTkwNmUtNmUzOTYwMzExMWE4XkEyXkFqcGc@._V1_.jpg"
    },
    "forza3": {
        title: "Forza Horizon 3",
        genre: "Гоночний симулятор, Відкритий світ",
        developer: "Playground Games",
        release: "2016",
        description: "Автомобільний фестиваль Horizon переїжджає до Австралії. Нескінченні гонки, бездоріжжя та величезний вибір автомобілів.",
        price: "15.99$",
        cover: "https://upload.wikimedia.org/wikipedia/uk/5/54/Forza_horizon_3_cover_art.jpg"
    },
    "minecraft": {
        title: "Minecraft",
        genre: "Пісочниця, Виживання",
        developer: "Mojang Studios",
        release: "2011",
        description: "Культова гра, де ви можете будувати, досліджувати та виживати у світі, створеному з блоків. Нескінченна свобода творчості.",
        price: "26.95$",
        cover: "https://m.media-amazon.com/images/M/MV5BMTUzOTI5NTk4NV5BMl5BanBnXkFtZTgwODAyMzM0NjM@._V1_.jpg"
    },
    "dyinglight": {
        title: "Dying Light",
        genre: "Survival horror, Екшн",
        developer: "Techland",
        release: "2015",
        description: "Паркур-екшн в зомбі-апокаліпсисі. Вдень досліджуйте та збирайте ресурси, а вночі тікайте від хижаків.",
        price: "19.99$",
        cover: "https://upload.wikimedia.org/wikipedia/uk/e/e7/%D0%9E%D0%B1%D0%BA%D0%BB%D0%B0%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0_%D0%B2%D1%96%D0%B4%D0%B5%D0%BE%D0%B3%D1%80%D0%B8_Dying_Light.jpg"
    },
    "horizonzd": {
        title: "Horizon Zero Dawn",
        genre: "Action RPG, Відкритий світ",
        developer: "Guerrilla Games",
        release: "2017",
        description: "Фантастичний постапокаліптичний світ, де люди живуть у племенах, а Землею бродять роботи-динозаври. Історія дівчини Елой.",
        price: "24.99$",
        cover: "https://external-preview.redd.it/AglXOTJktFB-nKw6rnh1MsZ16y53M7PBoLR3ZKTWxh4.jpg?auto=webp&s=34fcc0835f3e09346c256bbece5c71dc1c5a04dc"
    }
};

function showGameDetails(gameId) {
    const data = gameData[gameId];
    if (!data) return;
    document.getElementById('modalGameCover').src = data.cover;
    document.getElementById('modalGameTitle').textContent = data.title;
    document.getElementById('modalGameGenre').textContent = data.genre;
    document.getElementById('modalGameDeveloper').textContent = data.developer;
    document.getElementById('modalGameRelease').textContent = data.release;
    document.getElementById('modalGameDescription').textContent = data.description;
    document.getElementById('modalGamePrice').textContent = data.price;

    gameModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
catalogItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const gameId = item.getAttribute('data-game-id');
        showGameDetails(gameId);
    });
});

closeBtn.onclick = function() {
    gameModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == gameModal) {
        gameModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

