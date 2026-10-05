

document.addEventListener("DOMContentLoaded", () => {


    const products = {

        wheelchair: {
            category: "WHEELCHAIRS",
            title: "Manual Wheelchairs",
            heroText:
                "Comfortable and practical wheelchair solutions designed to support everyday mobility, independence, and confidence.",
            image: "Images/manual-wheelchair.jpg",
            price: "₹8,500",
            intro:
                "Manual wheelchairs provide dependable everyday mobility support for users who need a practical and comfortable way to move around home, work, and community environments.",

            description:
                "Our manual wheelchair options focus on comfort, stability, ease of handling, and practical everyday use. The right configuration depends on the user's mobility needs, posture, environment, and level of assistance.",

            features: [
                {
                    icon: "fa-solid fa-feather",
                    title: "Comfortable Design",
                    text: "Supportive seating designed for comfortable everyday use."
                },
                {
                    icon: "fa-solid fa-wheelchair",
                    title: "Easy Mobility",
                    text: "Practical wheels and controls for everyday movement."
                },
                {
                    icon: "fa-solid fa-shield-heart",
                    title: "Stable Support",
                    text: "Designed to provide dependable support during use."
                },
                {
                    icon: "fa-solid fa-arrows-left-right",
                    title: "Practical Handling",
                    text: "Suitable for everyday indoor and outdoor mobility."
                }
            ],

            details: [
                "Suitable for everyday mobility and assisted movement.",
                "Available in different sizes and configurations.",
                "Comfort and positioning should be considered before purchase.",
                "Professional fitting can help improve everyday usability."
            ],

            specifications: [
                ["Product Type", "Manual Wheelchair"],
                ["Use", "Indoor & Outdoor"],
                ["Frame", "Lightweight / Durable"],
                ["Seating", "Supportive Cushion"],
                ["Wheels", "Manual Push Wheels"],
                ["Adjustment", "Multiple Options"]
            ],

            suitableTitle:
                "A Practical Choice for Everyday Mobility",

            suitableText:
                "Manual wheelchairs can be suitable for people who need reliable mobility support for daily activities, appointments, shopping, travel, or community access.",

            suitable: [
                "People requiring regular mobility assistance.",
                "Users who need supported movement indoors or outdoors.",
                "Families looking for a practical everyday mobility solution.",
                "Users who benefit from professional fitting guidance."
            ]
        },


        walker: {
            category: "WALKERS & ROLLATORS",
            title: "Walkers & Rollators",
            heroText:
                "Stable and practical walking aids designed to support balance, confidence, and everyday movement.",
            image: "Images/rollator-walker.jpg",
            price: "₹4,500",
            intro:
                "Walkers and rollators provide additional support for people who need help maintaining balance and confidence while walking.",

            description:
                "Mobility walkers are available in different configurations depending on the user's stability, strength, environment, and daily routine. A suitable height and comfortable hand position are important for safe use.",

            features: [
                {
                    icon: "fa-solid fa-person-walking",
                    title: "Walking Support",
                    text: "Provides additional support during everyday walking."
                },
                {
                    icon: "fa-solid fa-grip",
                    title: "Secure Grip",
                    text: "Comfortable handles help provide controlled movement."
                },
                {
                    icon: "fa-solid fa-arrows-up-down",
                    title: "Adjustable Height",
                    text: "Height options can help achieve a comfortable position."
                },
                {
                    icon: "fa-solid fa-road",
                    title: "Everyday Use",
                    text: "Practical for suitable indoor and outdoor environments."
                }
            ],

            details: [
                "Different designs are available for different mobility needs.",
                "Height should be adjusted to suit the user.",
                "Wheels and brakes should be checked regularly.",
                "Professional guidance can help with correct positioning."
            ],

            specifications: [
                ["Product Type", "Walker / Rollator"],
                ["Use", "Indoor & Outdoor"],
                ["Frame", "Lightweight Metal"],
                ["Handles", "Ergonomic Grip"],
                ["Height", "Adjustable"],
                ["Storage", "Available on Selected Models"]
            ],

            suitableTitle:
                "Support for Confident Walking",

            suitableText:
                "Walkers and rollators may be useful for people who want additional stability and support while maintaining an active daily routine.",

            suitable: [
                "People who need additional walking stability.",
                "Users recovering from mobility limitations.",
                "People who want supported movement around the home.",
                "Users who benefit from adjustable walking support."
            ]
        },


        bathroom: {
            category: "BATHROOM & DAILY LIVING",
            title: "Bathroom & Daily Living Support",
            heroText:
                "Practical accessibility products designed to make everyday personal care routines safer and more comfortable.",
            image: "Images/Daily living support equipment.jpg",
            price: "₹2,500",
            intro:
                "Bathroom and daily living aids can provide additional stability and support during everyday personal care activities.",

            description:
                "Bathroom support products can help reduce unnecessary strain and provide additional stability in environments where wet surfaces and limited space can make movement more challenging.",

            features: [
                {
                    icon: "fa-solid fa-person-circle-check",
                    title: "Added Stability",
                    text: "Designed to provide additional support during daily routines."
                },
                {
                    icon: "fa-solid fa-shower",
                    title: "Bathroom Support",
                    text: "Practical solutions for suitable bathroom environments."
                },
                {
                    icon: "fa-solid fa-chair",
                    title: "Comfortable Seating",
                    text: "Selected products provide supported seating where needed."
                },
                {
                    icon: "fa-solid fa-hand-holding",
                    title: "Easy Support",
                    text: "Simple designs can make everyday activities easier."
                }
            ],

            details: [
                "Products include bathroom seating and support solutions.",
                "Correct installation is important for fixed support products.",
                "Surfaces and fittings should be checked regularly.",
                "Product selection should consider the user's environment."
            ],

            specifications: [
                ["Product Type", "Bathroom Support"],
                ["Use", "Home / Bathroom"],
                ["Material", "Durable Materials"],
                ["Support", "Stability Assistance"],
                ["Installation", "Product Dependent"],
                ["Cleaning", "Easy-Care Surfaces"]
            ],

            suitableTitle:
                "Designed for Safer Daily Routines",

            suitableText:
                "Bathroom and daily living products can provide useful support for people who need additional stability during personal care and everyday activities.",

            suitable: [
                "People who need additional bathroom stability.",
                "Users who experience difficulty standing for long periods.",
                "Families improving home accessibility.",
                "People looking for practical daily living support."
            ]
        },


        scooter: {
            category: "MOBILITY SCOOTERS",
            title: "Mobility Scooters",
            heroText:
                "Comfort-focused mobility scooters designed to support independent movement and everyday community access.",
            image: "Images/Mobility scooters.jpg",
            price: "₹45,000",
            intro:
                "Mobility scooters can provide powered mobility support for suitable users who want greater independence when travelling through appropriate environments.",

            description:
                "Mobility scooters come in different sizes and configurations. The appropriate model depends on the user's mobility requirements, environment, travel distance, storage needs, and local accessibility conditions.",

            features: [
                {
                    icon: "fa-solid fa-battery-full",
                    title: "Powered Mobility",
                    text: "Electric drive provides supported movement without manual pushing."
                },
                {
                    icon: "fa-solid fa-chair",
                    title: "Comfort Seating",
                    text: "Supportive seating designed for comfortable journeys."
                },
                {
                    icon: "fa-solid fa-gauge-high",
                    title: "Easy Controls",
                    text: "Simple controls support practical everyday operation."
                },
                {
                    icon: "fa-solid fa-road",
                    title: "Everyday Travel",
                    text: "Selected models are designed for suitable travel environments."
                }
            ],

            details: [
                "Different scooter sizes are available for different environments.",
                "Battery condition and charging requirements should be considered.",
                "The user should be comfortable operating the controls.",
                "A fitting and suitability assessment is recommended."
            ],

            specifications: [
                ["Product Type", "Electric Mobility Scooter"],
                ["Power", "Rechargeable Battery"],
                ["Use", "Indoor / Outdoor"],
                ["Controls", "Handlebar Controls"],
                ["Seating", "Supportive Adjustable Seat"],
                ["Charging", "Rechargeable"]
            ],

            suitableTitle:
                "Freedom for Everyday Travel",

            suitableText:
                "Mobility scooters may be suitable for people who need powered mobility support for appropriate everyday journeys and community activities.",

            suitable: [
                "People who need powered mobility assistance.",
                "Users who want support for longer everyday journeys.",
                "People who can safely operate scooter controls.",
                "Users who benefit from a professional suitability assessment."
            ]
        },
              
        ramp: {
            category: "ACCESSIBILITY",
            title: "Portable Accessibility Ramp",
            heroText:
                "A practical access solution designed to help improve movement between different levels and entrances.",

            image: "Images/Accessibility Ramps.jpg",
            price: "₹12,500",

            intro:
                "Portable accessibility ramps provide a practical way to improve access across suitable steps, thresholds, entrances, and small changes in level.",

            description:
                "Accessibility ramps are available in different lengths, widths, and designs. The appropriate ramp should be selected according to the height of the level change, available space, surface conditions, and required weight capacity.",

            features: [
                {
                    icon: "fa-solid fa-road",
                    title: "Improved Access",
                    text: "Helps create a smoother route across suitable changes in level."
                },
                {
                    icon: "fa-solid fa-ruler-horizontal",
                    title: "Practical Design",
                    text: "Designed for suitable entrances, thresholds, and access points."
                },
                {
                    icon: "fa-solid fa-shield-halved",
                    title: "Stable Support",
                    text: "A stable surface can help support safer movement when correctly positioned."
                },
                {
                    icon: "fa-solid fa-arrows-up-down",
                    title: "Flexible Use",
                    text: "Suitable for selected temporary or portable accessibility needs."
                }
            ],

            details: [
                "Suitable for appropriate steps, thresholds, and entrances.",
                "Ramp length should match the height of the level change.",
                "The ramp must be placed on a stable and suitable surface.",
                "Weight capacity should be checked before use."
            ],

            specifications: [
                ["Product Type", "Portable Accessibility Ramp"],
                ["Use", "Indoor & Outdoor"],
                ["Material", "Durable Aluminium"],
                ["Surface", "Anti-Slip"],
                ["Design", "Portable / Folding"],
                ["Application", "Steps & Thresholds"]
            ],

            suitableTitle:
                "Making Everyday Access Easier",

            suitableText:
                "Portable accessibility ramps can be useful for improving access across suitable entrances, thresholds, and small changes in level.",

            suitable: [
                "People using wheelchairs or mobility equipment.",
                "Users who need easier access over suitable thresholds.",
                "Families improving home accessibility.",
                "Businesses looking for practical accessibility solutions."
            ]
        },



        cane: {
            category: "WALKING AIDS",
            title: "Adjustable Walking Cane",
            heroText:
                "Lightweight walking support with an adjustable design for everyday mobility and stability.",

            image: "Images/Adjustable walking cane.jpg",
            price: "₹1,850",

            intro:
                "Adjustable walking canes provide lightweight support for people who need additional balance and stability during everyday movement.",

            description:
                "A walking cane should be adjusted to a suitable height so the user can maintain a comfortable and controlled position while walking. Grip comfort, stability, and tip condition are important considerations.",

            features: [
                {
                    icon: "fa-solid fa-person-walking",
                    title: "Walking Support",
                    text: "Provides additional balance support during everyday movement."
                },
                {
                    icon: "fa-solid fa-arrows-up-down",
                    title: "Adjustable Height",
                    text: "Height adjustment helps provide a more comfortable walking position."
                },
                {
                    icon: "fa-solid fa-hand",
                    title: "Comfortable Grip",
                    text: "Designed with a practical handle for controlled everyday use."
                },
                {
                    icon: "fa-solid fa-shield-halved",
                    title: "Stable Base",
                    text: "A suitable rubber tip helps provide dependable contact with the floor."
                }
            ],

            details: [
                "Height should be adjusted to suit the user's comfortable standing position.",
                "The handle should provide a secure and comfortable grip.",
                "The rubber tip should be checked regularly for wear.",
                "Professional guidance can help determine suitable cane height."
            ],

            specifications: [
                ["Product Type", "Adjustable Walking Cane"],
                ["Use", "Indoor & Outdoor"],
                ["Frame", "Lightweight Metal"],
                ["Handle", "Ergonomic Grip"],
                ["Height", "Adjustable"],
                ["Base", "Anti-Slip Rubber Tip"]
            ],

            suitableTitle:
                "Lightweight Support for Everyday Walking",

            suitableText:
                "An adjustable walking cane can provide useful balance and stability support for suitable users during everyday activities.",

            suitable: [
                "People who need additional walking stability.",
                "Users looking for lightweight mobility support.",
                "People who need adjustable walking assistance.",
                "Users who can safely use a single-point walking aid."
            ]
        },



        "transfer-chair": {
            category: "PATIENT CARE",
            title: "Patient Transfer Chair",
            heroText:
                "Designed to provide practical support during transfers and assisted movement at home or in care environments.",

            image: "Images/Patient transfer chair.jpg",
            price: "₹14,800",

            intro:
                "Patient transfer chairs are designed to support assisted movement and short-distance transfers in suitable home and care environments.",

            description:
                "Transfer chairs can help caregivers move users between suitable locations while providing supported seating. Product suitability depends on the user's mobility, transfer ability, environment, and required level of assistance.",

            features: [
                {
                    icon: "fa-solid fa-wheelchair",
                    title: "Supported Transfers",
                    text: "Designed to assist with suitable short-distance transfers."
                },
                {
                    icon: "fa-solid fa-chair",
                    title: "Supportive Seating",
                    text: "Provides a stable and comfortable seated position during movement."
                },
                {
                    icon: "fa-solid fa-lock",
                    title: "Locking Wheels",
                    text: "Wheel locks can help provide stability during suitable transfer procedures."
                },
                {
                    icon: "fa-solid fa-user-nurse",
                    title: "Care Support",
                    text: "Practical for suitable assisted movement in care environments."
                }
            ],

            details: [
                "Suitable for assisted transfers and short-distance movement.",
                "Wheel locks should be engaged when appropriate during transfers.",
                "The user's weight and mobility ability should be considered.",
                "Caregiver guidance is recommended for safe transfer techniques."
            ],

            specifications: [
                ["Product Type", "Patient Transfer Chair"],
                ["Use", "Home / Care Environment"],
                ["Frame", "Durable Metal"],
                ["Seating", "Supportive Seat"],
                ["Wheels", "Locking Wheels"],
                ["Application", "Assisted Transfers"]
            ],

            suitableTitle:
                "Practical Support for Assisted Movement",

            suitableText:
                "A patient transfer chair may be useful when additional support is needed for suitable short-distance transfers and assisted movement.",

            suitable: [
                "People requiring assisted transfers.",
                "Users with limited independent mobility.",
                "Families supporting mobility at home.",
                "Care environments requiring practical transfer support."
            ]
        },



        "walking-frame": {
            category: "WALKING SUPPORT",
            title: "Standard Walking Frame",
            heroText:
                "Simple and stable walking support for everyday indoor movement and recovery.",

            image: "Images/Standard walking frame.jpg",
            price: "₹3,900",

            intro:
                "Standard walking frames provide stable support for people who need additional assistance while walking or recovering from mobility limitations.",

            description:
                "A standard walking frame provides a broad support base and can help suitable users maintain stability during everyday indoor movement. Height adjustment and correct positioning are important for comfortable use.",

            features: [
                {
                    icon: "fa-solid fa-person-walking",
                    title: "Stable Walking Support",
                    text: "Provides a broad support base for controlled everyday movement."
                },
                {
                    icon: "fa-solid fa-arrows-up-down",
                    title: "Adjustable Height",
                    text: "Adjustable legs help accommodate different user heights."
                },
                {
                    icon: "fa-solid fa-feather",
                    title: "Lightweight Design",
                    text: "Practical construction makes the frame easier to handle."
                },
                {
                    icon: "fa-solid fa-house",
                    title: "Home Mobility",
                    text: "Suitable for appropriate indoor movement and daily routines."
                }
            ],

            details: [
                "Designed primarily for suitable indoor walking support.",
                "Height should be adjusted to the user's needs.",
                "Rubber tips should be checked regularly for wear.",
                "Professional guidance can help ensure correct positioning."
            ],

            specifications: [
                ["Product Type", "Standard Walking Frame"],
                ["Use", "Indoor Mobility"],
                ["Frame", "Lightweight Metal"],
                ["Handles", "Comfort Grip"],
                ["Height", "Adjustable"],
                ["Base", "Non-Slip Rubber Tips"]
            ],

            suitableTitle:
                "Simple Support for Everyday Movement",

            suitableText:
                "A standard walking frame can provide dependable support for suitable users who need additional stability during indoor walking and recovery.",

            suitable: [
                "People who need additional walking stability.",
                "Users recovering from mobility limitations.",
                "People who need supported indoor movement.",
                "Users who benefit from a stable walking aid."
            ]
        }

    };



    const params = new URLSearchParams(window.location.search);

    let productKey = params.get("product");

    if (!productKey || !products[productKey]) {
        productKey = "wheelchair";
    }

    const product = products[productKey];



    const setText = (id, value) => {

        const element = document.getElementById(id);

        if (element && value) {
            element.textContent = value;
        }

    };


    const setImage = (id, src, alt) => {

        const element = document.getElementById(id);

        if (!element) return;

        element.src = src;

        if (alt) {
            element.alt = alt;
        }

    };



    setText("productCategory", product.category);
    setText("productHeroTitle", product.title);
    setText("productHeroText", product.heroText);

    setText("productEyebrow", product.category);
    setText("productTitle", product.title);
    setText("productIntro", product.intro);
    setText("productPrice", product.price);

    setText("productDescription", product.description);

    setText("suitableTitle", product.suitableTitle);
    setText("suitableText", product.suitableText);

    setImage(
        "productHeroImage",
        product.image,
        product.title
    );

    setImage(
        "productMainImage",
        product.image,
        product.title
    );

    setImage(
        "productSuitableImage",
        product.image,
        product.title
    );



    const featuresContainer =
        document.getElementById("productFeatures");

    if (featuresContainer) {

        featuresContainer.innerHTML = "";

        product.features.forEach(feature => {

            const card = document.createElement("article");

            card.className = "product-feature-card";

            card.innerHTML = `
                <div class="product-feature-icon">
                    <i class="${feature.icon}"></i>
                </div>

                <h3>${feature.title}</h3>

                <p>${feature.text}</p>
            `;

            featuresContainer.appendChild(card);

        });

    }



    const detailsContainer =
        document.getElementById("productDetailsList");

    if (detailsContainer) {

        detailsContainer.innerHTML = "";

        product.details.forEach(detail => {

            const item = document.createElement("li");

            item.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <span>${detail}</span>
            `;

            detailsContainer.appendChild(item);

        });

    }



    const specificationsContainer =
        document.getElementById("productSpecifications");

    if (specificationsContainer) {

        specificationsContainer.innerHTML = "";

        product.specifications.forEach(specification => {

            const item = document.createElement("div");

            item.className = "specification-item";

            item.innerHTML = `
                <span class="specification-label">
                    ${specification[0]}
                </span>

                <span class="specification-value">
                    ${specification[1]}
                </span>
            `;

            specificationsContainer.appendChild(item);

        });

    }



    const suitableContainer =
        document.getElementById("suitableList");

    if (suitableContainer) {

        suitableContainer.innerHTML = "";

        product.suitable.forEach(itemText => {

            const item = document.createElement("li");

            item.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <span>${itemText}</span>
            `;

            suitableContainer.appendChild(item);

        });

    }



    document.title =
        `MobilityCare | ${product.title}`;



    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

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



    document.querySelectorAll(
        ".product-detail-hero-bg img, " +
        ".product-image-frame img, " +
        ".product-suitable-image img"
    ).forEach(image => {

        image.addEventListener("load", () => {
            image.classList.add("loaded");
        });

        image.addEventListener("error", () => {
            image.classList.add("image-error");
        });

        if (image.complete) {
            image.classList.add("loaded");
        }

    });



    const revealElements = document.querySelectorAll(
        ".product-feature-card, " +
        ".care-card, " +
        ".product-specifications-card, " +
        ".product-suitable-grid, " +
        ".product-overview-grid"
    );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal-item");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("is-visible");
        });

    }



    document.querySelectorAll(
        ".product-details-page .btn"
    ).forEach(button => {

        button.addEventListener("click", () => {

            button.classList.add("clicked");

            setTimeout(() => {
                button.classList.remove("clicked");
            }, 350);

        });

    });

});