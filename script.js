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
    }

    function setTab(number) {
        for (let i = 1; i <= 6; i++) {
            document.querySelector(`.task-cell${i}`).classList.remove('active');
        }
        document.querySelector(`.task-cell${number}`).classList.add('active');



        document.querySelectorAll('.list-option').forEach(function(element) {
        element.style.display = 'none';
        });

        if (number == 5 || number == 6) {
            document.getElementById("list").style.display = 'none';
        } else {
            document.getElementById("list").style.display = 'grid';
        }

        if (number == 5) {
            document.getElementById("account").style.display = 'grid';
        } else {
            document.getElementById("account").style.display = 'none';
        }

        if (number == 6) {
            document.getElementById("order").style.display = 'grid';
        } else {
            document.getElementById("order").style.display = 'none';
        }
   
        if (number == 1) {
            document.querySelectorAll('[class^="type-cell"]').forEach(function(element) {
            element.style.display = 'grid';});
        } else if (number == 2) {
            document.querySelectorAll('[class^="content-cell"]').forEach(function(element) {
            element.style.display = 'grid';});
        } else if (number == 3) {
            document.querySelectorAll('[class^="buttons-cell"]').forEach(function(element) {
            element.style.display = 'grid';});
        } else if (number == 4) {
            document.querySelectorAll('[class^="cable-cell"]').forEach(function(element) {
            element.style.display = 'grid';});
        } else if (number == 5) {
            document.querySelectorAll('[class^="account-cell"]').forEach(function(element) {
            element.style.display = 'grid';});
        } else if (number == 6) {
            document.querySelectorAll('[class^="order-cell"]').forEach(function(element) {
            element.style.display = 'grid';});
        }
    }