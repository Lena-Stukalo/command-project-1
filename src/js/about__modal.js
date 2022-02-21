(() => {
    const refs = {
        openModalBtn: document.querySelector('.about__button'),
        closeModalBtn: document.querySelector('.about__close-btn'),
        modal: document.querySelector('.backdrop-about'),
    };

    refs.openModalBtn.addEventListener('click', () => {
        refs.modal.classList.remove('is-hidden');
    });

    refs.closeModalBtn.addEventListener('click', () => {
        refs.modal.classList.add('is-hidden');
    });
})();
