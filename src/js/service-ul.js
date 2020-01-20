import $ from 'jquery';
import ui from 'jquery-ui';




$(document).ready(() => {
  // $('.menu-item').mouseenter(function() {
  //   ui(this).find('.menu-name').show( "fold", 1000 )
  // })
  // $('.menu-item').mouseleave(function() {
  //   $(this).find('.menu-name').hide('slow');
  // })

  $('.service-item').click(function() {
    $('.service-item').removeClass('active-service');
    $('.service-item').find('span').css({'color': '#34495e'});
    $(this).addClass('active-service');
    $(this).find('span').css({'color': '#1abc9c'});
    // $('.submenu').css({"background": `${$(this).attr('color')}`})
  })
})