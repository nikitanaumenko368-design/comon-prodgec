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
          title: "Counter-Strike 2",
        genre: "Багатокористувацький тактичний шутер від першої особи (FPS)",
        developer: "Valve Corporation",
        release: "2023 (як безкоштовне оновлення до Counter-Strike: Global Offensive)",
        description: "Нова ера легендарного кіберспортивного шутера, побудована на рушії Source 2. Гра зберігає класичний ігровий процес CS:GO, але пропонує оновлену графіку, перероблену фізику, чутливіший ігровий процес та інноваційні димові гранати.Легендарна гра з трьома героями, що борються за виживання та багатство в Лос-Сантосі. Має великий онлайн-режим.",
        price: "Безкоштовна",
        cover: "https://cdn.displate.com/artwork/857x1200/2023-06-12/6e217abc7f5bb5d0dc56e68752193a11_5c51574f5f2f216f9ef25a0d08fa6400.jpg"
    },
    "cyberpunk": {
        title: "Cyberpunk 2077",
        genre: "Action RPG, Кіберпанк",
        developer: "CD Projekt Red",
        release: "2020",
        description: "Історія про найманця V в Найт-Сіті, місті, де влада, розкіш і модифікації тіла цінуються понад усе. Величезний відкритий світ та глибока кастомізація.",
        price: "49.99$",
        cover: "https://www.productsleutels.nl/wp-content/uploads/2021/01/Cyberpunk-2077-PC-COVER.jpg"
    },
    "eldenring": {
        title: "Elden Ring",
        genre: "Action RPG, Soulslike",
        developer: "FromSoftware",
        release: "2022",
        description: "Фентезійна RPG від творців Dark Souls у співпраці з Джорджем Р.Р. Мартіном. Досліджуйте величне Междузем'я у пошуках Кільця Елден.",
        price: "59.99$",
        cover: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7c/Elden_Ring_-_cover.jpg/330px-Elden_Ring_-_cover.jpg"
    },
    "halo": {
        title: "The Long Dark",
        genre: "Симулятор виживання, Пригодницька гра",
        developer: "Hinterland Studio Inc.",
        release: "2017",
        description: "Суворий симулятор виживання в умовах холодної дикої природи Канади після геомагнітної катастрофи. Гравцеві необхідно керувати температурою тіла, голодом, спрагою та втомою, досліджуючи величезний світ у режимі виживання (Sandbox) або проходячи сюжетну лінію (Wintermute).",
        price: "34.99$",
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
        cover: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f"
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
        cover: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9c/Minecraft_capa.png/260px-Minecraft_capa.png"
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
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202409/2716/2cdf80a4335a032aac4302fd1a941cac3a0e237d6a1d1fe0.jpg"
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

