let r = 0
setInterval(function () {
    let animateClass = ['active-rotateCardOne', 'active-rotateCardTow', 'active-rotateCardThree']
    if (r > animateClass.length) {
        r = 0
    }

    if (r == 0) {
    } else {
        $(".pic").css("transform", `rotate3d(0, 1, 0, ${r * 120}deg)`);
    }

    let lastClass = animateClass[r - 1]
    let currentClass = animateClass[r]
    $(".pic").removeClass(lastClass)
    $(".pic").addClass(currentClass)
    r++
}, 5000)
