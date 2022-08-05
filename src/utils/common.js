// 结构请求参数
export const objToUrl = (obj) => {
    const tempArray = []
    for (const item in obj) {
        if (item) {
            tempArray.push(`${item}=${obj[item]}`)
        }
    }
    return `?${tempArray.join('&')}`
}
