import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { link } from 'fs'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
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

        {/* mapping each navLink there is e.g. [About, Work, Contact] to have an hover effect and clicked on effect  */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              // making the navlink e.g. about work, contact have an active UI effect (turning white) when clicked and hovered over. Also set the title e.g. [About, Work, Contact] as the "active" state hook 
              className={`${active === navLink.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px]
              font-mdeium cursor-pointer`}
              onClick={() => setActive(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  // making the navlink e.g. about work, contact have an active UI effect (turning white) when clicked and hovered over. Also set the title e.g. [About, Work, Contact] as the "active" state hook 
                  className={`${active === navLink.title
                    ? "text-white"
                    : "text-secondary"
                    } hover:text-white text-[18px]
              font-mdeium cursor-pointer`}
                  onClick={() => setActive(navLink.title)}
                >
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}
            </ul>


          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar