

document.addEventListener("DOMContentLoaded", () => {


    const sections = document.querySelectorAll(
        ".insurance-page section"
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
                rootMargin: "0px 0px -60px 0px"
            }
        );

        sections.forEach(section => {
            section.classList.add("insurance-reveal");
            sectionObserver.observe(section);
        });

    } else {

        sections.forEach(section => {
            section.classList.add("is-visible");
        });

    }



    const optionCards = document.querySelectorAll(
        ".insurance-option-card"
    );

    if ("IntersectionObserver" in window) {

        const cardObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry, index) => {

                    if (entry.isIntersecting) {

                        setTimeout(() => {
                            entry.target.classList.add("is-visible");
                        }, index * 100);

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        optionCards.forEach(card => {
            card.classList.add("insurance-card-reveal");
            cardObserver.observe(card);
        });

    } else {

        optionCards.forEach(card => {
            card.classList.add("is-visible");
        });

    }



    const processItems = document.querySelectorAll(
        ".insurance-process-item"
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
                threshold: 0.15
            }
        );

        processItems.forEach(item => {
            item.classList.add("insurance-card-reveal");
            processObserver.observe(item);
        });

    }



    const faqItems = document.querySelectorAll(
        ".insurance-faq-item"
    );

    faqItems.forEach(item => {

        const question = item.querySelector(
            ".insurance-faq-question"
        );

        const answer = item.querySelector(
            ".insurance-faq-answer"
        );

        const icon = item.querySelector(
            ".insurance-faq-question i"
        );

        if (!question || !answer) return;

        question.setAttribute("aria-expanded", "false");

        answer.style.maxHeight = "0";
        answer.style.overflow = "hidden";
        answer.style.transition = "max-height .3s ease";

        question.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            
            faqItems.forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                    const otherQuestion =
                        otherItem.querySelector(
                            ".insurance-faq-question"
                        );

                    const otherAnswer =
                        otherItem.querySelector(
                            ".insurance-faq-answer"
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
                    icon.style.transform = "rotate(180deg)";
                }

            } else {

                item.classList.remove("active");

                question.setAttribute(
                    "aria-expanded",
                    "false"
                );

                answer.style.maxHeight = "0";

                if (icon) {
                    icon.style.transform = "rotate(0deg)";
                }

            }

        });

    });



    document.querySelectorAll(
        '.insurance-page a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (!target) return;

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
                ".insurance-reveal, .insurance-card-reveal"
            )
            .forEach(element => {
                element.classList.add("is-visible");
            });

    }

});