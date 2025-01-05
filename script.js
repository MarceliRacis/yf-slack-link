document.addEventListener('DOMContentLoaded', () => {
    // Tworzymy element przycisku
    const button = document.createElement('button');
    button.innerText = 'Slack';  // Tekst na przycisku
    button.className = 'test1'; // Przypisujemy klasę CSS

    // Wyszukujemy kontener, w którym już znajduje się element <p>
    const container = document.querySelector('.container');

    // Dodajemy przycisk do kontenera, tuż po elemencie <p>
    container.appendChild(button);

    // Obsługuje kliknięcie na przycisku
    button.addEventListener('click', () => {
        window.location.href = "https://youngfreelancers.slack.com";
    });
});
