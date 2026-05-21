const words = ["IoT Engineer", "Customer Service"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type(){

  currentWord = words[i];

  if (isDeleting) {
  j--;
  typing.textContent = currentWord.substring(0, j);
  } else {
    j++;
    typing.textContent = currentWord.substring(0, j);
  }

  if(!isDeleting && j === currentWord.length){
    typing.classList.add("hide-cursor");
    setTimeout(() => {
      typing.classList.remove("hide-cursor");
      isDeleting = true;
      type();
    }, 3000); // jeda
      return;
  }

  if(isDeleting && j === 0){
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
const galleryImages = document.querySelectorAll(".gallery-item img");
const header = document.querySelector("header");

galleryImages.forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    header.classList.add("hide-navbar");
  };
});

closeBtn.onclick = () => {
  modal.style.display = "none";

  header.classList.remove("hide-navbar");
};



const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if(pageYOffset >= sectionTop){
        current = section.getAttribute("id");
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if(link.getAttribute("href") === "#" + current){
        link.classList.add("active");
      }

    });

  });

