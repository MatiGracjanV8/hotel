const napis = document.querySelector(".napis");
const options = document.querySelectorAll("li");
const header = document.querySelector('header');
const side_menu = document.querySelector('.sideMenu');

window.addEventListener('scroll', function () {
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
        napis.style.transform = "translateY(250px)";
        side_menu.style.opacity = "1";
        side_menu.style.transform = "translateY(0)";
    } else {
        napis.style.transform = "translateY(0)";
        side_menu.style.opacity = "0";
        side_menu.style.transform = "translateY(20px)";
    }
});

function changeBeforeColor(color, element, on) {
    const style = document.createElement("style");
    style.textContent = `
        ${element}::before {
            background-color: ${color};
            width: ${on};
        }
    `;
    document.head.appendChild(style);
}

function changeHeader(back) {
    header.style.background = `${back}`;
}

document.addEventListener("DOMContentLoaded", function () {
    let welcome = document.querySelector('.welcome');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (entry.target.classList.contains('about')) {
                    changeBeforeColor("rgb(255, 136, 0)", ".hotel", "100%");
                }
                if (entry.target.classList.contains('relaks')) {
                    changeBeforeColor("rgb(255, 136, 0)", ".relaks", "100%");
                }
                if (entry.target.classList.contains('ceny')) {
                    changeBeforeColor("rgb(255, 136, 0)", ".ceny", "100%");
                }
                if (entry.target.classList.contains('welcome')) {
                    changeBeforeColor("rgb(255, 136, 0)", ".home", "100%");
                    changeHeader("transparent");
                }else{
                    changeHeader("rgba(0, 0, 0, 0.8)");
                }
            } else {
                entry.target.classList.remove('is-visible');
                if (entry.target.classList.contains('about')) {
                    changeBeforeColor("#fff", ".hotel", "0%");
                }
                if (entry.target.classList.contains('relaks')) {
                    changeBeforeColor("#fff", ".relaks", "0%");
                }
                if (entry.target.classList.contains('ceny')) {
                    changeBeforeColor("#fff", ".ceny", "0%");
                }
                if (entry.target.classList.contains('welcome')) {
                    changeBeforeColor("#fff", ".home", "0%");
                }
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, options);
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        observer.observe(section);
    });
});

window.addEventListener('load', function () {
    napis.style.transform = "translateY(0)";
    napis.style.transform = "translateX(0)";
    napis.style.opacity = "1";
    header.style.opacity = "1";
    options.forEach(option => {
        option.style.transform = "translateY(0)";
    });
});

const images = [
    { src: 'sauna.png', title: 'Sauna', text: "A sauna is a small room or building desgined to provide a high heat enviroment,<br>typically ranging from 65°C to 90°C (150°F to 195°F)."},
    { src: 'gym.png', title: 'Gym', text: "A gym, also known as a fitness center, health club, or workout facility,<br> is a place where individuals can engage in various forms of physical exercise and activities to improve their<br> fitness, health, and overall well-being."},
    { src: 'bilard2.png', title: 'Bilard', text: "Billiards is a cue sport played on a rectangular table covered with a cloth,<br> bounded by rubber cushions. It includes various games that involve striking billiard balls with a cue stick."}
];
let currentIndex = 0;
let previousDot = null;

function updateImage() {
    const imager = document.querySelector('.imager');
    const titleForImage = document.querySelector('.infor');
    const infoForImage = document.querySelector('.infoforinfo');
    imager.style.backgroundImage = `url(${images[currentIndex].src})`;
    titleForImage.innerHTML = images[currentIndex].title;
    infoForImage.innerHTML = images[currentIndex].text;
    let dot = document.querySelector(`.dot${currentIndex}`);
    
    if (previousDot && previousDot !== dot) {
        previousDot.style.background = "";
        previousDot.style.transform = "scale(1)";
    }
    
    if (dot) {
        dot.style.background = "#fff";
        dot.style.transform = "scale(1.5)";
    }
    
    previousDot = dot;
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

updateImage();