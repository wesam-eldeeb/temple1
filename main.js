var numInp = document.getElementById("numInp");
function up() {

    numInp.stepUp(5);
}

function down() {
    numInp.stepDown(10);
}


var rangeInp = document.getElementById("rangeInp");
var span = document.getElementById("rangeVal");

rangeInp.addEventListener("input", function () {
    span.innerText = rangeInp.value
})

// ********************************/


var audio = document.querySelector("audio");

var volumeInp = document.getElementById("volumeInp")
var timeInp = document.getElementById("timeInp")

function playAud() {
    audio.play();
}
function pauseAud() {

    audio.pause();
}
function stopAud() {

    audio.load();
    audio.pause();
}
function muteAud() {
    audio.muted = !audio.muted;
}


function test() {

}


volumeInp.addEventListener("input", function () {
    audio.volume = volumeInp.value;
})

timeInp.addEventListener("input", function () {
    audio.currentTime = timeInp.value
})

audio.addEventListener("timeupdate", function () {
    timeInp.value = audio.currentTime
})

// ********************************/

var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
    
    timeInp.max = audio.duration;

    setTimeout(function () {
        
        preloader.style.transition = "opacity 0.3s ease";
        preloader.style.opacity = 0;
        setTimeout(function () {
            preloader.style.display = "none";
        }, 400)
    }, 1000)
     
    h1.style.animation="fadeLeft 3s forwards"
    p.style.animation="fadeLeft 3s  0.2s forwards"
    img.style.animation="fadeRight 3s 0.4s forwards"

}


// ********************************/


var nav = document.querySelector("nav");

var offer1 = document.querySelector(".offer1");
var offer2 = document.querySelector(".offer2");
var offer3 = document.querySelector(".offer3");


var serv1=document.querySelector(".serv1")
var serv2=document.querySelector(".serv2")
var serv3=document.querySelector(".serv3")
var serv4=document.querySelector(".serv4")

var h1= document.querySelector(".h1")
var p= document.querySelector(".p")
var img=document.querySelector(".myImg")



window.onscroll = function () {

  

    if (scrollY > 480) {
        nav.classList.add("sticky-bar");
        offer1.style.animation = "fadeInUp 1.5s forwards"
        offer2.style.animation = "fadeInUp 1.5s 0.4s forwards"
        offer3.style.animation = "fadeInUp 1.5s 0.8s forwards"
    }
        
    if(scrollY>2110){
        serv1.style.animation="fadeInDown 1.5s forwards"
        serv2.style.animation="fadeInDown 1.5s 0.2s forwards"
        serv3.style.animation="fadeInDown 1.5s 0.4s forwards"
        serv4.style.animation="fadeInDown 1.5s  0.8s forwards"
    }
   
    else {
        nav.classList.remove("sticky-bar");

    }

}

var currentSlide = 0;
   var validInterval= setInterval(function(){
        changeSlide(-1,SlideShow)
    },3000)

    
function SlideShow(index) {
    const allSlides = document.querySelectorAll('.testimonial');
    const Len= allSlides.length;
    if (index >= Len) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = Len - 1;
    } else {
        currentSlide = index;
    }
    const slider = document.querySelector('.testimonialConatiner');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(dir, func) {
    func(currentSlide + dir);
}

SlideShow(currentSlide);

function stop(currentIndex){
    clearInterval(validInterval)
    SlideShow(currentIndex)
}
document.querySelector(".prev").addEventListener("click" , function(){
    changeSlide(-1,stop)
    document.getElementById("n1").style.color="#fef1ed"
    document.getElementById("n2").style.color="black"

})
document.querySelector(".next").addEventListener("click" ,function(){
    changeSlide(1,stop)
     document.getElementById("n1").style.color="black"
    document.getElementById("n2").style.color="#fef1ed"
})
