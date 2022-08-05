import React, { useState, useRef, useEffect } from 'react'
import md5 from 'js-md5'
import { vipTranslate } from '@/api/index.js'
import './home.less'
function Home() {
    const renderRef = useRef(true)
    const [translation, setTranslation] = useState('你好世界')
    const [answer, setAnswer] = useState('')

    useEffect(() => {
        if (renderRef.current) {
            renderRef.current = false
            return
        }
        // requestTranslationApi()
    }, [])
    const handleChange = (e) => {
        setTranslation(e.target.value)
    }
    const requestTranslationApi = async () => {
        const randomThis = random(1000, 100000)
        const appid = '20220730001287605'
        const miyao = 'XLAWBA5mBQaKdcFFZP9D'
        const res = await vipTranslate({
            q: translation,
            from: 'auto',
            to: 'en',
            appid: appid,
            salt: randomThis,
            sign: md5(appid + translation + randomThis + miyao),
        })
        if (res.data.trans_result) {
            setAnswer(res.data.trans_result[0].dst)
        }
    }
    function random(min, max) {
        return Math.round(Math.random() * (max - min)) + min
    }
    return (
        <div className="translate-codelf-box">
            <div className="translation-operation-box">
                <div className="select-inner">中文</div>
                <i className="select-inner-icon">a</i>
                <div className="select-inner">英语</div>
                <button class="custom-btn btn-12" onClick={requestTranslationApi}>
                    <span>Click</span>
                    <span>翻译</span>
                </button>
            </div>
            <div className="translate-codelf-input-box">
                <div className="translate-codelf-input">
                    <textarea className="textarea-box" value={translation} onChange={handleChange} />
                </div>
                <div className="translate-codelf-output">
                    <span>{answer}</span>
                </div>
            </div>
        </div>
    )
}

export default Home
