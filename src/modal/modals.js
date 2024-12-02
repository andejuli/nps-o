let modal_button = document.querySelector('#open-modal');
let modal_close = document.querySelector('.close-button');
let modal = document.querySelector('#modal')
modal_button.addEventListener('click', openModal);
modal_close.addEventListener('click', closeModal);
window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
});
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
});

function openModal() {
    modal.style.display = 'block';
    modal.setAttribute = 'aria-hidden', false;
}
function closeModal () {
    document.querySelector('#modal').style.display = 'none';
    modal.setAttribute = 'aria-hidden', true;
}
