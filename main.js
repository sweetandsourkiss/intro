// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     console.log(entry.target);
//     console.log(entry.isIntersecting);
//   });
// });

// const sections = document.querySelectorAll("section");
// for (const section of sections) {
//   observer.observe(section);
// }

const sectionHeight = window.innerHeight * 4;
const introDOM = document.querySelector("section#intro");
const firstDOM = document.querySelector("section#first");
const secondDOM = document.querySelector("section#second");
const thirdDOM = document.querySelector("section#third");

const modifyStyle = (target, ratio) => {
  if (ratio < 0.05) {
    target.style.opacity = 0;
  } else if (ratio < 0.25) {
    target.style.opacity = ratio * 4;
  } else if (ratio < 0.8) {
    target.style.opacity = 1;
  } else if (ratio < 0.95) {
    target.style.opacity = 1 - (ratio - 0.8) / 0.15;
  } else {
    target.style.opacity = 0;
  }
};

document.addEventListener("scroll", (e) => {
  const nowScrollHeight = window.scrollY;
  if (nowScrollHeight < sectionHeight) {
    const _ratio = nowScrollHeight / sectionHeight;
    modifyStyle(introDOM, _ratio);
  } else if (nowScrollHeight < sectionHeight * 2) {
    const _ratio = (nowScrollHeight - sectionHeight) / sectionHeight;
    modifyStyle(firstDOM, _ratio);
  } else if (nowScrollHeight < sectionHeight * 3) {
    const _ratio = (nowScrollHeight - sectionHeight * 2) / sectionHeight;
    modifyStyle(secondDOM, _ratio);
  } else {
    const _ratio = (nowScrollHeight - sectionHeight * 3) / sectionHeight;
    modifyStyle(thirdDOM, _ratio);
  }
});
