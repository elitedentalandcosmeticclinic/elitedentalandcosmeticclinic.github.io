console.log("Elite Dental & Cosmetic Clinic Website Loaded");

// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Counter
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});

// Gallery Lightbox
function openImage(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}
// ===== BACK TO TOP =====

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// ===== HERO AUTO SLIDER =====

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide>=slides.length){
        currentSlide=0;
    }

    showSlide(currentSlide);

},4000);
// =========================
// CONTACT FORM - EMAILJS
// =========================
console.log("Script Loaded");

const contactForm = document.getElementById("contact-form");

console.log(contactForm);

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_m5xrvdc",
            "template_ll405ec",
            this
        )
        .then(function() {

            alert("✅ Thank you! Your appointment request has been sent successfully.");

            contactForm.reset();

        })
        .catch(function(error) {

            alert("❌ Something went wrong. Please try again.");

            console.log(error);

        });

    });

}
