import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { link } from 'fs'

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <nav
      className={`
        ${styles.paddingX}
      w-full items-center py-f fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] fond-bold cursor-pointer'> Tony <span className='sm:block hidden'> | Typescript Mastery</span></p>
        </Link>
        {/* <p className='text-red-500'>Red</p> */}

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              // making the navlink e.g. about work, contact have an active UI effect (turning white) when clicked and hovered over
              className={`${active === navLink.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px]
              font-mdeium cursor-pointer`}
              onClick={()=> setActive(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar