window.pageSwitch = function (current_page) {
    $(".page-switch").html('<div class="pages"></div>')
    const pages = [1, 2, 3, 4]
    const first = pages[0]
    const last = pages[pages.length - 1]
    const forward = '<a href="#" class="left"><i class="fa-solid fa-angle-left"></i></a>'
    const next = '<a href="#" class="right"><i class="fa-solid fa-angle-right"></i></a>'
    const dot = "<span>...</span>"

    //添加左右箭头
    if (current_page - 1 > 0) {
        $(".pages").before(forward)
    }
    if (current_page + 1 <= pages.length) {
        $(".pages").after(next)
    }

    // 直接添加页码 与 需要省略页码的判断
    if (pages.length < 4) {
        for (let i = 0; i < pages.length; i++) {
            let page_btn = `<a href="#"><span>${pages[i]}</span></a>`
            $(".pages").append(page_btn)
        }
    } else {

        //添加首页
        const f_btn = `<a href="#"><span>${first}</span></a>`
        $(".pages").append(f_btn)

        //判断是否需要添加省略页码
        let left_long = (current_page - 1) - first
        if (left_long >= 2) {
            $(".pages").append(dot)
        }

        //添加current页码的左页码
        let beforNum = current_page - 1
        beforNum <= first ? beforNum = '' : beforNum = current_page - 1
        let before_btn = `<a href="#"><span>${beforNum}</span></a>`
        if (beforNum) {
            $(".pages").append(before_btn)
        }


        //添加current页码
        let currentNum = current_page
        currentNum == first || currentNum == last ? currentNum = '' : currentNum = current_page
        let c_btn = `<a href="#"><span>${currentNum}</span></a>`
        if (currentNum) {
            $(".pages").append(c_btn)
        }


        //添加current页码的右页码
        let afterNum = current_page + 1
        afterNum >= last ? afterNum = '' : afterNum = current_page + 1
        let after_btn = `<a href="#"><span>${afterNum}</span></a>`

        if (afterNum) {
            $(".pages").append(after_btn)
        }

        //判断是否需要添加省略页码
        let right_long = last - (current_page + 1)
        if (right_long >= 2) {
            $(".pages").append(dot)
        }

        //添加末页
        const l_btn = `<a href="#"><span>${last}</span></a>`
        $(".pages").append(l_btn)
    }
    $(document).on('click', '.pages span', function () {
        let current_page = parseInt($(this).text());
        console.log(current_page);
        pageSwitch(current_page);
    });
}