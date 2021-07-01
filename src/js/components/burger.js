$('.burger').on('click', function(){
  $(this).toggleClass('active');
  $('.menu__list').slideToggle();
});