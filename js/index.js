
"use strict";

document.addEventListener("DOMContentLoaded", function () {


    const body = document.body;
    const html = document.documentElement;

    const themeBtn = document.getElementById("theme-toggle");
    const rtlBtn = document.getElementById("rtl-toggle");

    const mobileMenuBtn =
        document.getElementById("mobile-menu-btn");

    const navbarMenu =
        document.querySelector(".navbar-menu");

    const homeDropdown =
        document.querySelector(".menu-item.dropdown");

    const homeToggle =
        document.querySelector(".dropdown-toggle");



    const THEME_KEY = "mobilitycare-theme";

    function applyTheme(theme) {

        const isLight = theme === "light";

        body.classList.toggle("light", isLight);
        body.classList.toggle("dark", !isLight);

        if (themeBtn) {

            themeBtn.setAttribute(
                "aria-pressed",
                String(isLight)
            );

            themeBtn.setAttribute(
                "aria-label",
                isLight
                    ? "Switch to dark mode"
                    : "Switch to light mode"
            );

            themeBtn.setAttribute(
                "title",
                isLight
                    ? "Switch to Dark Mode"
                    : "Switch to Light Mode"
            );
        }
    }


    applyTheme(
        localStorage.getItem(THEME_KEY) || "dark"
    );


    if (themeBtn) {

        themeBtn.addEventListener(
            "click",
            function () {

                const nextTheme =
                    body.classList.contains("light")
                        ? "dark"
                        : "light";

                applyTheme(nextTheme);

                localStorage.setItem(
                    THEME_KEY,
                    nextTheme
                );
            }
        );
    }



    const RTL_KEY = "mobilitycare-rtl";

    function applyRTL(isRTL) {

        html.setAttribute(
            "dir",
            isRTL ? "rtl" : "ltr"
        );

        body.setAttribute(
            "dir",
            isRTL ? "rtl" : "ltr"
        );

        if (rtlBtn) {

            rtlBtn.setAttribute(
                "aria-pressed",
                String(isRTL)
            );

            rtlBtn.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to left-to-right"
                    : "Switch to right-to-left"
            );

            rtlBtn.setAttribute(
                "title",
                isRTL
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );
        }
    }


    applyRTL(
        localStorage.getItem(RTL_KEY) === "true"
    );


    if (rtlBtn) {

        rtlBtn.addEventListener(
            "click",
            function () {

                const nextRTL =
                    html.getAttribute("dir") !== "rtl";

                applyRTL(nextRTL);

                localStorage.setItem(
                    RTL_KEY,
                    String(nextRTL)
                );
            }
        );
    }



    function openMobileMenu() {

        if (!mobileMenuBtn || !navbarMenu) {
            return;
        }

        navbarMenu.classList.add("mobile-open");

        mobileMenuBtn.classList.add("active");

        mobileMenuBtn.setAttribute(
            "aria-expanded",
            "true"
        );

        mobileMenuBtn.setAttribute(
            "aria-label",
            "Close Menu"
        );

        mobileMenuBtn.setAttribute(
            "title",
            "Close Menu"
        );
    }


    function closeMobileMenu() {

        if (!mobileMenuBtn || !navbarMenu) {
            return;
        }

        navbarMenu.classList.remove("mobile-open");

        mobileMenuBtn.classList.remove("active");

        mobileMenuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenuBtn.setAttribute(
            "aria-label",
            "Toggle Menu"
        );

        mobileMenuBtn.setAttribute(
            "title",
            "Open Menu"
        );

        if (homeDropdown) {

            homeDropdown.classList.remove(
                "mobile-active"
            );
        }

        if (homeToggle) {

            homeToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    }



    if (mobileMenuBtn && navbarMenu) {

        mobileMenuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenuBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                const isOpen =
                    navbarMenu.classList.contains(
                        "mobile-open"
                    );

                if (isOpen) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            }
        );
    }



    if (homeToggle && homeDropdown) {

        homeToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        homeToggle.addEventListener(
            "click",
            function (event) {

                

                if (window.innerWidth < 1024) {

                    event.preventDefault();
                    event.stopPropagation();

                    const isOpen =
                        homeDropdown.classList.contains(
                            "mobile-active"
                        );

                    homeDropdown.classList.toggle(
                        "mobile-active",
                        !isOpen
                    );

                    homeToggle.setAttribute(
                        "aria-expanded",
                        String(!isOpen)
                    );
                }
            }
        );
    }



    if (navbarMenu) {

        navbarMenu
            .querySelectorAll(
                ".menu-link:not(.dropdown-toggle), .dropdown-link"
            )
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (window.innerWidth < 1024) {

                            setTimeout(
                                closeMobileMenu,
                                100
                            );
                        }
                    }
                );
            });
    }



    document.addEventListener(
        "click",
        function (event) {

            if (!navbarMenu || !mobileMenuBtn) {
                return;
            }

            if (
                !navbarMenu.classList.contains(
                    "mobile-open"
                )
            ) {
                return;
            }

            if (
                navbarMenu.contains(event.target) ||
                mobileMenuBtn.contains(event.target)
            ) {
                return;
            }

            closeMobileMenu();
        }
    );



    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeMobileMenu();
            }
        }
    );



    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth >= 1024) {

                closeMobileMenu();
            }
        }
    );



    function normalizePage(path) {

        if (!path) {
            return "index";
        }

        let page =
            path
                .split("?")[0]
                .split("#")[0]
                .split("/")
                .pop();

        page =
            page.replace(
                /\.html$/i,
                ""
            );

        return page.toLowerCase() || "index";
    }


    const currentPage =
        normalizePage(
            window.location.pathname
        );


    const navLinks =
        document.querySelectorAll(
            ".menu-link, .dropdown-link"
        );


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (!href) {
            return;
        }

        const linkPage =
            normalizePage(href);

        if (linkPage === currentPage) {

            link.classList.add("active");
        }
    });



    if (
        currentPage === "index" ||
        currentPage === "home1"
    ) {

        if (homeToggle) {

            homeToggle.classList.add(
                "active"
            );
        }
    }



    const revealElements =
        document.querySelectorAll(".reveal");


    if (
        "IntersectionObserver" in window &&
        revealElements.length
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "in-view"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );
                },
                {
                    threshold: 0.15,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );
            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "in-view"
                );
            }
        );
    }

});


/* =========================================================
   HOME DROPDOWN — ACTIVE PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const homeParent = document.querySelector(
        "#home-menu-link"
    );

    const homeDropdownLinks = document.querySelectorAll(
        ".dropdown-menu .dropdown-link"
    );

    const isHomePage =
        currentPage === "index.html" ||
        currentPage === "home2.html" ||
        currentPage === "";

    /* Make main Home menu active */
    if (isHomePage && homeParent) {
        homeParent.classList.add("active");
        document.documentElement.classList.add("home-page");
    }

    /* Make correct dropdown item active */
    homeDropdownLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (
            (currentPage === "index.html" && linkPage === "index.html") ||
            (currentPage === "home2.html" && linkPage === "home2.html")
        ) {
            link.classList.add("active");
        }

    });

});