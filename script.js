/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });


    /* Close menu when a link is clicked */

    const links =
        navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


/* =========================================
   CARD TILT EFFECT
========================================= */

const cards =
    document.querySelectorAll(".topic-card");


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 800) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2;


            const rotateY =
                ((x - centerX) / centerX) * 2;


            card.style.transform =
                `translateY(-9px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0) rotateX(0) rotateY(0)";

        }
    );

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".intro, .topic-card, .article, .takeaway, .references"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================
   REVEAL ANIMATION CSS
========================================= */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .reveal {

        opacity: 0;

        transform:
            translateY(25px);

        transition:
            opacity 0.8s ease,
            transform 0.8s ease;

    }


    .reveal.visible {

        opacity: 1;

        transform:
            translateY(0);

    }

`;


document.head.appendChild(revealStyle);


/* =========================================
   NAVBAR SHADOW ON SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(29, 43, 37, 0.07)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});
