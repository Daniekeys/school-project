import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/icon.png';
const Footer = () => {
  return (
    <div className="w-full h-16 shadow-md  flex justify-between items-center bg-slate-500">
           <div className="flex items-center">
                <Link to="/main" >
                    <img src={Logo} alt="icon" className="w-12  h-auto self-center" />
                </Link>
                <Link to="/main" className="text-3xl text-white">
                    Uniwaters
                </Link>
        </div>
        <div className="hidden sm:flex items-center">
         <a href="www.unilorin.edu.ng" className="text-white mr-4 text-2xl"
         target="_blank"
         >
        University of Ilorin
        </a>
        </div>
        <div className=" hidden sm:flex items-center text-white pr-7">
           Computer Engineering
        </div>
        </div>
  )
}

export default Footer