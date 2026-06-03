// MENU MOBILE

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// FERMER LE MENU APRES UN CLIC

document.querySelectorAll('nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

//MENU DES COMPETENCES

const progresses = document.querySelectorAll('.progress');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const progress = entry.target;
        const target = parseInt(progress.dataset.width);

        const counter = progress.parentElement.previousElementSibling.querySelector('.counter');
        if(entry.isIntersecting){
            progress.style.width = target + "%"
            let start = 0;

            const interval = setInterval(() => {
                if(start >= target){
                    clearInterval(interval);
                }else{
                    start++;
                    counter.textContent = start + "%";
                }
            }, 20);
        }
    });
});

progresses.forEach(progress => {
    observer.observe(progress);
});

//ANIMATION AU SCROLL

const hiddenElements = document.querySelectorAll('.hidden');

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach(el => {
    revealObserver.observe(el);
});

const days = document.getElementById('days');

let count = 0;
let target = 547;

const daysCounter = setInterval(() => {
    if(count >= target){
        clearInterval(daysCounter);
    }else{
        count++;
        days.textContent = count;
    }
}, 5);

// EFFET DE SAISI SUR LE NOM 
window.addEventListener("DOMContentLoaded", () => {

const text = "MOUAFO DANIEL";
const typing = document.getElementById("typing");
let i = 0;

function typeWriter(){
    if(i < text.length){
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}
typeWriter();
});