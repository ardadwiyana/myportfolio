/* ====== TYPING EFFECT ====== */
const words = ["IoT Engineer", "Embedded System", "Automation"];
let i = 0, j = 0, isDeleting = false;
const typingEl = document.getElementById("typing");

function type() {
  const currentWord = words[i];
  typingEl.textContent = isDeleting
    ? currentWord.substring(0, --j)
    : currentWord.substring(0, ++j);

  if (!isDeleting && j === currentWord.length) {
    typingEl.classList.add("hide-cursor");
    setTimeout(() => {
      typingEl.classList.remove("hide-cursor");
      isDeleting = true;
      type();
    }, 2800);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 55 : 110);
}

type();

/* ====== MODAL ====== */
const modal    = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const header   = document.querySelector("header");

document.querySelectorAll("[data-modal-img]").forEach(el => {
  el.addEventListener("click", () => {
    modalImg.src = el.dataset.modalImg;
    modal.classList.add("visible");
    header.classList.add("hide-navbar");
    document.body.style.overflow = "hidden";
  });
});

document.getElementById("closeBtn").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function closeModal() {
  modal.classList.remove("visible");
  header.classList.remove("hide-navbar");
  document.body.style.overflow = "";
}

/* ====== NAVBAR SCROLL + ACTIVE LINK ====== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);

  let current = "";
  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 130) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}, { passive: true });

/* ====== HAMBURGER MOBILE MENU ====== */
const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
  });
});

/* ====== SCROLL REVEAL ====== */
const revealEls = document.querySelectorAll(".reveal");
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

revealEls.forEach(el => observer.observe(el));

/* ====== EXP GALLERY THUMBNAIL SWITCH ====== */
document.querySelectorAll(".exp-gallery-thumb").forEach(thumb => {
  thumb.addEventListener("click", () => {
    const mainImg     = document.getElementById(thumb.dataset.target);
    const mainOverlay = document.getElementById(thumb.dataset.overlay);
    const newSrc      = thumb.dataset.main;

    // Update gambar utama
    mainImg.src = newSrc;
    mainOverlay.dataset.modalImg = newSrc;

    // Update active state thumbnail
    const siblings = thumb.closest(".exp-gallery-thumbs").querySelectorAll(".exp-gallery-thumb");
    siblings.forEach(s => s.classList.remove("active"));
    thumb.classList.add("active");
  });
});