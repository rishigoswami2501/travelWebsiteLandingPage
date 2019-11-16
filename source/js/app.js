//import { type } from "os"

// JavaScript

//window.sr = ScrollReveal(); 

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });


//Navigation
var nav = document.getElementById("responsive-nav")
var navLinks = document.getElementsByClassName("nav-links")
var links = Array.from(navLinks)
var navToggle = document.querySelector(".nav-toggle")
var hamburgerMenu = document.querySelectorAll("rect")
var hamburgers = Array.from(hamburgerMenu)

function showNav() {
    nav.classList.toggle("unfold")
    links.forEach(link =>{
        link.classList.toggle("visible")
    })
    navToggle.classList.toggle("fixed")
    hamburgers.forEach(hamburger => {
      hamburger.classList.toggle("hamburger-color")  
    })
}
//window.matchMedia(("700px"))

/*------------------------Hotel------------------------*/
var hotelSlides = document.querySelectorAll(".hotel-slide")
var hotelDots = document.querySelectorAll(".hotel-dot")
var hotelSlideIndex = 0
showHotelSlides()

function showHotelSlides() {
  var i
  for (i = 0;  i<hotelSlides.length; i++) {
    hotelSlides[i].style.display = "none"
  }
  hotelSlideIndex++
  if (hotelSlideIndex > hotelSlides.length) {
    hotelSlideIndex = 1
  }
  for (i = 0; i < hotelDots.length; i++) {
    hotelDots[i].className = hotelDots[i].className.replace(" active","")
  }
  hotelSlides[hotelSlideIndex-1].style.display = "block"
  hotelDots[hotelSlideIndex-1].classList.add("active")
  setTimeout(showHotelSlides, 8000)  //Change Hotel every 8 seconds
}

function pushHotelSlide(position) {
  hotelSlideIndex += position
  if (hotelSlideIndex > hotelSlides.length) {
    hotelSlideIndex = 1
  }else if(hotelSlideIndex < 1){
    hotelSlideIndex = hotelSlides.length
  }
  for (let i = 0; i < hotelSlides.length; i++) {
    hotelSlides[i].style.display = "none"
  }
  for (let i = 0; i < hotelDots.length; i++) {
    hotelDots[i].className = hotelDots[i].className.replace(" active","")
  }
  hotelSlides[hotelSlideIndex - 1].style.display = "block"
  hotelDots[hotelSlideIndex - 1].classList.add("active")
}


function currentHotelSlide(index) {
  for (let i = 0; i < hotelSlides.length; i++) {
    hotelSlides[i].style.display = "none"
  } 
  for (let i = 0; i < hotelDots.length; i++) {
    hotelDots[i].className = hotelDots[i].className.replace(" active","")
  }
  hotelSlides[index-1].style.display = "block"
  hotelDots[index-1].classList.add("active")
}


/*------------------------Market Place------------------------*/
let marketPlaceSlides = document.querySelectorAll(".market-place-slide")
let marketPlaceDots = document.querySelectorAll(".market-place-dot")
let marketPlaceSlideIndex = 0
showMarketPlaceSlides()

function showMarketPlaceSlides(){
  for (let i = 0; i < marketPlaceSlides.length; i++) {
    marketPlaceSlides[i].style.display  = "none"
  }
  marketPlaceSlideIndex++
  if(marketPlaceSlideIndex>marketPlaceSlides.length){marketPlaceSlideIndex = 1}
  for(let i=0; i< marketPlaceDots.length; i++){
    marketPlaceDots[i].className = marketPlaceDots[i].className.replace(" active","")
  }
  marketPlaceSlides[marketPlaceSlideIndex-1].style.display = "block"
  marketPlaceDots[marketPlaceSlideIndex-1].classList.add("active")
  setTimeout(showMarketPlaceSlides, 8000);
}

function pushMarketPlaceSlide(position) {
  marketPlaceSlideIndex += position
  if (marketPlaceSlideIndex > marketPlaceSlides.length) {
    marketPlaceSlideIndex = 1
  }else if(marketPlaceSlideIndex<1){
    marketPlaceSlideIndex = marketPlaceSlides.length
  }
  for(let i=0; i<marketPlaceSlides.length; i++){
    marketPlaceSlides[i].style.display = "none"
  }
  for (let i = 0; i < marketPlaceDots.length; i++) {
    marketPlaceDots[i].className = marketPlaceDots[i].className.replace(" active","") 
  }
  marketPlaceSlides[marketPlaceSlideIndex - 1].style.display = "block"
  marketPlaceDots[marketPlaceSlideIndex - 1].classList.add("active")
}

function currentMarketPlaceSlide(index) {
  for (let i = 0; i < marketPlaceSlides.length; i++) {
    marketPlaceSlides[i].style.display = "none"
  }
  for (let i = 0; i < marketPlaceDots.length; i++) {
    marketPlaceDots[i].className = marketPlaceDots[i].className.replace(" active","")
  }
  marketPlaceSlides[index-1].style.display = "block"
  marketPlaceDots[index-1].classList.add("active")
}


/*------------------------Customer Review------------------------*/

let customerReviewSlides = document.querySelectorAll(".customer-slide")
let customerReviewDots = document.querySelectorAll(".customer-dot")
let customerReviewSlideIndex = 0
showCustomerReviewSlides()

function showCustomerReviewSlides() {
  for(let i = 0; i < customerReviewSlides.length; i++){
    customerReviewSlides[i].style.display = "none"
  }
  customerReviewSlideIndex++
  if (customerReviewSlideIndex>customerReviewSlides.length) {
    customerReviewSlideIndex = 1
  }
  for (let i = 0; i < customerReviewDots.length; i++) {
    customerReviewDots[i].className = customerReviewDots[i].className.replace(" active","")
  }
  customerReviewSlides[customerReviewSlideIndex - 1].style.display = "block"
  customerReviewDots[customerReviewSlideIndex - 1].classList.add("active")
  setTimeout(showCustomerReviewSlides,8000)
}

function pushCustomerReviewSlide(position) {
  customerReviewSlideIndex += position
  if (customerReviewSlideIndex > customerReviewSlides.length) {customerReviewSlideIndex =1}
  else if(customerReviewSlideIndex < 1){customerReviewSlideIndex = customerReviewSlides.length}
  for(let i=0; i < customerReviewSlides.length; i++){
    customerReviewSlides[i].style.display = "none"
  }
  for(let i=0; i<customerReviewDots.length; i++){
    customerReviewDots[i].className = customerReviewDots[i].className.replace(" active","")
  }
  customerReviewSlides[customerReviewSlideIndex - 1].style.display = "block"
  customerReviewDots[customerReviewSlideIndex - 1].classList.add("active")
}

function currentCustomerReviewSlide(index){
  for(let i = 0; i<customerReviewSlides.length; i++)[
    customerReviewSlides[i].style.display = "none"
  ]
  for(let i = 0;i<customerReviewDots.length; i++){
    customerReviewDots[i].className = customerReviewDots[i].className.replace(" active","")
  }
  customerReviewSlides[index - 1].style.display = "block"
  customerReviewDots[index - 1].classList.add("active")
}


