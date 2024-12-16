document.addEventListener('DOMContentLoaded', () => {
    const library = document.getElementById('library');
    const colors = ['#ff6347', '#4682b4', '#32cd32', '#ffa500', '#6a5acd'];

    // Crear y agregar la primera estantería
    const firstShelf = document.createElement('div');
    firstShelf.classList.add('shelf');
    addBooksToShelf(firstShelf, colors);
    library.insertBefore(firstShelf, library.firstChild);

    // Crear y agregar la segunda estantería
    const secondShelf = document.createElement('div');
    secondShelf.classList.add('shelf');
    addBooksToShelf(secondShelf, colors);
    library.appendChild(secondShelf);

    // Inicializar el reloj
    setInterval(updateClock, 1000);
    updateClock();
});

function addBooksToShelf(shelf, colors) {
    for (let j = 0; j < 5; j++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let k = 0; k < 10; k++) {
            const book = document.createElement('div');
            book.classList.add('book');
            book.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            book.style.height = `${Math.floor(Math.random() * 80) + 20}%`;
            row.appendChild(book);
        }

        shelf.appendChild(row);
    }
}

function updateClock() {
    const now = new Date();
    const secondHand = document.getElementById('second');
    const minuteHand = document.getElementById('minute');
    const hourHand = document.getElementById('hour');

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}