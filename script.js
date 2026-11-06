/* ==========================================
   M.S. PAVITHRAN - CYBER SECURITY PORTFOLIO
   JavaScript Animation & Interaction System
========================================== */

// 1. ANIMATED SKILL BARS

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.getAttribute("data-width");

            entry.target.style.width = width;

            skillObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.3
});

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});


// 2. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-title, .about-card, .card, .goal, .skills-container"
);

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// 3. MOUSE MOVEMENT GLOW EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0, 217, 255, 0.13),
                rgba(16, 26, 49, 0.95) 65%
            )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(16, 26, 49, 0.75)";

    });

});


// 4. FLOATING CYBER PARTICLES

const canvas = document.createElement("canvas");

canvas.id = "particleCanvas";

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-1";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    const ratio = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    createParticles();
}

function createParticles() {

    particles = [];

    const count = Math.min(
        70,
        Math.floor(window.innerWidth / 18)
    );

    for (let i = 0; i < count; i++) {

        particles.push({

            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,

            size: Math.random() * 2 + 0.5,

            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5

        });

    }

}

function animateParticles() {

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach(particle => {

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > window.innerWidth) {
            particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > window.innerHeight) {
            particle.speedY *= -1;
        }

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#00e5ff";

        ctx.shadowBlur = 12;
        ctx.shadowColor = "#00e5ff";

        ctx.fill();

    });

    ctx.shadowBlur = 0;

    requestAnimationFrame(animateParticles);
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

animateParticles();


// 5. NAVIGATION ACTIVE EFFECT

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.style.color = "#b9c6df";
        });

        link.style.color = "#00e5ff";

    });

});


// 6. CURRENT YEAR AUTOMATICALLY

const footerYear = document.querySelector("footer p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} <span>M.S. PAVITHRAN</span>`;

}


// 7. CONSOLE WELCOME MESSAGE

console.log(
    "%c M.S. PAVITHRAN ",
    "color:#00e5ff;font-size:25px;font-weight:bold;"
);

console.log(
    "%c BCA - CYBER SECURITY | REVA UNIVERSITY ",
    "color:#8a2be2;font-size:14px;"
);

console.log(
    "%c Welcome to my Cyber Security Portfolio!",
    "color:#00ff99;font-size:14px;"
);