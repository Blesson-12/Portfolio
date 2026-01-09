import React, { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        {name:"Skills", link:"#skills"},
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
        
        
    ]
    return (
            <nav className='fixed z-50 w-full bg-white/70 dark:bg-gray-900/95 shadow-md backdrop-blur-md top-0 left-0'>            <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
                {/*Logo*/}
                <h1 className='text-2xl font-bold text-blue-600'
                >BLESSON N</h1>

                {/*Desktop */}
                <ul className='hidden md:flex space-x-8 items-center '>
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <a href={item.link}
                                className='text-gray-700 dark:text-gray-200 hover:text-blue-800 transition'>
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href='/Blesson_Resume.pdf' target='_blank'
                            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition'>Resume</a>
                    </li>
                    <DarkModeToggle />
                </ul>
                {/**mobile */}
                <button className='md:hidden text-2xl dark:text-white '
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>
            {/*Mobile Menu  */}
            {
                menuOpen && (
<div className='md:hidden absolute top-full left-0 z-50 w-full pointer-events-auto bg-slate-700  dark:text-gray-100 dark:bg-slate-900/95 px-6 py-4 shadow-lg'>
                        {navLinks.map((item) => (
                            <a href={item.link}
                                key={item.name}
                                onClick={()=>setMenuOpen(false)}
                                className='block py-3 text-gray-200 dark:text-gray-100 hover:text-amber-600 transition' >
                                {item.name}
                            </a>
                        ))}
                        <a href='/Blesson_Resume.pdf'
                            target='_blank'
                            className='block mt-4 text-center bg-blue-600 text-white py-2 rounded w-full'>Resume</a>
                        <div className='mt-4'>
                            <DarkModeToggle />
                        </div>
                    </div>
                )
            }

        </nav>
    )
}

export default NavBar