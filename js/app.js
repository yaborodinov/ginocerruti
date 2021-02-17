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
