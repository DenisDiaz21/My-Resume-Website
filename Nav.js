// Sticky Navbar
let header = document.querySelector("header");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () =>
{
   header.classList.toggle("sticky", window.scrollY > 0);  

   prevScrollPos = window.pageYOffset;
   
   if(window.scrollY > 900)
   {
      currentScrollPos = window.pageYOffset;

      if(prevScrollPos > currentScrollPos)
      {
         header.style.top = '0px';
      } else {
         header.style.top = '-100px';
         header.style.transition = '.6s';
      }
      prevScrollPos = currentScrollPos 
   }
   else if (window.scrollY < 900)
   {
      header.style.top = '0px';
   }
})



