// function mobileMenu(node, menu, wrapper) {
// 	wrapper.addEventListener("click", () => {
// 		node.classList.toggle(`${node.classList[0]}--active`);
// 		menu.classList.toggle("active");
// 		document.querySelector("body").classList.toggle("lock");
// 	});
// }

// function indicatorsLength() {
// 	let parents = document.querySelectorAll(".carousel-indicators");
// 	parents.forEach((e) => {
// 		let width = 25 * e.childElementCount;
// 		e.style.width = `${width}px`;
// 	});
// }

// mobileMenu(
// 	document.querySelector(".burger-btn"),
// 	document.querySelector(".mobile-menu__body"),
// 	document.querySelector(".burger-btn__wrapper")
// );
// indicatorsLength();
// window.addEventListener(
// 	"resize",
// 	function () {
// 		let clientWidth = document.documentElement.clientWidth;
// 		if (clientWidth > 575) {
// 			document
// 				.querySelector(".burger-btn")
// 				.classList.remove("burger-btn--active");
// 			document
// 				.querySelector(".mobile-menu__body")
// 				.classList.remove("active");
// 			document.querySelector("body").classList.remove("lock");
// 		}
// 	},
// 	false
// );
// function openFullImage(node) {
// 	let mainImageContainer = node;
// 	let previewItems =
// 		mainImageContainer.querySelectorAll(".modal-image__item");

// 	let mainImage = document.querySelector("#modal-image");
// 	previewItems.forEach((e) => {
// 		e.addEventListener("click", function (event) {
// 			mainImage.innerHTML = "";
// 			let item = event.target;
// 			if (item.classList.contains("modal-image__item")) {
// 				let currentImageSrc = item.getAttribute("src");
// 				let id = item.dataset.id;
// 				let img = document.createElement("img");
// 				img.setAttribute("src", currentImageSrc);
// 				mainImage.appendChild(img);
// 			}
// 		});
// 	});
// }

// openFullImage(document.querySelector("#licences-wrapper-desctop"));
// openFullImage(document.querySelector("#licences-wrapper-mobile"));

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

        if (!regexp.test(clearText) && clearText != '') {
            e.preventDefault();
        } else {
            e.target.value = clearText;
        }
    });
}

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

plus.addEventListener("click", () => {
    counter("plus");
});
minus.addEventListener("click", () => {
    counter("minus");
});

counterValidation(document.querySelector("#catalog-item-counter"));
