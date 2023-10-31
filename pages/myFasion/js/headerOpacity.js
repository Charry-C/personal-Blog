var flag = true
var flag2 = true
$(document).scroll(function () {
    var roll = $(this).scrollTop()
    var scroH = $(".column").offset().top;

    if (roll >= 1080) {
        $(".column").offset({
            top: roll + 20
        })
        if (flag) {
            $(".header").animate({
                top: -50,

            }, 200)
        }
        flag = false
        flag2 = true
    }
    else {
        $(".column").offset({
            top: 1100
        })
        if (flag2) {
            $(".header").animate({
                top: 20,
            }, 200)
        }
        flag2 = false
        flag = true
    }
})
