const openBtn = document.querySelector('.open-btn');

const closeBtn = document.querySelector('.close-btn');

const modal = document.querySelector('.modal-box');

openBtn.addEventListener('click', () => {
    modal.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == "Escape") {
        modal.style.display = "none";
    }
})