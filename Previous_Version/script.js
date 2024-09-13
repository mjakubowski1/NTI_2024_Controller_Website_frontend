document.querySelector(`.top-cell1`).style.backgroundColor = '#0a8cf7';

        document.querySelectorAll('.list-option').forEach(function(element) {
        element.style.display = 'none';});

        document.querySelectorAll('[class^="type-cell"]').forEach(function(element) {
        element.style.display = 'grid';});

        
        function menu() {
            const element = document.querySelector('.banner-bottom');
            
            if (element.style.display === 'none') {
                element.style.display = 'grid';
            } else {
                element.style.display = 'none';
            }
        }

        function setTab(number) {
            for (let i = 1; i <= 6; i++) {
                document.querySelector(`.top-cell${i}`).style.backgroundColor = 'black';
            }

            document.querySelector(`.top-cell${number}`).style.backgroundColor = '#0a8cf7';

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