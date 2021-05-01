// Loader Rotating D Cancel
let loader = document.querySelector(".loader-wrapper");

console.log(loader);
function RemoveD() {
    setTimeout(() => {
    loader.parentElement.removeChild(loader);
}, 4000);}
RemoveD();

// Disable scroll
function DisableScrolling () {
window.onscroll = function () { window.scrollTo(0, 0); };
}

function EnableScrollAgain(){
    setTimeout(() =>
    {
        window.onscroll = function(){};
    }, 3000);

}
DisableScrolling();
EnableScrollAgain();
