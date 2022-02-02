(() => {
  const menuBtnRef = document.querySelector('.my-class1');
  const mobileMenuRef = document.querySelectorAll('.my-class2');
  const menuContainerRef = document.querySelector('.header__mob-menu');
  console.log(menuBtnRef);
  mobileMenuRef.forEach(function (item) {
    item.addEventListener('click', () => {
    menuContainerRef.classList.toggle('mob-is-open');
    });
  });
  menuBtnRef.addEventListener('click', () => {
    console.log(222);
    menuContainerRef.classList.toggle('mob-is-open');
    });
})();