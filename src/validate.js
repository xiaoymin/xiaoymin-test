// c. validate.js 校验文件
// 解决toFixed保留小数的问题
const formatToFixed = (money, decimals = 2) => {
    return (
        Math.round(
            (parseFloat(money) + Number.EPSILON) * Math.pow(10, decimals)
        ) / Math.pow(10, decimals)
    ).toFixed(decimals);
}
const Format = {
    // 格式化金额展示： 12341234.246 -> $ 12,341,234.25
    formatMoney: (money, symbol = "", decimals = 2) =>
        formatToFixed(money, decimals)
            .replace(/\B(?=(\d{3})+\b)/g, ",")
            .replace(/^/, `${symbol}`),
};

export default Format;

作者：时光足迹
链接：https://juejin.cn/post/7039140144250617887
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。