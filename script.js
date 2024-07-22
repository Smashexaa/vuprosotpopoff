document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const reallyNoButton = document.getElementById('really-no-button');
    const container = document.querySelector('.container');

    noButton.addEventListener('mouseover', function() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener('click', function() {
        sendToDiscord("Харесвам те! Ти мен?", "Да");
        container.innerHTML = '<h1>yayy, сега искаш ли да сме заедно?</h1><div class="buttons"><button id="yes-button-2">Да</button><button id="no-button-2">Не</button></div>';
        
        const noButton2 = document.getElementById('no-button-2');
        const yesButton2 = document.getElementById('yes-button-2');
        
        noButton2.addEventListener('mouseover', function() {
            const containerRect = container.getBoundingClientRect();
            const buttonRect = noButton2.getBoundingClientRect();
            const maxX = containerRect.width - buttonRect.width;
            const maxY = containerRect.height - buttonRect.height;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            noButton2.style.position = 'absolute';
            noButton2.style.left = `${randomX}px`;
            noButton2.style.top = `${randomY}px`;
        });

        yesButton2.addEventListener('click', function() {
            sendToDiscord("yayy, сега искаш ли да сме заедно?", "Да");
            container.innerHTML = '<h1>yayy, чудесно!</h1>';
        });
    });

    reallyNoButton.addEventListener('click', function() {
        sendToDiscord("КАТЕГОРИЧНО", "Еми отрязан си");
        container.innerHTML = '<h1>Сега ще плачкам, но мерси за разбирането :(</h1>';
    });
});

function sendToDiscord(question, answer) {
    const webhookURL = "https://discord.com/api/webhooks/1264951566398394482/e2SO-lylThK0Vsn5ANNxJ3aUMrw7yQUt50uSE6lpGsS09x-fCJlw9jXuf2YsIWs_iapc";
    const message = {
        content: `${question}\nОтговор: ${answer}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}