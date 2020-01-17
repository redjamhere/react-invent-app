import $ from 'jquery'

let dropDownContentShow = false

$(document).ready(() => {
  $('.dropbtn').click(() => {
    if(dropDownContentShow === false) 
      $('.dropdown-content').show('fast');
    else
      $('.dropdown-content').hide('fast');
    dropDownContentShow = !dropDownContentShow;
    })
})