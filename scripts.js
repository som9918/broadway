// header bg change 
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 80) {
            $(".black").css("background", "black");
        }

        else {
            $(".black").css("background", "transparent");
        }
    })
})

