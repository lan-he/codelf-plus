import React, { useState, useEffect } from 'react'
import './home.less'
import { vipTranslate } from '@/api/index.js'
function Home() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('asdasdasd')
        getApi()
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
async function getApi() {
    const res = await vipTranslate({
        q: '哈哈',
    })
    console.log(res)
}
export default Home
