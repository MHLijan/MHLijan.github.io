const textElement = document.querySelector(".text");

const texts = [
    "Web Developer",
    "Frontend Developer",
    "Web Designer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!textElement) {
        return;
    }

    const currentText = texts[textIndex];

    if (!deleting) {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    } else {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    }

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentText.length) {
        speed = 1500;
        deleting = true;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.addEventListener("click", () => {

        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");

    });

}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

function updateActiveLink() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

        if (menuIcon) {
            menuIcon.classList.remove("bx-x");
        }

    });

});


const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            phone === "" ||
            message === ""
        ) {

            formMessage.textContent = "Please fill in all fields.";
            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent = "Please enter a valid email address.";
            return;

        }

        formMessage.textContent = "Message sent successfully!";

        contactForm.reset();

    });

}


const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");
                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal-hidden");
        revealObserver.observe(element);

    });

}


const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress-bar");

if (skillsSection && progressBars.length) {

    const skillsObserver = new IntersectionObserver(
        entries => {

            if (entries[0].isIntersecting) {

                progressBars.forEach(bar => {

                    const progress = bar.getAttribute("data-progress");

                    bar.style.width = `${progress}%`;

                });

                skillsObserver.unobserve(skillsSection);

            }

        },
        {
            threshold: 0.3
        }
    );

    skillsObserver.observe(skillsSection);

}


const backToTop = document.querySelector("#back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
