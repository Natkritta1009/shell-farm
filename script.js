const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.textContent = nav.classList.contains("open") ? "×" : "☰";
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    if (menuButton) menuButton.textContent = "☰";
  });
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(element => observer.observe(element));

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    alert("ขอบคุณสำหรับข้อความ เราจะติดต่อกลับโดยเร็วที่สุด");
    form.reset();
  });
}
