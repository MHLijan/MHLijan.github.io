// ==========================================
// TYPING ANIMATION
// ==========================================

const textElement = document.querySelector(".text");

const texts = [
    "Web Developer",
    "Frontend Developer",
    "Web Designer",
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        textElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

    } else {

        textElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

    }


    let speed = deleting ? 60 : 100;


    // Word completely typed

    if (!deleting && charIndex === currentText.length) {

        speed = 1500;

        deleting = true;

    }


    // Word completely deleted

    if (deleting && charIndex === 0) {

        deleting = false;

        textIndex++;

        if (textIndex === texts.length) {
            textIndex = 0;
        }

        speed = 500;
    }


    setTimeout(typeEffect, speed);
}


typeEffect();



// ==========================================
// NAVBAR
// ==========================================

const menuIcon = document.querySelector("#menu-icon");

const navbar = document.querySelector(".navbar");


// Mobile menu open / close

menuIcon.addEventListener("click", () => {

    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle("active");

});



// ==========================================
// NAVBAR ACTIVE LINK
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



// ==========================================
// CLOSE MOBILE MENU AFTER CLICK
// ==========================================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");

    });

});



// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
    document.querySelector("#contact-form");

const formMessage =
    document.querySelector("#form-message");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.querySelector("#name").value.trim();

    const email =
        document.querySelector("#email").value.trim();

    const subject =
        document.querySelector("#subject").value.trim();

    const phone =
        document.querySelector("#phone").value.trim();

    const message =
        document.querySelector("#message").value.trim();


    // Check empty fields

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        phone === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    // Basic email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        return;

    }


    // Success

    formMessage.textContent =
        "Message sent successfully!";


    // Clear form

    contactForm.reset();

});



// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".about, .skill-box, .portfolio-box, .contact"
    );


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all 0.8s ease";

    observer.observe(element);

});

// ==========================================
// SKILLS PROGRESS ANIMATION
// ==========================================

const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress-bar");

const skillsObserver = new IntersectionObserver(
    (entries) => {

        if (entries[0].isIntersecting) {

            progressBars.forEach(bar => {

                const progress =
                    bar.getAttribute("data-progress");

                bar.style.width = progress + "%";

            });

            skillsObserver.unobserve(skillsSection);
        }

    },
    {
        threshold: 0.3
    }
);

skillsObserver.observe(skillsSection);

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const backToTop = document.querySelector("#back-to-top");

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

