$(".nav-open").click(function () {
  $(".side-bar").animate({ marginLeft: 0 });
});

$(".nav-close").click(function () {
  $(".side-bar").animate({ marginLeft: "-100%" });
});

//auto scroll active class page
const sideBar = document.querySelector(".side-bar");
const activePage = document.querySelector(".active");

window.addEventListener("load", function () {
  if (
    sideBar.getBoundingClientRect().height <
    activePage.getBoundingClientRect().top
  )
    activePage.scrollIntoView({ behavior: "smooth" });
});
