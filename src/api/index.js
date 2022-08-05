import service from '@/utils/request.js'
import { objToUrl } from '@/utils/common.js'

export const vipTranslate = (data) => {
    return service({
        url: `/backend/api/trans/vip/translate${objToUrl(data)}`,
        method: 'POST',
        data,
    })
}
export const getNft = (assets, data) => {
    return service({
        url: `/v0/accounts/${assets}${objToUrl(data)}`,
        method: 'get',
    })
}
