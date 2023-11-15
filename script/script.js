$(function () {
  $('#callback-button').click(function () {
    $('.modal').addClass('modal_active');
    $('body').addClass('hidden');
  });
 
  $('.modal_close-button').click(function () {
    $('.modal').removeClass('modal_active');
    $('body').removeClass('hidden');
  });
 
  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});