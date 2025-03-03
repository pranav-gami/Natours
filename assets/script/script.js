document.addEventListener("DOMContentLoaded", function () {

    // NAVIGATION SHOW

    const navBtn = document.querySelector(".navigation__button");
    const navIcon = document.querySelector(".navigation__icon")
    const navBg = document.querySelector(".navigation__bg");
    const navbar = document.querySelector(".navigation__navbar");

    let navActive = false;

    const closeNavbar = function () {
        navBg.classList.remove("active");
        navbar.classList.remove("active");
        navIcon.classList.remove("active");
        navIcon.innerHTML = "&nbsp;";
        navActive = false;
    }

    navBtn.addEventListener("click", function () {
        if (navActive) {
            closeNavbar();
        } else {
            navBg.classList.add("active");
            navbar.classList.add("active");
            navIcon.classList.add("active");
            navIcon.innerHTML = "";
            navActive = true;
        }
    })

    const navigationItem = document.querySelectorAll(".navigation__item");

    navigationItem.forEach((navLink) => {
        navLink.addEventListener('click', () => {
            closeNavbar();
        })
    })

    //CHECKBOX TICK IMPLEMENTATION

    const radioBtn = document.querySelectorAll(".radiobox");
    const isCheck = document.querySelectorAll(".radio_check");

    radioBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            isCheck.forEach((ele) => {
                ele.textContent = "";
                console.log("hi");
            })
            console.log("hello");
            let html = `<span class="checked"></span>`;
            isCheck[i].insertAdjacentHTML("afterbegin", html);
        })
    })

});
