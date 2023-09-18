const internLinks = document.querySelectorAll('.header-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const itemHref = event.currentTarget.getAttribute("href");
  const itemSection = document.querySelector(itemHref);
  const top = itemSection.offsetTop;

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
}

internLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
