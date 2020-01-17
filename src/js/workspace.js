import $ from 'jquery';
import ui from 'jquery-ui'

let menuButtonOpen = false

$('.menu-name').hide();

$(document).ready(() => {
  $('.menu-item').mouseenter(function() {
    ui(this).find('.menu-name').show( "fold", 1000 )
  })
  $('.menu-item').mouseleave(function() {
    $(this).find('.menu-name').hide('slow');
  })
})