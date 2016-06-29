$('.option1').click(function() {
  $('.form1').show();
  $('.form2').hide();
  $('.form3').hide();
});
$('.option2').click(function() {
  $('.form2').show();
  $('.form1').hide();
  $('.form3').hide();
});
$('.option2').click(function() {
  $('.form3').show();
  $('.form2').hide();
  $('.form1').hide();
});