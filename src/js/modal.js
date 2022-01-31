(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.forEach(function (item) {
    item.addEventListener('click', toggleModal);
  });

  refs.modal.toggleModal()(function (item) {
    item.classList.toggle('is-hidden');
  });
    
})();
