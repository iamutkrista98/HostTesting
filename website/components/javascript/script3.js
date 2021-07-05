
/*JAVASCRIPT ON TESTIMONIAL SECTION ALLOWING TO TOGGLE CLICKING ARROWS*/
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;
//function that triggers on load
window.onload = function () {
 
    // Testim Script //playSlide function triggers and passes slide as argument
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");//switches to another child of testim-dots removing the first from highlight of being active till loop terminates 
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;//assigns currentSlide into slide based on the content 
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");//iterate active/inactive status
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");
 
        currentActive = currentSlide;
 
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);//click event on left arrow triggers function and switches to previous slide 
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);//click event on right arrow triggers function and switches to upcoming slide
    })
 
    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);//calling function taking currentSlide as argument
 
}
