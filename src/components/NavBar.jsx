import { useState } from 'react'

export default function NavBar() {
  const [isOpened, setIsOpened] = useState(false)

  const toggleMenu = () => setIsOpened(!isOpened);

  const isDesktop = window.innerWidth > 768;

  return (
    <>
    <nav className='flex flex-col lg:flex-row text-center justify-center lg:justify-between p-5 lg:pt-10'>
        <h1 className='text-2xl mb-5'>portfolio.</h1>
        <ul className={`flex flex-col lg:flex-row justify-center gap-5 ${isOpened || isDesktop ? '' : 'hidden'}`}>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div id="menu-icon" className="fixed top-10 right-6 lg:hidden" onClick={toggleMenu}>
            <svg className={`menu-icons w-6 h-6 ${isOpened ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
            </svg>
            <svg className={`menu-icons w-6 h-6 ${isOpened ? '' : 'hidden'}`}  xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
            </svg>
            
        </div>
    </nav>
    </>
  )
}
