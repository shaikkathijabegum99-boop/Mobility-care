

document.addEventListener("DOMContentLoaded", () => {

    const home2Page = document.querySelector(".home2-page");

    if (!home2Page) return;



    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    const sections = home2Page.querySelectorAll(
        "section:not(.home2-hero)"
    );

    sections.forEach((section) => {
        section.classList.add("home2-reveal");
    });



    const cards = home2Page.querySelectorAll(
        ".how-it-works-step, " +
        ".solution-feature-card, " +
        ".experience-point, " +
        ".premium-product-card, " +
        ".financing-stat, " +
        ".mini-testimonial"
    );

    cards.forEach((card) => {
        card.classList.add("home2-card-reveal");
    });



    if (prefersReducedMotion) {

        sections.forEach((section) => {
            section.classList.add("is-visible");
        });

        cards.forEach((card) => {
            card.classList.add("is-visible");
        });

    } else {


        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );


        sections.forEach((section) => {
            revealObserver.observe(section);
        });


        cards.forEach((card) => {
            revealObserver.observe(card);
        });

    }


    const staggerGroups = [
        ".how-it-works-steps",
        ".home2-solution-grid",
        ".featured-grid",
        ".financing-side",
        ".testimonial-side"
    ];

    staggerGroups.forEach((selector) => {

        const group = home2Page.querySelector(selector);

        if (!group) return;

        const groupCards = group.children;

        Array.from(groupCards).forEach((card, index) => {

            card.style.setProperty(
                "--home2-delay",
                `${index * 90}ms`
            );

        });

    });


    const anchorLinks = home2Page.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start"
            });

        });

    });



    const images = home2Page.querySelectorAll("img");

    images.forEach((image) => {

        if (image.complete) {
            image.classList.add("image-loaded");
            return;
        }

        image.addEventListener(
            "load",
            () => {
                image.classList.add("image-loaded");
            },
            { once: true }
        );

    });



    const navigationLinks = document.querySelectorAll(
        ".navbar-menu a[href]"
    );

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase() || "index.html";

    navigationLinks.forEach((link) => {

        const linkPage = link.getAttribute("href")
            ?.split("#")[0]
            .split("?")[0]
            .toLowerCase();

        if (
            linkPage === "home2.html" &&
            currentPage === "home2.html"
        ) {
            link.classList.add("active");
        }

    });



    const header = document.querySelector(".navbar-header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 20) {
                header.classList.add("is-scrolled");
            } else {
                header.classList.remove("is-scrolled");
            }

        };

        updateHeader();

        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );

    }



    if (window.location.hash) {

        const target = document.querySelector(
            window.location.hash
        );

        if (target) {

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                    block: "start"
                });

            }, 150);

        }

    }

});

