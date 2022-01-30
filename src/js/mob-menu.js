(() => {
  const menuBtnRef = document.querySelector('.my-class1');
  const mobileMenuRef = document.querySelector('.my-class2');
  const menuContainerRef = document.querySelector('.header__mob-menu');
  console.log(menuBtnRef);
  mobileMenuRef.addEventListener('click', () => {
    menuContainerRef.classList.toggle('is-open');
  });
  menuBtnRef.addEventListener('click', () => {
    console.log(222);
    menuContainerRef.classList.toggle('is-open');
  });
})();