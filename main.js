const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry.target);
    console.log(entry.isIntersecting);
  });
});

const sections = document.querySelectorAll("section");
for (const section of sections) {
  observer.observe(section);
}
