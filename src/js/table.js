import $ from 'jquery'

let modalWindowOpenStatus = false
let viewstatus = true

//animated hover on open icon 

$('body').click(function(event){
  console.log(event.target)
})

$(document).ready(() => {

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

  //open deaprt modal window
  $('.depart-modal-button .open-icon').click(() => {
    if (!modalWindowOpenStatus) {   


      $('.depart-modal-window').animate({
        height: "95%",
        zIndex: "0"
      }, 700)

      $('.depart-modal-button').animate({
        top: "0",
        margin: "0"
      }, 550)

      $('.depart-modal-button').css({"flex-direction": "column-reverse"})
      $('.depart-modal-button .open-icon').css({"transform": "rotate(180deg)"})
    } else {

      $('.depart-modal-window').animate({
        height: "0%",
        zIndex: "-1"
      }, 700)

      
      $('.depart-modal-button').css({"top": '', "margin": ''})
      $('.depart-modal-button').animate({
        bottom: "0",
        margin: "auto"
      }, 500)

      $('.depart-modal-button').css({"flex-direction": "column"})
      $('.depart-modal-button .open-icon').css({"transform": "rotate(0deg)"})
    }
    modalWindowOpenStatus = !modalWindowOpenStatus
  })

  //viewstatus colored
  $('.view-status').click(function() {
    if(viewstatus) {
      $(this).find('.depart-view-true').hide();
      $(this).find('.depart-view-false').show();
    } else {
      $(this).find('.depart-view-true').show();
      $(this).find('.depart-view-false').hide();
    }
    viewstatus = !viewstatus
  })

  $('tbody .table-data-inp').keydown(function(){
    this.style.width = ((this.value.length + 1) * 8) + 'px';
  })

})

