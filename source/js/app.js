
// JavaScript

//window.sr = ScrollReveal(); 

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });


// function showNav(){
//     console.log("this is working")
//     var nav = document.getElementById("responsive-nav")
//     nav.classList.toggle("unfold")
// }

function showNav(){
    var nav = document.getElementById("responsive-nav")
    if (nav.style.display = "none"){
        nav.style.display = "flex"
    } else{
        nav.style.display = "none"
    }
}

//window.matchMedia(("700px"))