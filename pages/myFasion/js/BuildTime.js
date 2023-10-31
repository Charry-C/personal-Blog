var setWeb
setInterval(function () {
    const targetDate = new Date("2023-10-31T00:00:00");
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - targetDate.getTime();
    const Difftime = function (timeDiff) {
        // 将时间间隔转换为年、月、日、小时、分钟和秒
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30.436875); // 平均每月的天数
        const years = Math.floor(months / 12);

        // 计算余数
        const remainingMonths = months % 12;
        const remainingDays = days % 30.436875;
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;
        const str = `该站建立已经：${years} 年 ${remainingMonths} 月 ${remainingDays} 日 ${remainingHours} 时 ${remainingMinutes} 分 ${remainingSeconds} 秒`
        return str
    }
    setWeb = Difftime(timeDiff)
    $(".web-info .time").text(setWeb)
}, 1000)