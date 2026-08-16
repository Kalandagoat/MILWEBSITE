/* =========================================================
   THE INITIATIVE FOR HUMAN AND ENVIRONMENTAL WELLBEING
   COMPLETE SCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });


    /* Close menu when clicking a link */

    const navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove(
            "active-link"
        );


        const href =
            link.getAttribute("href");


        if (
            href === "#" + currentSection
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =========================================================
   NAVBAR SHADOW ON SCROLL
========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function () {

        if (!navbar) return;


        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(30,35,30,.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);



/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (anchor) {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                !targetId
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) return;


            event.preventDefault();


            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight -
                20;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});



/* =========================================================
   CARD HOVER EFFECT
========================================================= */

const cards =
    document.querySelectorAll(
        ".topic-card"
    );


cards.forEach(function (card) {

    card.addEventListener(
        "mouseenter",
        function () {

            this.style.cursor =
                "pointer";

        }
    );

});



/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
