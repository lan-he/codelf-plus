import service from '@/utils/request.js'
// import { objToUrl } from '@/utils/common.js'

export const vipTranslate = (data) => {
    return service({
        url: '/api/trans/vip/translate',
        method: 'post',
        data,
    })
}
