window.myClickFunction = function () {
    $(".info").click(function () {

        //*************根据z-index来获取谁是第几张************//
        for (let i = 0; i < $(this).children().length; i++) {
            var no = $(this).children().eq(i).css("z-index")
            if (no == 2) {
                var firstCard = $(this).children().eq(i)
            }
            if (no == 1) {
                var SecondCard = $(this).children().eq(i)
            }
            if (no == 0) {
                var ThirdCard = $(this).children().eq(i)
            }
        }

        firstCard.addClass('active-animate-go')
        SecondCard.addClass('active-animate-rec')
        ThirdCard.addClass('active-animate-red')

        firstCard.animate(
            {
                opacity: 0
            },
            500,
            () => {
                firstCard.removeClass('active-animate-go')
                SecondCard.removeClass('active-animate-rec')
                ThirdCard.removeClass('active-animate-red')

                firstCard.css({
                    'z-index': 0,
                    'transform': 'rotate(0deg)',
                    opacity: 100
                })
                SecondCard.css({
                    'z-index': 2,
                    'transform': 'rotate(0deg)',
                    opacity: 100
                })
                ThirdCard.css({
                    'z-index': 1,
                    'transform': 'rotate(5deg)',
                    opacity: 100
                })
            })
    });
};

