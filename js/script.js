// HERO - SLIDER 

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function() {
    Next()
}, 3000)

// DARK MODE 

let darkmode = null;
const themeDark = document.getElementById('theme-dark');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    document.getElementById('logo').style.filter = 'invert(1)';
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    document.getElementById('logo').style.filter = 'invert(0)';
}

themeDark.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== 'active') {
        enableDarkmode();
      } else {
        disableDarkmode();
      }
})

// MENU RESPONSIVE HAMBURGUESA 
