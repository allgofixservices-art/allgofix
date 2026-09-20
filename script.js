const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.dataset.service;
    const select = document.getElementById("service");
    if (select && service) select.value = service;
  });
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
`Hello ALLGOFIX,

I want to book a home service.

Name: ${name}
Mobile: ${phone}
Service: ${service}
Address: ${address}
Message: ${message || "Not provided"}`;

  window.open("https://wa.me/918758000713?text=" + encodeURIComponent(text), "_blank");
});
