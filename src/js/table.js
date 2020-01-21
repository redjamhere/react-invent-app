import $ from 'jquery'

let modalWindowOpenStatus = false

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
})

