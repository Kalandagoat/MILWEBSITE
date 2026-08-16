/* =========================================================
   THE INITIATIVE FOR HUMAN AND ENVIRONMENTAL WELLBEING
   SCRIPT.JS
========================================================= */


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



/* =========================================================
   NAVBAR SHADOW WHEN SCROLLING
========================================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.10)";

    } else {

        navbar.style.boxShadow = "none";

    }

});



/* =========================================================
   HIGHLIGHT CURRENT NAVIGATION SECTION
========================================================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".navbar nav a"
);


window.addEventListener("scroll", function () {

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


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================================
   ESSAY LINK EFFECT
========================================================= */

const essayButtons = document.querySelectorAll(
    ".essay-link-button"
);


essayButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        setTimeout(function () {

            target.classList.add("essay-highlight");

            setTimeout(function () {

                target.classList.remove(
                    "essay-highlight"
                );

            }, 1500);

        }, 600);

    });

});



/* =========================================================
   SIMPLE FADE-IN ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".about-card, .takeaway-card, .contributor-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function checkScreenSize() {

    if (window.innerWidth <= 600) {

        document.querySelectorAll(
            ".navbar nav a"
        ).forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    window.scrollBy(0, -1);

                }
            );

        });

    }

}


checkScreenSize();


window.addEventListener(
    "resize",
    checkScreenSize
);



/* =========================================================
   PAGE LOADED
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "The Initiative for Human and Environmental Wellbeing loaded."
        );

    }
);
