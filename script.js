// =========================
// BIRHAN BEAUTY SALON
// JAVASCRIPT
// =========================



// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}



document.querySelectorAll(".nav-links a").forEach(link=>{


link.addEventListener("click",()=>{


navLinks.classList.remove("active");


});


});







// FAQ ACCORDION


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








// BACK TO TOP BUTTON


const topBtn = document.getElementById("topBtn");



if(topBtn){


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




topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}








// SIMPLE SCROLL REVEAL


const sections = document.querySelectorAll("section");



const reveal = ()=>{


sections.forEach(section=>{


const position = section.getBoundingClientRect().top;


if(position < window.innerHeight - 100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}


});


};



sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="1s ease";


});



window.addEventListener("scroll",reveal);


reveal();
