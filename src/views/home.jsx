import React, { useState, useEffect } from 'react'
import './home.less'
import { vipTranslate } from '@/api/index.js'
function Home() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        getApi()
    }, [])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
async function getApi() {
    console.log('sadsda')
    // const q = '啦啦啦'
    // XLAWBA5mBQaKdcFFZP9D
    // const ress = await getNft('0x8b5FaB3B0724F1a8a01340154A6AF1fab3f2ceaa', {
    //     chain: 'ethereum',
    //     include: 'metadata',
    //     page_size: 10,
    // })
    // console.log(ress, 'ressress')
    const res = await vipTranslate({
        q: '你好',
        from: 'auto',
        to: 'en',
        appid: '20220730001287605',
        salt: '1435660288',
        sign: '60d62db53d17123a911677cfccbea0e7',
    })
    console.log(res)
}
export default Home
