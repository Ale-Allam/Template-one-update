let burger = document.querySelector(".fa-bars");
console.log(burger)
burger.onclick = () => {
  document.querySelector(".header .links").classList.toggle("show")
  console.log(document.querySelector(".links"))
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
console.log(hiddenElements)
// footer-copy-right
const d = new Date();
let copyRight = document.querySelector("#copy-right").innerText=`${d.getFullYear()}`;