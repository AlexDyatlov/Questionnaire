let ul = document.querySelector('.menu__list');
let li = document.querySelectorAll('.menu__link');

li.forEach(el => {
  el.addEventListener('click', function(){
    ul.querySelector('.menu__link--active').classList.
    remove('menu__link--active');

    el.classList.add('menu__link--active');

    if ($('.burger').hasClass('active')) {
      $('.burger').toggleClass('active');
      $('.menu__list').slideToggle();
    }
  });
});