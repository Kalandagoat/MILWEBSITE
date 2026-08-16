```javascript
/* =========================================
   KNOWLEDGE+ WEBSITE
   script.js
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        // Change menu icon
        if (navLinks.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


/* =========================================
   CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
========================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections =
    document.querySelectorAll("section[id], article[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


const sectionObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentSection =
                    entry.target.getAttribute("id");

                navItems.forEach(link => {

                    link.classList.remove("active");

                    const linkTarget =
                        link.getAttribute("href");

                    if (linkTarget === `#${currentSection}`) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
    }

);


sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".topic-card, .article, .takeaway, .references, .intro"
);


/* Add animation class */

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            const navbarHeight = 80;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }

    });

});


/* =========================================
   TOPIC CARD HOVER EFFECT
========================================= */

const cards =
    document.querySelectorAll(".topic-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

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
            `translateY(-7px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) rotateX(0) rotateY(0)";

    });

});


/* =========================================
   NAVBAR BACKGROUND ON SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(29, 43, 37, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================================
   PARALLAX HERO EFFECT
========================================= */

const glowOne =
    document.querySelector(".glow-one");

const glowTwo =
    document.querySelector(".glow-two");


window.addEventListener("scroll", () => {

    const scrollPosition =
        window.scrollY;

    if (glowOne) {

        glowOne.style.transform =
            `translateY(${scrollPosition * 0.12}px)`;

    }

    if (glowTwo) {

        glowTwo.style.transform =
            `translateY(${scrollPosition * -0.08}px)`;

    }

});


/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
```
