jQuery(document).ready(function ($) {
  //phone mask
  $('.input-tel').mask('+7 (999) 999-99-99');
  $('.input-code').mask('9999');

  //mobile menu
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  $('.header-popup__close').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  $('.input-file input[type=file]').on('change', function () {
    let file = this.files[0];
    $(this).parent().find('.input-file__result').addClass('active');
    $(this).parent().find('.input-file__name').html(file.name);
    $(this).parent().find('.input-file__load-img').addClass('hide');
  });
  // function removeFilesItem(target) {
  //   let name = $(target).prev().text();
  //   let input = $(target).closest('.input-file-row').find('input[type=file]');
  //   $(target).closest('.input-file-list-item').remove();
  //   for (let i = 0; i < dt.items.length; i++) {
  //     if (name === dt.items[i].getAsFile().name) {
  //       dt.items.remove(i);
  //     }
  //   }
  //   input[0].files = dt.files;
  // }
});
