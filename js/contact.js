
document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    if (!contactForm) return;

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = document.getElementById("firstName");
        const email = document.getElementById("email");
        const enquiryType = document.getElementById("enquiryType");
        const message = document.getElementById("message");
        const consent = document.getElementById("contactConsent");

        let isValid = true;

        
        contactForm.querySelectorAll(".form-error").forEach(error => {
            error.remove();
        });

        contactForm.querySelectorAll(".input-error").forEach(input => {
            input.classList.remove("input-error");
        });

        
        const showError = (input, text) => {
            input.classList.add("input-error");

            const error = document.createElement("small");
            error.className = "form-error";
            error.textContent = text;

            input.parentElement.appendChild(error);
            isValid = false;
        };

        
        if (!firstName.value.trim()) {
            showError(firstName, "Please enter your first name.");
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.value.trim()) {
            showError(email, "Please enter your email address.");
        } else if (!emailPattern.test(email.value.trim())) {
            showError(email, "Please enter a valid email address.");
        }

        
        if (!enquiryType.value) {
            showError(enquiryType, "Please select an enquiry type.");
        }

        
        if (!message.value.trim()) {
            showError(message, "Please tell us how we can help.");
        } else if (message.value.trim().length < 10) {
            showError(message, "Please enter at least 10 characters.");
        }

        
        if (!consent.checked) {
            const error = document.createElement("small");
            error.className = "form-error";
            error.textContent = "Please agree to be contacted regarding your enquiry.";

            consent.closest(".form-checkbox").appendChild(error);
            isValid = false;
        }

        
        if (!isValid) {
            const firstError = contactForm.querySelector(".input-error");

            if (firstError) {
                firstError.focus();
            }

            return;
        }

        
        if (formSuccess) {
            formSuccess.classList.remove("show");
        }

        
        const submitButton = contactForm.querySelector(".contact-submit");
        const originalButtonText = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = `
            Sending...
            <i class="fa-solid fa-spinner fa-spin"></i>
        `;

        
        setTimeout(() => {

            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;

            if (formSuccess) {
                formSuccess.classList.add("show");

                formSuccess.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }

            contactForm.reset();

        }, 900);

    });

    
    contactForm.querySelectorAll("input, select, textarea").forEach(field => {

        field.addEventListener("input", () => {
            field.classList.remove("input-error");

            const error = field.parentElement.querySelector(".form-error");

            if (error) {
                error.remove();
            }
        });

        field.addEventListener("change", () => {
            field.classList.remove("input-error");

            const error = field.parentElement.querySelector(".form-error");

            if (error) {
                error.remove();
            }
        });

    });

    
    const consent = document.getElementById("contactConsent");

    if (consent) {
        consent.addEventListener("change", () => {
            const checkboxWrapper = consent.closest(".form-checkbox");

            if (!checkboxWrapper) return;

            const error = checkboxWrapper.querySelector(".form-error");

            if (error) {
                error.remove();
            }
        });
    }

});

