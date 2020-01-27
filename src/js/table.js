import $ from 'jquery'
import 'jquery-ui'

let modalWindowOpenStatus = false
let viewstatus = true

//console.log clicked element
$('body').click(function(event){
  console.log(event.target)
})

function openDepartModal() {
  if (!modalWindowOpenStatus) {   


    $('.depart-modal-window').animate({
      height: "95%",
    }, 700)

    $('.depart-modal-button').animate({
      top: "0",
      margin: "0"
    }, 550)

    $('.table #t-tbl thead th').css({"display": "none"})

    $('.table #t-tbl tbody th').css({"display": "none"})

    $('.depart-modal-button').css({"flex-direction": "column-reverse"})

    $('.depart-modal-button .open-icon').css({"transform": "rotate(180deg)"})
  } else {

    $('.table #t-tbl thead th').css({"display": ""})
    $('.table #t-tbl tbody th').css({"display": ""})

    $('.depart-modal-window').animate({
      height: "0%",
      zIndex: "0"
    }, 700)

    
    $('.depart-modal-button').css({"top": '', "margin": ''})
    $('.depart-modal-button').animate({
      bottom: "0",
      margin: "auto",
    }, 500);

    $('.depart-modal-button').css({"flex-direction": "column"});
    $('.depart-modal-button .open-icon').css({"transform": "rotate(0deg)"});

  }
  modalWindowOpenStatus = !modalWindowOpenStatus;
}

$(document).ready(() => {

  //depart modal open button hover script
  $('.depart-modal-button').mouseenter(() => {
    $('.depart-modal-button').animate({
      height: "37px"
    }, 130)
    $('.depart-modal-button .animated-border').animate({
      height: "7px"
    }, 130)
  })


  $('.depart-modal-button').mouseleave(() => {
    $('.depart-modal-button').animate({
      height: "30"
    }, 130)
    $('.depart-modal-button .animated-border').animate({
      height: "0px"
    }, 130)
  })

  //open deaprt modal window open animatation
  $('.depart-modal-button .open-icon').click(() => {
    openDepartModal()
  })

  //viewstatus checked colored (mb change to eye styled checkbox)
  $('.view-status').click(function() {
    if(viewstatus) {
      $(this).find('.depart-view-true').hide();
      $(this).find('.depart-view-false').show();
    } else {
      $(this).find('.depart-view-true').show();
      $(this).find('.depart-view-false').hide();
    }
    viewstatus = !viewstatus;
  })

  //auto sized textarea
  $('tbody').on( 'change keyup keydown paste cut', 'textarea', function (){
    $(this).height(0).height(this.scrollHeight);
  }).find( 'textarea' ).change();

})

