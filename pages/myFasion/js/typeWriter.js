//打字机效果
var count = 0
var isOk = true
setInterval(() => {
    if (isOk) {
        isOk = false
        const texts = [
            'This is my Blog: Welcome!',
            'If You Like My Blog Style,You can go to my Github to clone',
            'You can add My Social Account WX: Harry-C-'
        ]
        if (count >= texts.length) {
            count = 0
        }
        const changeState = new Promise((resolve, reject) => {
            let textLen = 0
            const textItem = texts[count]//哪一句进行打印
            //打字效果
            let startType = setInterval(function () {
                let input = textItem.substr(0, textLen)
                $(".typewriter span").text(input)
                textLen++
                if (textLen > textItem.length) {
                    clearInterval(startType)

                    const text = {
                        content: textItem,
                        len: textLen
                    }
                    setTimeout(() => {
                        resolve(text)
                    }, 2000)
                }
            }, 70)
        }).then((text) => {
            //删字效果
            let textLen = text.len
            const textcon = text.content
            let delType = setInterval(function () {
                let input = textcon.substr(0, textLen)
                $(".typewriter span").text(input)
                textLen--
                if (textLen < 0) {
                    clearInterval(delType)
                    isOk = true
                }
            }, 10)
        })
        count++
    }
})