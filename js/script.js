'use strict';
/**--------------------Спиннер--------------------**/
window.addEventListener("load", () => {
   document.querySelector(".main").classList.remove("hidden");
   document.querySelector(".section-home").classList.add("active");
   document.querySelector(".page-loader").classList.add("fade-out");
   setTimeout(() => {
       document.querySelector(".page-loader").style.display = "none";
   }, 1000);
});

/**---------------------Навбар--------------------**/
let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener('click', () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scroll");
});

/**----------------Активация секций---------------**/
document.addEventListener("click", evt => {
    if(evt.target.classList.contains("link-item") && evt.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(evt.target.classList.contains("nav-item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scroll");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(evt.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scroll");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500)
    }
})


/**--------------------Таблист--------------------**/
let tabsContainer = document.querySelector(".tabs-about"),
    aboutSection = document.querySelector(".section-about");

tabsContainer.addEventListener("click", evtTab => {
    if(evtTab.target.classList.contains("tab-item") && !evtTab.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        evtTab.target.classList.add("active");

        let targetTabAtr = evtTab.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(targetTabAtr).classList.add("active");
    }
});

/**-----------------Модальное окно-----------------**/
document.addEventListener("click", evt => {
    if(evt.target.classList.contains("btn-view-project")) {
        itemDetailsPortfolio(evt.target.parentElement);
        toggleModal();
    }
});

document.addEventListener("click", evt => {
   if(evt.target.classList.contains("modal-inner")) {
       document.querySelector(".modal-portfolio").scrollTo(0, 0);
       toggleModal();
       itemDetailsPortfolio(evt.target.parentElement);
   }
});

document.querySelector(".modal-close").addEventListener("click", toggleModal);

/**--------------------Функции--------------------**/
function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

function toggleModal() {
    document.querySelector(".modal-portfolio").classList.toggle("open");
    document.body.classList.toggle("hide-scroll");
    document.querySelector(".main").classList.toggle("fade-out");
}

function itemDetailsPortfolio(itemPortfolio) {
    document.querySelector(".modal-thumbnail img").src =
        itemPortfolio.querySelector(".card-item-portfolio-thumbnail img").src;

    document.querySelector(".modal-header h3").innerHTML =
        itemPortfolio.querySelector(".card-item-portfolio h3").innerHTML;

    document.querySelector(".modal-body").innerHTML =
        itemPortfolio.querySelector(".card-item-portfolio-details").innerHTML;
}