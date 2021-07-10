(function () {
    let catalogSection = document.querySelector(".catalog");
    let currentCategoryTitle = document.querySelector(".current-category");
    if (catalogSection === null) {
        return;
    }

    let removeChildren = (item) => {
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
    };

    let updateChildren = function (item, children) {
        removeChildren(item);
        for (let i = 0; i < children.length; i += 1) {
            item.appendChild(children[i]);
        }
    };

    let catalog = catalogSection.querySelector(".js-catalog-list");
    let catalogNav = catalogSection.querySelectorAll(".js-catalog-nav-list");
    let catalogItems = catalogSection.querySelectorAll(".js-catalog-list-item");
    catalogNav.forEach((el) => {
        el.addEventListener("click", function (e) {
            let target = e.target;

            let item = myLib.closestItemByClass(
                target,
                "js-catalog-nav-list-item"
            );

            if (
                item === null ||
                item.classList.contains("side-menu__item--active")
            ) {
                return;
            }
        
            if (document.documentElement.clientWidth < 991) {
                toggleSideMenuMobile(document.querySelector('.control-btn'))
            }

            let filterValue = item.getAttribute("data-category");

            currentCategoryTitle.textContent = item.textContent;

            let previousBtnActive = el.querySelector(
                ".side-menu__item--active"
            );

            previousBtnActive.classList.remove("side-menu__item--active");
            item.classList.add("side-menu__item--active");

            if (filterValue === "all") {
                updateChildren(catalog, catalogItems);
                return;
            }

            let filteredItems = [];
            for (let i = 0; i < catalogItems.length; i += 1) {
                let current = catalogItems[i];
                if (current.getAttribute("data-category") === filterValue) {
                    filteredItems.push(current);
                }
            }
            updateChildren(catalog, filteredItems);
        });
    });
})();
