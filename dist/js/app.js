function toggleMobileMenu(node, menu, wrapper) {
    node.addEventListener("click", () => {
        node.classList.toggle(`${node.classList[0]}--active`);
        menu.classList.toggle("active");
        let lang = wrapper.querySelector(".lang");
        if (lang) {
            lang.classList.toggle("header-lang--show");
        }
        document.querySelector("body").classList.toggle("lock");
    });
}

function indicatorsLength() {
    let parents = document.querySelectorAll(".carousel-indicators");
    if (parents) {
        parents.forEach((e) => {
            let width = 25 * e.childElementCount;
            e.style.width = `${width}px`;
        });
    }
}

toggleMobileMenu(
    document.querySelector(".burger-btn"),
    document.querySelector(".mobile-menu__body"),
    document.querySelector(".mobile-menu")
);
indicatorsLength();

window.addEventListener(
    "resize",
    function () {
        let clientWidth = document.documentElement.clientWidth;
        if (clientWidth > 575) {
            document
                .querySelector(".burger-btn")
                .classList.remove("burger-btn--active");
            document
                .querySelector(".mobile-menu__body")
                .classList.remove("active");
            document.querySelector("body").classList.remove("lock");
        }
    },
    false
);

function counter(type) {
    const counter = document.querySelector("#catalog-item-counter");

    let currentValue = counter.value;

    if (type === "plus") {
        counter.value = ++currentValue;
    } else if (type === "minus" && counter.value > 0) {
        counter.value = --currentValue;
    }
}

function counterValidation(node) {
    let regexp = /^\d+$/;
    node.addEventListener("keypress", (e) => {
        let clearText = e.target.value.replace(/\./g, "").replace(/\,/g, "");

        if (!regexp.test(clearText) && clearText != "") {
            e.preventDefault();
        } else {
            e.target.value = clearText;
        }
    });
}

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

if (plus && minus) {
    plus.addEventListener("click", () => {
        counter("plus");
    });
    minus.addEventListener("click", () => {
        counter("minus");
    });
}
let catalogCounter = document.querySelector("#catalog-item-counter");
if (catalogCounter) {
    counterValidation(catalogCounter);
}

function toggleSideMenuMobile(node) {
    let expandBtn = document.querySelector(".expand");
    let roleUpBtn = document.querySelector(".roll-up");
    let menu = document.querySelector(".side-menu__list");
    node.addEventListener("click", () => {
        if (menu.classList.contains("side-menu__list--open")) {
            menu.classList.remove("side-menu__list--open");
            expandBtn.style.display = "none";
            roleUpBtn.style.display = "block";
        } else {
            menu.classList.add("side-menu__list--open");
            expandBtn.style.display = "block";
            roleUpBtn.style.display = "none";
        }
    });
}
let sideMenuToggle = document.querySelector(".control-btn");
if (sideMenuToggle) {
    toggleSideMenuMobile(sideMenuToggle);
}
