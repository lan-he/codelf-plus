import React, { useState, useEffect, useRef } from 'react'
import md5 from 'js-md5'
import { vipTranslate } from '@/api/index.js'
import './home.less'
let timer = null
let copyTimer = []
function Home() {
    const [translation, setTranslation] = useState('') // 输入内容
    const [cssAnswer, setCssAnswer] = useState('') // css类名答案
    const [smallHump, setSmallHump] = useState('') // 小驼峰
    const [bigHump, setBigHump] = useState('') // 大驼峰
    const [reversal, setReversal] = useState(false) //反转图标
    const [smallPrintMode, setSmallPrintMode] = useState(false) //反转图标
    const falseInput = useRef(null)
    useEffect(() => {
        // requestTranslationApi()
    }, [])
    const handleChange = (e) => {
        // 输入事件
        let values = e.target.value
        setTranslation(values)
        setSmallPrintMode(false)
        // falseInput.current.offsetHeight > 50 ? setSmallPrintMode(true) : setSmallPrintMode(false)
        clearTimeout(timer)
        timer = setTimeout(() => {
            requestTranslationApi(values)
        }, 500)
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
            let dstData = res.data.trans_result[0].dst.replace(/,/g, '')
            // .replace(/!/g, '').replace(/./g, '')
            setCssAnswer(dstData.toLowerCase().replace(/\s+/g, '-').replace(/,/g, ''))
            setSmallHump(convertStringToCamelCase(dstData))
            setBigHump(
                convertStringToCamelCase(dstData).substr(0, 1).toUpperCase() +
                    convertStringToCamelCase(dstData).substr(1)
            )
        }
    }
    function convertStringToCamelCase(sentence) {
        // 转小驼峰
        return sentence.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (camelCaseMatch, i) {
            if (+camelCaseMatch === 0) return ''
            return i === 0 ? camelCaseMatch.toLowerCase() : camelCaseMatch.toUpperCase()
        })
    }
    const random = (min, max) => {
        // 生成随机数
        return Math.round(Math.random() * (max - min)) + min
    }
    const selectCopy = (idname, index) => {
        // 点击复制
        var selectCopyDom = document.getElementById(idname)
        selectCopyDom.select() // 选择对象
        document.execCommand('Copy')

        document.getElementsByClassName('copy-prompt-box')[index].classList.add('copy-prompt-box-show')
        clearTimeout(copyTimer[index])
        copyTimer[index] = setTimeout(() => {
            document.getElementsByClassName('copy-prompt-box')[index].classList.remove('copy-prompt-box-show')
        }, 1500)
    }
    useEffect(() => {
        // 自适应响应高度
        let selectCopyDom = document.getElementById('cssdata')
        selectCopyDom.style.height = '100px'
        selectCopyDom.style.height = selectCopyDom.scrollHeight + 'px'

        let smallHump = document.getElementById('smallHump')
        smallHump.style.height = '100px'
        smallHump.style.height = smallHump.scrollHeight + 'px'

        let bigHump = document.getElementById('bigHump')
        bigHump.style.height = '100px'
        bigHump.style.height = bigHump.scrollHeight + 'px'
    }, [cssAnswer])
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
                    <textarea
                        className={`textarea-box ${smallPrintMode ? 'smal-font' : ''}`}
                        value={translation}
                        onChange={handleChange}
                    />
                    <p className={`textarea-box-hide ${smallPrintMode ? 'smal-font' : ''}`} ref={falseInput}>
                        {translation}
                    </p>
                </div>
                <div
                    className="translate-codelf-output"
                    onClick={() => {
                        selectCopy('cssdata', 0)
                    }}
                >
                    <textarea className="textarea" id="cssdata" readOnly value={cssAnswer}></textarea>
                    <div className="copy-prompt-box">复制成功</div>
                </div>
            </div>
            <div className="multi-format-display">
                <div
                    className="format-box"
                    onClick={() => {
                        selectCopy('smallHump', 1)
                    }}
                >
                    <textarea className="textarea" id="smallHump" readOnly value={smallHump}></textarea>
                    <div className="copy-prompt-box">复制成功</div>
                </div>
                <div
                    className="format-box"
                    onClick={() => {
                        selectCopy('bigHump', 2)
                    }}
                >
                    <textarea className="textarea" id="bigHump" readOnly value={bigHump}></textarea>
                    <div className="copy-prompt-box">复制成功</div>
                </div>
            </div>
        </div>
    )
}

export default Home
