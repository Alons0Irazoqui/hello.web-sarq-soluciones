const body = document.body;
const preloader = document.getElementById("preloader");
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");
const typewriter = document.getElementById("typewriter");
const contactForm = document.getElementById("contactForm");
const canvas = document.getElementById("particleLayer");
const ctx = canvas.getContext("2d");

body.classList.add("is-loading");

const hidePreloader = () => {
  preloader.classList.add("is-hidden");
  body.classList.remove("is-loading");
};

window.setTimeout(hidePreloader, 1900);

const headerState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

headerState();
window.addEventListener("scroll", headerState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const phrases = ["soluciones", "espacios", "proyectos"];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const runTypewriter = () => {
  const phrase = phrases[phraseIndex];
  typewriter.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex += 1;
    window.setTimeout(runTypewriter, 72);
    return;
  }

  if (!deleting && charIndex === phrase.length) {
    deleting = true;
    window.setTimeout(runTypewriter, 1350);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    window.setTimeout(runTypewriter, 34);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  window.setTimeout(runTypewriter, 250);
};

runTypewriter();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const counters = document.querySelectorAll("[data-count]");
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      const finalValue = Number(target.dataset.count);
      const duration = 1300;
      const start = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        target.textContent = Math.round(finalValue * eased).toLocaleString("es-MX");
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      countObserver.unobserve(target);
    });
  },
  { threshold: 0.45 }
);

counters.forEach((counter) => countObserver.observe(counter));

window.addEventListener(
  "scroll",
  () => {
    document.querySelectorAll("[data-parallax]").forEach((section) => {
      const rect = section.getBoundingClientRect();
      const offset = rect.top * -0.045;
      section.style.setProperty("--parallax", `${offset}px`);
    });
  },
  { passive: true }
);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const nombre = formData.get("nombre");
  const servicio = formData.get("servicio");
  const mensaje = formData.get("mensaje");
  const text = `Hola SARQ Soluciones, soy ${nombre}. Me interesa: ${servicio}. ${mensaje}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

let width = 0;
let height = 0;
let particles = [];

const resizeCanvas = () => {
  width = canvas.width = window.innerWidth * window.devicePixelRatio;
  height = canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  particles = Array.from({ length: Math.min(90, Math.floor(window.innerWidth / 16)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.28 * window.devicePixelRatio,
    vy: (Math.random() - 0.5) * 0.28 * window.devicePixelRatio,
    radius: (Math.random() * 1.8 + 0.7) * window.devicePixelRatio,
  }));
};

const drawParticles = () => {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(104, 133, 142, 0.58)";
  ctx.strokeStyle = "rgba(130, 101, 71, 0.18)";

  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();

    for (let next = index + 1; next < particles.length; next += 1) {
      const other = particles[next];
      const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
      if (distance < 120 * window.devicePixelRatio) {
        ctx.globalAlpha = 1 - distance / (120 * window.devicePixelRatio);
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  });

  requestAnimationFrame(drawParticles);
};

resizeCanvas();
drawParticles();
window.addEventListener("resize", resizeCanvas);
