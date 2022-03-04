import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon.png';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="w-full h-16 shadow-md  flex justify-between items-center bg-white">
           <div className="flex items-center">
                <Link to="/tanks" >
                    <img src={Logo} alt="icon" className="w-12  h-auto self-center" />
                </Link>
                <Link to="/tanks" className="text-3xl text-gray-600">
                    Uniwaters
                </Link>
        </div>
        <div className="block sm:hidden">
            <FaBars className="text-gray-600 text-3xl" />
        </div>
        <div className="hidden sm:flex items-center">
            <Link to="/tanks" className="text-gray-600 mr-4">
                Home
            </Link>
            <Link to="/tanks" className="text-gray-600 mr-4">
                About
            </Link>
            <Link to="/tanks" className="text-gray-600 mr-4">
                Contact
            </Link>

        </div>
        <div className="hidden sm:flex items-center">
            <Link to="/main" className="text-gray-600 mr-4">
                Login
            </Link>
            <Link to="/main" className="text-gray-600 mr-4">
                Register
            </Link>
        </div>
        </div>
    );
};

export default Header;
