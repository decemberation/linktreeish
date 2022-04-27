import React from 'react'
import avatar from '../assets/hori.jpg'
import MoonIcon from './Icons/MoonIcon'
import SunIcon from './Icons/SunIcon'
import '../styles/Header.css'

export default function Header() {
    const [theme, setTheme] = React.useState(() => document.body.getAttribute('data-theme') ?? 'dark')
    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    const handleSwitchTheme = () => {
        setTheme(isDark ? 'light' : 'dark')
    }
    const isDark = theme === 'dark'

    return (
        <div className='header-container'>
            <div className='header-content'>
                <img src={avatar} alt='avatar' />
                &nbsp;&nbsp;&nbsp;
                <h2>
                    <b>ぺろ</b>
                </h2>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h1>Link.TREE</h1>
            </div>
            <button className='switcher' onClick={handleSwitchTheme}>
                {isDark ? <SunIcon color="yellow"/> : <MoonIcon />}
            </button>
        </div>
    )
}
