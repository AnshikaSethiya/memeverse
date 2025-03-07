'use client'
import React, {useState} from 'react'
import logo from "./../../public/logo_meme.svg"
import "./../app/globals.css"
import { MoonFilled, SunFilled, UserOutlined} from '@ant-design/icons'
import Link from 'next/link'

import { usePathname } from 'next/navigation';


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const pathname = usePathname();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    // { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/leaderboard', label: 'Leaderboard' },
  ];


  return (
    // <div>
    //   <nav className='navbar'>
    //     <div className='flex flex-row justify-evenly'>
    //     <img width={50} src="https://img.freepik.com/free-vector/crazy-emoji-fools-day-icon-isolated_24640-133943.jpg?t=st=1741148800~exp=1741152400~hmac=75e94fa503adff8abaa13bd23cc471c6c2626c645e39771ec2489c05414b75a3&w=900" alt="meme logo" />
    //     <h3>MemeVerse</h3>
    //     </div>

    //     <div className='flex flex-wrap'>
    //      <ul>
    //      <li><Link href="/explore">Explore</Link></li>
    //      <li><Link href={"/leaderboard"}>Leaderboard</Link></li>
    //      <li><Link href={"/profile"}>Profile</Link></li>
         
    //      </ul>
    //     </div>

    //     <ul>
    //       <li><button onClick={toggleDarkMode}>{isDarkMode ? <SunFilled /> : <MoonFilled />}</button></li>
    //     </ul>
    //   </nav>
    // </div>  
    <nav className="bg-white dark:bg-gray-800 transition-colors duration-300 sm:py-6 md:py-4" style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
    <div className="container mx-auto px-4 flex justify-between items-center">
      {/* Logo and Name */}
      <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2 dark:invert transition duration-300" />
        <Link href="/">
          <span className="text-xl font-bold text-gray-800 dark:text-white transition duration-300">MemeVerse</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex md:flex-row space-x-4 sm:flex-col sm:space-x-0 sm:space-y-2">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href} className={`text-gray-800 px-2 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 ${pathname === link.href ? 'font-bold' : ''}`}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Navigation (Example) */}
      <div className="flex items-center space-x-4">
        <Link href="/profile">
          {/* <div className="transition duration-300"> Placeholder avatar */}
           <button className='profile-button-rounded'>Profile</button>
          {/* </div> */}
        </Link>
        <button onClick={toggleDarkMode}>{isDarkMode ? <SunFilled /> : <MoonFilled />}</button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar