window.reSize = function () {
    $(".pic").each(function () {
        let d = parseFloat($(this).find(".side").eq(0).css("width")) * Math.sqrt(3) / 6;
        $(this).find(".side").eq(0).css({
            "transform": `translateZ(${d}px)`
        });
        $(this).find(".side").eq(1).css({
            "transform": `rotateY(120deg) translateZ(${d}px)`
        });
        $(this).find(".side").eq(2).css({
            "transform": `rotateY(-120deg) translateZ(${d}px)`
        });
    });
};