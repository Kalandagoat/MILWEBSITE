/* =========================================================
   THE INITIATIVE FOR HUMAN AND ENVIRONMENTAL WELLBEING
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });


    /* Close menu when a navigation link is clicked */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

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


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");


                    navigationLinks.forEach((link) => {

                        link.classList.remove("active-link");

                        const linkTarget =
                            link.getAttribute("href");


                        if (
                            linkTarget === "#" + currentId
                        ) {

                            link.classList.add(
                                "active-link"
                            );

                        }

                    });

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(".navbar");


let lastScroll = 0;


window.addEventListener(
    "scroll",
    () => {

        const currentScroll =
            window.scrollY;


        if (!navbar) return;


        if (currentScroll > 50) {

            navbar.style.boxShadow =
                "0 10px 35px rgba(20, 25, 20, 0.08)";

        } else {

            navbar.style.boxShadow = "none";

        }


        lastScroll = currentScroll;

    },
    {
        passive: true
    }
);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId === "#" ||
                    targetId === ""
                ) {

                    return;

                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    const navbarHeight =
                        navbar
                            ? navbar.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight -
                        15;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }

            }
        );

    });


/* =========================================================
   BACKGROUND PARALLAX
========================================================= */

const backgroundSections =
    document.querySelectorAll(
        ".hero, .education-section, .health-section, .environment-section, .rationale-section"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.innerWidth <= 760) {

            return;

        }


        const scrollPosition =
            window.scrollY;


        backgroundSections.forEach(
            (section) => {

                const rect =
                    section.getBoundingClientRect();


                const sectionCenter =
                    rect.top + rect.height / 2;


                const viewportCenter =
                    window.innerHeight / 2;


                const distance =
                    sectionCenter -
                    viewportCenter;


                const movement =
                    distance * -0.025;


                if (
                    Math.abs(distance) <
                    window.innerHeight * 1.2
                ) {

                    section.style.backgroundPosition =
                        `center calc(50% + ${movement}px)`;

                }

            }
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   CARD HOVER EFFECT
========================================================= */

const cards =
    document.querySelectorAll(".topic-card");


cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 760) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2;


            const rotateY =
                ((x - centerX) / centerX) * 2;


            card.style.transform =
                `translateY(-10px)
                 perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});


/* =========================================================
   ESCAPE KEY CLOSES MOBILE MENU
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navLinks &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            if (menuBtn) {

                menuBtn.textContent = "☰";

            }

        }

    }
);


/* =========================================================
   UPDATE YEAR AUTOMATICALLY
========================================================= */

const footer =
    document.querySelector("footer");


if (footer) {

    const footerText =
        footer.querySelector("p");


    if (footerText) {

        const currentYear =
            new Date().getFullYear();


        footerText.textContent =
            `© ${currentYear} The Initiative for Human and Environmental Wellbeing`;

    }

}


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add("page-loaded");

    }
);
