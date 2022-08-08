import React, { useState, useEffect } from 'react'
import md5 from 'js-md5'
import { vipTranslate } from '@/api/index.js'
import './home.less'
let timer = null
function Home() {
    const [translation, setTranslation] = useState('') // 输入内容
    const [cssAnswer, setCssAnswer] = useState('') // css类名答案
    const [reversal, setReversal] = useState(false)
    useEffect(() => {
        // requestTranslationApi()
    }, [])
    const handleChange = (e) => {
        let values = e.target.value
        setTranslation(values)
        console.log(values.match(/\n|\r/g), 'n')
        clearTimeout(timer)
        timer = setTimeout(() => {
            requestTranslationApi(values)
        }, 700)
    }
    const requestTranslationApi = async (values = '') => {
        // 查询翻译接口
        const randomThis = random(1000, 100000)
        const appid = '20220730001287605'
        const miyao = 'XLAWBA5mBQaKdcFFZP9D'
        const res = await vipTranslate({
            q: values,
            from: 'auto',
            to: 'en',
            appid: appid,
            salt: randomThis,
            sign: md5(appid + values + randomThis + miyao),
            tts: 1,
        })
        if (res.data.trans_result) {
            let dstData = res.data.trans_result[0].dst
            setCssAnswer(dstData.toLowerCase().replace(/\s+/g, '-').replace(/,/g, ''))
        }
    }
    const random = (min, max) => {
        return Math.round(Math.random() * (max - min)) + min
    }
    return (
        <div className="translate-codelf-box">
            <div className="translation-operation-box">
                <div className="select-inner">中文</div>
                <i
                    className={`iconfont icon-qiehuan ${reversal ? 'mirror-reversal' : ''}`}
                    onClick={() => {
                        setReversal(!reversal)
                    }}
                ></i>
                <div className="select-inner">英语</div>
                <button
                    className="custom-btn btn-12"
                    onClick={() => {
                        requestTranslationApi(translation)
                    }}
                >
                    <span>Click</span>
                    <span>翻译</span>
                </button>
            </div>
            <div className="translate-codelf-input-box">
                <div className="translate-codelf-input">
                    <textarea className="textarea-box" value={translation} onChange={handleChange} />
                </div>
                <div className="translate-codelf-output">
                    <span>{cssAnswer}</span>
                </div>
            </div>
        </div>
    )
}

export default Home
