function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Об'єкт для зберігання тексту на різних мовах
const translations = {
    en: {
        compareButton: "Compare Cars",
        sectionTitle: "Electric Car Comparison",
        selectCars: "Select Cars to Compare",
        compareSelected: "Compare Selected Cars",
        mark: "Make",
        history: "History",
        all: "All",
    },
    uk: {
        compareButton: "Порівняти автомобілі",
        sectionTitle: "Порівняння електромобілів",
        selectCars: "Виберіть автомобілі для порівняння",
        compareSelected: "Порівняти вибрані автомобілі",
        mark: "Марка",
        history: "Історія",
        all: "Усі",
    }
};

// Функція для зміни мови
function changeLanguage(language) {
    if (!translations[language]) return; // Перевірка, чи є переклад для обраної мови

    // Оновлення тексту на сторінці
    document.querySelector('.compare-panel button').textContent = translations[language].compareButton;
    document.querySelector('#comparison h2').textContent = translations[language].sectionTitle;
    document.querySelector('#comparison-catalog h2').textContent = translations[language].selectCars;
    document.querySelector('#catalog-form button').textContent = translations[language].compareSelected;

    // Оновлення тексту для кнопок у панелі
    document.querySelectorAll('.button-container button')[0].textContent = translations[language].all;
    document.querySelectorAll('.button-container button')[1].textContent = translations[language].mark;
    document.querySelectorAll('.button-container button')[2].textContent = translations[language].history;
}

// Функція для показу каталогу порівняння
function showComparisonCatalog() {
    document.getElementById('comparison').style.display = 'none';
    document.getElementById('comparison-catalog').style.display = 'block';
}

// Функція для порівняння вибраних автомобілів
function compareSelectedCars() {
    const selectedCars = Array.from(document.querySelectorAll('#catalog-form input[type="checkbox"]:checked'));
    const comparisonBody = document.getElementById('comparison-body');
    comparisonBody.innerHTML = ''; // Очищення існуючих даних порівняння

    selectedCars.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${car.value}</td>
            <td>${car.id.replace(/-/g, ' ')}</td>
            <td>${car.dataset.range}</td>
            <td>${car.dataset.power}</td>
            <td>${car.dataset.price}</td>
        `;
        comparisonBody.appendChild(row);
    });

    // Показати секцію порівняння і приховати каталог
    document.getElementById('comparison').style.display = 'block';
    document.getElementById('comparison-catalog').style.display = 'none';
}
