// No arrow for x seconds
let arrow = document.querySelector(".arrow");

setTimeout(() => {
    arrow.style.visibility="visible";
}, 6000);

// Disappear after scroll
window.addEventListener("scroll", () =>{
    if(window.scrollY > 100)
    {
        arrow.style.visibility="hidden";
    }
});