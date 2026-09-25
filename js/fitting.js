

document.addEventListener("DOMContentLoaded", () => {


    const sections = document.querySelectorAll(
        ".fitting-page section"
    );

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        sections.forEach(section => {

            
            if (!section.classList.contains("fitting-hero")) {
                section.classList.add("fitting-reveal");
                sectionObserver.observe(section);
            }

        });

    } else {

        sections.forEach(section => {
            section.classList.add("is-visible");
        });

    }



    const serviceCards = document.querySelectorAll(
        ".fitting-service-card"
    );

    if ("IntersectionObserver" in window) {

        const serviceObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        serviceCards.forEach(card => {
            card.classList.add("fitting-reveal");
            serviceObserver.observe(card);
        });

    } else {

        serviceCards.forEach(card => {
            card.classList.add("is-visible");
        });

    }



    const processCards = document.querySelectorAll(
        ".fitting-process-card"
    );

    if ("IntersectionObserver" in window) {

        const processObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        processCards.forEach(card => {
            card.classList.add("fitting-reveal");
            processObserver.observe(card);
        });

    } else {

        processCards.forEach(card => {
            card.classList.add("is-visible");
        });

    }



    const equipmentItems = document.querySelectorAll(
        ".fitting-equipment-item"
    );

    if ("IntersectionObserver" in window) {

        const equipmentObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        equipmentItems.forEach(item => {
            item.classList.add("fitting-reveal");
            equipmentObserver.observe(item);
        });

    } else {

        equipmentItems.forEach(item => {
            item.classList.add("is-visible");
        });

    }



    const faqItems = document.querySelectorAll(
        ".fitting-faq-item"
    );

    faqItems.forEach(item => {

        const question = item.querySelector(
            ".fitting-faq-question"
        );

        const answer = item.querySelector(
            ".fitting-faq-answer"
        );

        const icon = item.querySelector(
            ".fitting-faq-question i"
        );

        if (!question || !answer) return;

        question.setAttribute(
            "aria-expanded",
            "false"
        );

        answer.style.maxHeight = "0";
        answer.style.overflow = "hidden";
        answer.style.transition =
            "max-height .35s ease";


        question.addEventListener("click", () => {

            const isOpen =
                item.classList.contains("active");


            
            faqItems.forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                    const otherQuestion =
                        otherItem.querySelector(
                            ".fitting-faq-question"
                        );

                    const otherAnswer =
                        otherItem.querySelector(
                            ".fitting-faq-answer"
                        );

                    const otherIcon =
                        otherItem.querySelector(
                            ".fitting-faq-question i"
                        );


                    if (otherQuestion) {

                        otherQuestion.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }


                    if (otherAnswer) {

                        otherAnswer.style.maxHeight = "0";

                    }


                    if (otherIcon) {

                        otherIcon.style.transform =
                            "rotate(0deg)";

                    }

                }

            });


            

            if (!isOpen) {

                item.classList.add("active");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

                if (icon) {

                    icon.style.transform =
                        "rotate(180deg)";

                }

            } else {

                item.classList.remove("active");

                question.setAttribute(
                    "aria-expanded",
                    "false"
                );

                answer.style.maxHeight = "0";

                if (icon) {

                    icon.style.transform =
                        "rotate(0deg)";

                }

            }

        });

    });



    document.querySelectorAll(
        '.fitting-page a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header =
                document.querySelector(".navbar-header");

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });



    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducedMotion) {

        document
            .querySelectorAll(
                ".fitting-reveal"
            )
            .forEach(element => {

                element.classList.add(
                    "is-visible"
                );

            });

    }

    window.addEventListener("resize", () => {

        const activeFaq =
            document.querySelector(
                ".fitting-faq-item.active .fitting-faq-answer"
            );

        if (activeFaq) {

            activeFaq.style.maxHeight =
                activeFaq.scrollHeight + "px";

        }

    });

});