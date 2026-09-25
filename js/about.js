

document.addEventListener("DOMContentLoaded", () => {

    const aboutPage = document.querySelector(".about-page");

    if (!aboutPage) return;



    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;



    const sections = aboutPage.querySelectorAll(
        "section:not(.about-hero)"
    );

    sections.forEach((section) => {
        section.classList.add("about-reveal");
    });


    const revealItems = aboutPage.querySelectorAll(
        ".approach-card, " +
        ".value-card, " +
        ".team-card, " +
        ".timeline-item, " +
        ".story-highlight, " +
        ".accessibility-list li"
    );

    revealItems.forEach((item, index) => {
        item.classList.add("about-item-reveal");

        if (!reduceMotion) {
            item.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
        }
    });



    const images = aboutPage.querySelectorAll(
        ".about-story-image, " +
        ".accessibility-image, " +
        ".about-hero-image-wrap, " +
        ".team-image, " +
        ".about-cta-image"
    );

    images.forEach((image) => {
        image.classList.add("about-image-reveal");
    });



    if (reduceMotion) {

        aboutPage
            .querySelectorAll(
                ".about-reveal, " +
                ".about-item-reveal, " +
                ".about-image-reveal"
            )
            .forEach((element) => {
                element.classList.add("is-visible");
            });

        return;
    }



    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                obs.unobserve(entry.target);
            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    aboutPage
        .querySelectorAll(
            ".about-reveal, " +
            ".about-item-reveal, " +
            ".about-image-reveal"
        )
        .forEach((element) => {
            observer.observe(element);
        });


    const hero = aboutPage.querySelector(".about-hero");

    if (hero) {
        requestAnimationFrame(() => {
            hero.classList.add("hero-ready");
        });
    }



    aboutPage
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId = link.getAttribute("href");

                if (!targetId || targetId === "#") return;

                const target = document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start"
                });

            });

        });



    const timelineItems = aboutPage.querySelectorAll(
        ".timeline-item"
    );

    if (timelineItems.length && !reduceMotion) {

        const timelineObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("timeline-active");
                    }

                });

            },
            {
                threshold: 0.35
            }
        );

        timelineItems.forEach((item) => {
            timelineObserver.observe(item);
        });
    }



    const teamCards = aboutPage.querySelectorAll(".team-card");

    teamCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("team-hover");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("team-hover");
        });

    });



    window.addEventListener("pagehide", () => {

        revealItems.forEach((item) => {
            item.style.transitionDelay = "";
        });

    });

});