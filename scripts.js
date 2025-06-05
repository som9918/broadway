// header bg change 
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;
        var header = document.getElementById("headerContainer");

        if (scroll > 80) {
            header.style.background = "black";
        } else {
            header.style.background = "transparent";
        }
    });
});

