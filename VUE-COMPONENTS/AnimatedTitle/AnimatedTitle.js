
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.querySelector(".page-section > .container > .section-title").classList.add("section-title--animated");
    }
}
