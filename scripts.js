// header bg change 
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 80) {
            $("#headerContainer").css("background", "black");
        }

        else {
            $("#headerContainer").css("background", "transparent");
        }
    })
})

