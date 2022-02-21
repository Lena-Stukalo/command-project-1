(() => {
    const refs = {
        openModalBtn: document.querySelectorAll('.page-header__open-modal-btn'),
        closeModalBtn: document.querySelector('.modal__close-btn'),
        modal: document.querySelector('.backdrop-modal'),
    };

    refs.openModalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            refs.modal.classList.remove('is-hidden');
        });
    });

    refs.closeModalBtn.addEventListener('click', () => {
        refs.modal.classList.add('is-hidden');
    });
})();
