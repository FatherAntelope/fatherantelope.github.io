'use strict';

/**--------------------Спиннер--------------------**/
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".section-home").classList.add("active");
    document.querySelector(".page-loader").classList.add("fade-out");

    renderInfo("/json/info.json");

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
    if (evt.target.classList.contains("link-item") && evt.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if (evt.target.classList.contains("nav-item")) {
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
    if (evtTab.target.classList.contains("tab-item") && !evtTab.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        evtTab.target.classList.add("active");

        let targetTabAtr = evtTab.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(targetTabAtr).classList.add("active");
    }
});

/**-----------------Модальное окно-----------------**/
document.addEventListener("click", evt => {
    if (evt.target.classList.contains("btn-view-project")) {
        itemDetailsPortfolio(evt.target.parentElement);
        toggleModal();
    }
});

document.addEventListener("click", evt => {
    if (evt.target.classList.contains("modal-inner")) {
        document.querySelector(".modal-portfolio").scrollTo(0, 0);
        toggleModal();
        itemDetailsPortfolio(evt.target.parentElement);
    }
});

document.querySelector(".modal-close").addEventListener("click", toggleModal);


/**-----------------Отправка формы (сообщение на почту)-----------------**/
let formSentMsgToMail = document.getElementById("formSendMsgToMail");

async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("form-status");
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: formSentMsgToMail.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Ваше сообщение отправлено успешно!";
        formSentMsgToMail.reset()
    }).catch(error => {
        status.innerHTML = "Ошибка. Сообщение не было отправлено"
    });
}

formSentMsgToMail.addEventListener("submit", handleSubmit);


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
    document.querySelector(".modal-thumbnail img").setAttribute(
        "src",
        itemPortfolio.querySelector(".card-item-portfolio-thumbnail img").getAttribute("src")
    );

    document.querySelector(".modal-header h3").innerHTML =
        itemPortfolio.querySelector(".card-item-portfolio h3").innerHTML;

    document.querySelector(".modal-body").innerHTML =
        itemPortfolio.querySelector(".card-item-portfolio-details").innerHTML;
}

function renderInfo(pathJSON) {
    // Загрузка данных проектов в карточки портфолио из JSON
    fetch(pathJSON)
        .then(response => response.json())
        .then(data => {
            renderDescription(data["description"]);
            renderSkills(data["skills"]["key"], "skills_key");
            renderSkills(data["skills"]["additional"], "skills_additional");
            renderTabData(data["education"], "#education");
            renderTabData(data["training"], "#training");
            renderPortfolioCards(data["portfolio"]);
            renderContacts(data["contacts"]);
        });
}

function renderDescription(dataJson) {
    document.querySelector(".text-about").insertAdjacentHTML("afterbegin", dataJson);
}

function renderSkills(dataJson, elemID) {
    let skillsArr = Object.values(dataJson);
    let skillsItem = document.getElementById(elemID);
    let htmlElement;
    skillsArr.forEach(item => {
        htmlElement = `
            <div class="skill-item">${item}</div>
        `;
        skillsItem.insertAdjacentHTML("beforeend", htmlElement);
    });
}

function renderTabData(dataJson, id) {
    let educationArr = Object.values(dataJson);
    let timeline = document.querySelector(`${id} .timeline`);
    let htmlElement;
    educationArr.forEach(item => {
        htmlElement = `
        <div class="timeline-item">
            <span class="date">${item["period"]}</span>
            <h4>${item["direction"]} - <span>${item["name_place_study"]}</span></h4>
            <p>${item["document"]}</p>
        </div>
        `;
        timeline.insertAdjacentHTML("afterbegin", htmlElement);
    });
}

function renderPortfolioCards(dataJson) {
    let portfolioArr = Object.values(dataJson);
    let cardPortfolioElement = document.querySelector(".cards-portfolio");
    let htmlElement;
    portfolioArr.forEach(item => {
        htmlElement = `
                <div class="card-item-portfolio">
                    <div class="card-item-portfolio-thumbnail">
                        <img src="${item["imgURL"]}" alt="saturn-mis project">
                    </div>
                    <h3>${item["nameProject"]}</h3>
                    <button class="btn btn-view-project">Подробнее</button>
                    <div class="card-item-portfolio-details">
                        <div class="description">
                            <p>${item["about"]}</p>
                        </div>
                        <div class="general-info">
                            <ul>
                                <li>Год - <span>${item["year"]}</span></li>
                                <li>Роль - <span>${item["role"]}</span></li>
                                <li>Использованные технологии - <span>${item["technologies"]}</span></li>
                                <li>Репозиторий - 
                                    <span>
                                        <a href="${item["repositoryURL"]}" target="_blank">${item["repositoryURL"]}</a>
                                    </span>
                                </li>
                                ` +
                                    (
                                        item["websiteURL"] != null ?
                                            `<li>Сайт - 
                                                <span>
                                                    <a href=\"${item["websiteURL"]}\" target=\"_blank\">
                                                       ${item["websiteURL"]}
                                                    </a>
                                                </span>
                                            </li>` :
                                            ""
                                    )
                                    + `
                            </ul>
                        </div>
                    </div>
                </div>
                `;

        cardPortfolioElement.insertAdjacentHTML("beforeend", htmlElement);
    });
}

function renderContacts(dataJson) {
    document.querySelector("#phone_number p").innerText = dataJson["phone_number"];
    document.querySelector("#email p").innerText = dataJson["email"];
}
