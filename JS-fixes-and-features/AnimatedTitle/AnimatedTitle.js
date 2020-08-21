
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.querySelector(".page-section > .container > .section-title").classList.add("section-title--animated");
    }
}
