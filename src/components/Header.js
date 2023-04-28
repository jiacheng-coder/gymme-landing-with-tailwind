import React,{useState,useEffect} from 'react';
import { header } from '../data';
// import components
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile';
// import icons
import {RiMenu4Fill,RiCloseFill} from 'react-icons/ri'

const Header = () => {
  // header state
  const [isActive,setIsActive] = useState(false)
  // navMobile state
  const [navMobile,setNavMobile] = useState(false)
  // scrool event
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  })
  // destructure header data
  const {logo,btnLoginText,btnSignupText}=header
  return <header className={`${isActive?'bg-neutral-500':'bg-transparent'} py-[20px] fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
    <a href="#">
      <img src={logo} alt="" className='h-[30px]'/>
    </a>
    {/* nav - initially hidden - show on desktop */}
    <Nav />
    {/* btns - initially hidden - show on desktop */}
    <div className='hidden lg:flex space-x-4'>
      <button>{btnLoginText}</button>
      <button>{btnSignupText}</button>
    </div>
    {/* nav menu btn - hide on desktop */}
    <div className='lg:hidden absolute right-4 cursor-pointer' onClick={()=>setNavMobile(!navMobile)}>
      {navMobile?(<RiCloseFill className='text-primary-200 text-3xl'/>):(<RiMenu4Fill className='text-primary-200 text-3xl'/>)}
    </div>
    {/* nav mobile - hide on desktop */}
    <NavMobile navMobile={navMobile}/>
  </header>;
};

export default Header;
