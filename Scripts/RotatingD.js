// Loader Rotating D Cancel
let loader = document.querySelector(".loader-wrapper");


function RemoveD() {
    setTimeout(() => {
    loader.parentElement.removeChild(loader);
}, 5000);}
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
