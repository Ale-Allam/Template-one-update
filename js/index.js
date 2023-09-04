let burger = document.querySelector(".fa-bars");
burger.onclick = () => {
  document.querySelector(".header .links").classList.toggle("show")
}
window.onscroll = () => {
  if (window.innerHeight > 0) {
    document.querySelector(".header .links").classList.remove("show")
  }
}
// observe element
let observer = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("show-observe");
    } else {
      item.target.classList.remove("show-observe");
    }
    if(item.isIntersecting) observer.unobserve(item.target)
  });
},{
  threshold: .7
});

let hiddenElements = document.querySelectorAll(".hidden-observe");
hiddenElements.forEach((el) => observer.observe(el));
// footer-copy-right
const d = new Date();
let copyRight = document.querySelector("#copy-right").innerText=`${d.getFullYear()}`;