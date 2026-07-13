/* =========================
   BIRHAN BEAUTY SALON
   SCRIPT
========================= */



// =========================
// MOBILE MENU
// =========================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

}




// Close menu when clicking links

document.querySelectorAll(".nav-links a").forEach(link=>{


link.addEventListener("click",()=>{


    navLinks.classList.remove("active");


});


});






// =========================
// LOADING SCREEN
// =========================


window.addEventListener("load",()=>{


const loader = document.querySelector(".loader");


if(loader){


setTimeout(()=>{


loader.style.display="none";


},2500);


}


});







// =========================
// SCROLL ANIMATION
// =========================



const sections = document.querySelectorAll(

".about, .services, .gallery, .bridal, .why-us, .promise, .testimonials, .faq, .booking, .contact"

);



const reveal = ()=>{


sections.forEach(section=>{


const position = section.getBoundingClientRect().top;


const screenPosition = window.innerHeight - 100;



if(position < screenPosition){


section.classList.add("show");


}



});


};



window.addEventListener("scroll",reveal);


reveal();








// =========================
// BACK TO TOP
// =========================



const topBtn = document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


topBtn.style.opacity="1";


topBtn.style.pointerEvents="auto";


}

else{


topBtn.style.opacity="0";


topBtn.style.pointerEvents="none";


}



});





if(topBtn){


topBtn.addEventListener("click",()=>{


window.scrollTo({


top:0,


behavior:"smooth"


});


});


}








// =========================
// FAQ ACCORDION
// =========================



const faqItems = document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


const question = item.querySelector("h3");


const answer = item.querySelector("p");



answer.style.display="none";



question.addEventListener("click",()=>{


if(answer.style.display==="none"){


answer.style.display="block";


}

else{


answer.style.display="none";


}



});


});







// =========================
// ACTIVE NAV ON SCROLL
// =========================



const navSections = document.querySelectorAll("section");



window.addEventListener("scroll",()=>{


let current="";



navSections.forEach(section=>{


const sectionTop = section.offsetTop - 150;


if(scrollY >= sectionTop){


current = section.getAttribute("id");


}


});



document.querySelectorAll(".nav-links a").forEach(link=>{


link.classList.remove("active");



if(link.getAttribute("href") === "#" + current){


link.classList.add("active");


}



});



});
