document.addEventListener('DOMContentLoaded', () => {
    const library = document.getElementById('library');
    const colors = ['#ff6347', '#4682b4', '#32cd32', '#ffa500', '#6a5acd'];

    fetch('/educacion/aspectos')
        .then(response => response.json())
        .then(aspectos => {
            const cursos = aspectos[0].descripcion.split(', ');
            const centros = aspectos[1].descripcion.split(', ');
            const carreras = aspectos[2].descripcion.split(', ');

            const randomCursos = cursos.sort(() => 0.5 - Math.random()).slice(0, 5);
            const randomCentros = centros.sort(() => 0.5 - Math.random()).slice(0, 5);
            const randomCarreras = carreras.sort(() => 0.5 - Math.random()).slice(0, 8); // Select 8 items

            // Crear y agregar la primera estantería
            const firstShelf = document.createElement('div');
            firstShelf.classList.add('shelf');
            addBooksToShelf(firstShelf, colors);
            addCardToShelf(firstShelf, 'Cursos Informáticos:', randomCursos.join(', '));
            library.insertBefore(firstShelf, library.firstChild);

            // Crear y agregar la segunda estantería
            const secondShelf = document.createElement('div');
            secondShelf.classList.add('shelf');
            addBooksToShelf(secondShelf, colors);
            addCardToShelf(secondShelf, 'Centros de Aprendizaje:', randomCentros.join(', '));
            library.appendChild(secondShelf);

            // Crear y agregar la tarjeta a la pizarra
            const board = document.querySelector('.board');
            addCardToBoard(board, 'Carreras y Grados:', randomCarreras.join(', '));

            // Inicializar el reloj
            setInterval(updateClock, 1000);
            updateClock();
        })
        .catch(error => console.error('Error fetching aspectos:', error));
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

function addCardToShelf(shelf, title, content) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p style="font-weight: bold;">${title}</p>
        <ul>
            ${content.split(', ').map(item => `<li>${item}</li>`).join('')}
        </ul>`;
    shelf.appendChild(card);
}

function addCardToBoard(board, title, content) {
    const card = document.createElement('div');
    card.classList.add('board-card');
    card.innerHTML = `
        <p style="font-weight: bold;">${title}</p>
        <ul>
            ${content.split(', ').map(item => `<li>${item}</li>`).join('')}
        </ul>`;
    board.appendChild(card);
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