let list = document.querySelector(".list");
let dot = document.querySelector(".dot");
let corss = document.querySelector(".cross");
let nav = document.querySelector(".nav");
let header = document.querySelector("header");

corss.addEventListener("click", () => {
    corss.classList.toggle("crossx");
    let corssx = document.querySelector(".crossx");
    if (corssx) {
        header.style.backgroundColor = "#292929";
        nav.style.display = "none";
    }
    if (nav.style.display === "none") {
        nav.style.display = "inline";
        header.style.backgroundColor = "#202020";
    } else {
        header.style.backgroundColor = "#292929";
        nav.style.display = "none";
    }
});
list.style.display = "none";

dot.addEventListener("click", () => {
    list.style.transition = "all 2s";
    if (list.style.display === "none") {
        list.style.display = "inline";
    } else {
        list.style.display = "none";
    }
});