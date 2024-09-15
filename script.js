    // Globalne zmienne do przechowywania stanu
    let currentTab = 1; // 1 - TYPE, 2 - CONTENT, 3 - BUTTONS
    let currentType = 'G'; // Domyślny typ jako skrót
    let currentButtonsColor = 'W'; // Domyślny kolor przycisków jako skrót
    let currentBodyColor = 'B'; // Domyślny kolor obudowy jako skrót
    let currentCamera = 1; // 1: Front, 2: Side, 3: Top

    
    document.querySelector(`.task-cell1`).classList.add('active');

    document.querySelectorAll('.list-option').forEach(function(element) {
    element.style.display = 'none';});

    document.querySelectorAll('[class^="type-cell"]').forEach(function(element) {
    element.style.display = 'grid';});

    document.querySelector('.title1').style.display = 'grid';

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        login(username, password);
    });

    function login(username, password) {
        console.log('Username:', username);
        console.log('Password:', password);
        
        if (username === 'client' && password === '1234') {
            document.getElementById("account-emoji").style.display = 'none';
            document.getElementById("account-text").style.display = 'none';
            document.getElementById("loginForm").style.display = 'none';
            document.getElementById("account").style.backgroundColor = '#238605';
            document.getElementById("account-emoji-success").style.display = 'grid';
            document.getElementById("account-text-success").style.display = 'grid';
        } else {
            document.getElementById('error-message').textContent = 'Invalid username or password';
        }
    }

    function logout() {
        console.log('Username:', username);
        console.log('Password:', password);
        
        if (username === 'client' && password === '1234') {
            document.getElementById("account-emoji").style.display = 'none';
            document.getElementById("account-text").style.display = 'none';
            document.getElementById("account").style.backgroundColor = '#238605';
            document.getElementById("account-emoji-success").style.display = 'grid';
            document.getElementById("account-text-success").style.display = 'grid';
        } else {
            document.getElementById('error-message').textContent = 'Invalid username or password';
        }
    }


    function menu() {
        const element = document.querySelector('.banner-bottom');
            
        if (element.style.display === 'none') {
            element.style.display = 'grid';
        } else {
            element.style.display = 'none';
        }
    }

    function night() {
        if(document.querySelector('.logo-cell1').style.color === 'black') {
            document.getElementById("kontener").style.background = 'linear-gradient(55deg, rgba(0,23,41,1) 0%, rgba(0,65,119,1) 100%)';
            document.querySelector('.logo-cell1').style.color = 'white';
            document.getElementById('barclicked').src = 'bar-white.png';
            document.querySelector('.banner-bottom').style.color = 'white';
            document.getElementById('moonclicked').src = 'moon-white.png';
            document.getElementById('leftclicked').src = 'left-white.png';
            document.getElementById('rightclicked').src = 'right-white.png';
        } else {
            document.getElementById("kontener").style.background = 'rgb(255,255,255)';
            document.querySelector('.logo-cell1').style.color = 'black';
            document.getElementById('barclicked').src = 'bar.png';
            document.querySelector('.banner-bottom').style.color = 'black';
            document.getElementById('moonclicked').src = 'moon.png';
            document.getElementById('leftclicked').src = 'left.png';
            document.getElementById('rightclicked').src = 'right.png';
        }
    }


    function setPage(number) {
        document.querySelectorAll('.title-option').forEach(function(element) {
        element.style.display = 'none';});

        document.querySelector(`.title${number}`).style.display = 'grid';
        if(number == 1) {
            document.querySelector(`.contact`).style.display = 'none';
        }
        else if(number == 2) {
            document.querySelector(`.contact`).style.display = 'grid';
        } else {
            document.querySelector(`.contact`).style.display = 'none';
        }
    }

    function setTab(number) {
        currentTab = number;
        for (let i = 1; i <= 6; i++) {
            document.querySelector(`.task-cell${i}`).classList.remove('active');
        }
        document.querySelector(`.task-cell${number}`).classList.add('active');

// Ukrywaj lub pokazuj elementy na podstawie zakładki
document.querySelectorAll('.list-option').forEach(element => {
    element.style.display = 'none';
});

if (number == 5 || number == 6) {
    document.getElementById("list").style.display = 'none';
} else {
    document.getElementById("list").style.display = 'grid';
}

document.getElementById("account").style.display = (number == 5) ? 'grid' : 'none';
document.getElementById("order").style.display = (number == 6) ? 'grid' : 'none';

// Wyświetlaj odpowiednie elementy na podstawie zakładki
if (number == 1 || number == 2 || number == 3) {
    // Zawartość z zakładki TYPE powinna być widoczna również w CONTENT i BUTTONS
    document.querySelectorAll('[class^="type-cell"]').forEach(element => {
        element.style.display = 'grid';
    });
} else {
    document.querySelectorAll('[class^="type-cell"]').forEach(element => {
        element.style.display = 'none';
    });
}

if (number == 2) {
    document.querySelectorAll('[class^="content-cell"]').forEach(element => {
        element.style.display = 'grid';
    });
} else {
    document.querySelectorAll('[class^="content-cell"]').forEach(element => {
        element.style.display = 'none';
    });
}

if (number == 3) {
    document.querySelectorAll('[class^="buttons-cell"]').forEach(element => {
        element.style.display = 'grid';
    });
} else {
    document.querySelectorAll('[class^="buttons-cell"]').forEach(element => {
        element.style.display = 'none';
    });
}

if (number == 4) {
    document.querySelectorAll('[class^="cable-cell"]').forEach(element => {
        element.style.display = 'grid';
    });
} else {
    document.querySelectorAll('[class^="cable-cell"]').forEach(element => {
        element.style.display = 'none';
    });
}

if (number == 5) {
    document.querySelectorAll('[class^="account-cell"]').forEach(element => {
        element.style.display = 'grid';
    });
} else {
    document.querySelectorAll('[class^="account-cell"]').forEach(element => {
        element.style.display = 'none';
    });
}

if (number == 6) {
    document.querySelectorAll('[class^="order-cell"]').forEach(element => {
        element.style.display = 'grid';
    });
} else {
    document.querySelectorAll('[class^="order-cell"]').forEach(element => {
        element.style.display = 'none';
    });
}

// Zaktualizuj opcje kolorów
updateColorOptions();
    }

    // Funkcja do zmiany koloru
function setColor(color) {
    if (currentTab === 2) {
        // Zmiana koloru obudowy (CONTENT)
        currentBodyColor = color;
    } else if (currentTab === 3) {
        // Zmiana koloru przycisków (BUTTONS)
        currentButtonsColor = color;
    }
    updateImage();
}

// Funkcja do obracania obrazu
function rotateImage(direction) {
    if (direction === 'right') {
        currentCamera = currentCamera === 3 ? 1 : currentCamera + 1;
    } else if (direction === 'left') {
        currentCamera = currentCamera === 1 ? 3 : currentCamera - 1;
    }
    updateImage();
}

// Funkcja do aktualizacji obrazu
function updateImage() {
    // Generowanie pełnej nazwy pliku
    const fileName = `${currentType}${currentButtonsColor}${currentBodyColor}${currentCamera}.png`;
    document.getElementById('product-image').src = fileName;
    console.log(`Updated image to: ${fileName}`);
}

// Funkcja do aktualizacji opcji kolorów
function updateColorOptions() {
    const colorbar = document.getElementById('colorbar');
    const colorOptions = colorbar.getElementsByClassName('colorbox');

    for (let i = 0; i < colorOptions.length; i++) {
        const colorBox = colorOptions[i];
        const color = colorBox.getAttribute('onclick').match(/'(\w)'/)[1];
        
        if (currentTab === 3) {
            // Tylko kolory przycisków (BUTTONS) - Black i White
            document.getElementById('colors').style.display = 'grid';
            document.getElementById('color-head').style.display = 'grid';
            document.getElementById('colorbar').style.display = 'grid';
            colorBox.style.display = (color === 'B' || color === 'W') ? 'block' : 'none';
        } else if (currentTab === 2) {
            // Tylko kolory obudowy (CONTENT) - Wszystkie
            document.getElementById('colors').style.display = 'grid';
            document.getElementById('color-head').style.display = 'grid';
            document.getElementById('colorbar').style.display = 'grid';
            colorBox.style.display = 'block';
        } else if (currentTab === 1 || currentTab === 4) {
            // Tylko kolory obudowy (TYPE) - Wszystkie
            document.getElementById('colors').style.display = 'grid';
            document.getElementById('color-head').style.display = 'none';
            document.getElementById('colorbar').style.display = 'none';
            colorBox.style.display = 'block';
        } else {
            // Ukryj wszystkie kolory jeśli inna zakładka
            colorBox.style.display = 'none';
            document.getElementById('colors').style.display = 'none';
        }
    }
}

// Funkcja do aktualizacji wartości na podstawie wybranego modelu
function updateValuesFromModel(model) {
    // Wyciągnięcie wartości z nazwy pliku
    const type = model.charAt(0);
    const buttonsColor = model.charAt(1);
    const bodyColor = model.charAt(2);

    // Aktualizacja globalnych zmiennych
    currentType = type;
    currentButtonsColor = buttonsColor;
    currentBodyColor = bodyColor;

    // Zaktualizowanie obrazu
    updateImage();
}

// Obsługuje kliknięcia w listę opcji
document.querySelectorAll('.list-option').forEach(item => {
    item.addEventListener('click', function() {
        const model = this.getAttribute('data-model');
        document.getElementById('product-image').src = model;
        updateValuesFromModel(model); // Zaktualizuj wartości na podstawie wybranego modelu
        console.log(`Selected model: ${model}`);
    });
});