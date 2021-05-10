let arrow = document.querySelector(".arrow");

// If still on landing page after 5 seconds
setTimeout(() =>
        {
            if(window.pageYOffset == 0)
            {
            arrow.style.visibility = "visible";
            }
        }, 5000);

// On scroll, force hidden
window.addEventListener("scroll", () => 
{
    if (window.pageYOffset > 0)
    {
        arrow.style.visibility = "hidden";
    }
})
