import $ from 'jquery';
import ui from 'jquery-ui';

let menuButtonOpen = false;


$(document).ready(() => {
  // $('.menu-item').mouseenter(function() {
  //   ui(this).find('.menu-name').show( "fold", 1000 )
  // })
  // $('.menu-item').mouseleave(function() {
  //   $(this).find('.menu-name').hide('slow');
  // })

  $('.menu-item').click(function() {
    $('.menu-item').removeClass('menu-active');
    $(this).addClass('menu-active');
    // $('.submenu').css({"background": `${$(this).attr('color')}`})
  })

  $('.menu').mouseenter(function() {
    $('.menu').animate({
      width: "220"
    }, 130)
  })
  
  $('.menu').mouseleave(function() {
    $('.menu').animate({
      width: "70"
    }, 130)
  })
})