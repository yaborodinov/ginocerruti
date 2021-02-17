"use strict"



let scrollToTop = document.querySelector(".to_top");
let header = document.querySelector(".header")

let intoVideoBnt = document.querySelector(".product__view_video");
let videoContent = document.querySelector(".video")

function scrollDown(el) {
    el.scrollIntoView({ block: "start", behavior: "smooth" })
}




scrollToTop.addEventListener("click", () => {
    scrollDown(header);
})

intoVideoBnt.addEventListener("click", () => {
    scrollDown(videoContent);
})


// change color

let greenBtn = document.querySelector(".green");
let burgundyBtn = document.querySelector(".burgundy");
let midnight_blueBtn = document.querySelector(".midnight_blue");

let background = document.querySelector(".main_photo");


greenBtn.addEventListener("click", () => {
    background.classList.add("green")
    background.classList.remove("burgundy","midnight_blue");
})


burgundyBtn.addEventListener("click", () => {
    background.classList.add("burgundy");
    background.classList.remove("green","midnight_blue");
})

midnight_blueBtn.addEventListener("click", () => {
    background.classList.add("midnight_blue")
    ackground.classList.remove("green","burgundy");

})


// modal size_chart

let modal = document.querySelector(".modal_wrapper");
let btnOpen = document.querySelector(".product__size_chart_wrapper");
let modalInner = document.querySelector(".modal__size_chart")


btnOpen.addEventListener("click", (e) => {
    
    let y = e.clientY;
    let x = e.clientX;
    console.log(y)

    modalInner.style.marginLeft = (x-593)+"px";
    modalInner.style.marginTop = y+ "px";
    modal.style.backgroundColor = "rgba(80, 77, 77, 0.418)"
    modal.classList.add("modal_wrapper_show")

})

modal.addEventListener("click", function (e) {
    if (e.target ===modal ){
        modal.classList.remove("modal_wrapper_show")
    }
})

$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});