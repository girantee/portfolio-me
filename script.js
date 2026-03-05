window.addEventListener("scroll", () => {

const elements = document.querySelectorAll(".project");

elements.forEach(el => {

const position = el.getBoundingClientRect().top;

const screen = window.innerHeight;

if(position < screen - 100){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}

});

});