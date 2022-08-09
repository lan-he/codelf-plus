import React from 'react'
import logoImg from '@/assets/image/take.svg'
import './header.less'
function Home() {
    return (
        <div className="translate-codelf-header-box">
            <div className="header-content">
                <div className="logo-box">
                    <img className="logo" src={logoImg} alt="logo" />
                    <div className="logo-name">CODELE-PLUS</div>
                    <div className="author">By: hemingxuan</div>
                </div>
                <a href="https://github.com/mingxuann/codelf-plus" target="view_window">
                    <i className="iconfont icon-github"></i>
                </a>
            </div>
        </div>
    )
}

export default Home
