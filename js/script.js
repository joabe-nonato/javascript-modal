const modalabrir = document.querySelector('#modalabrir');
const modalFechar = document.querySelector('#modalFechar');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

const ModalAlternarExibicao = () => {
    [fade, modal].forEach((elemento) => {
        elemento.classList.toggle("ocultar");
    });
};

[modalabrir, modalFechar].forEach((el) => {
    el.addEventListener('click', ModalAlternarExibicao);
});