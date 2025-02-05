import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav-content">
                    <div className='nav-logo'>
                        <img className='nav-logo_image' src={logo} alt="" />
                        <a href='/' className='nav-logo_title'>Eco Avlod</a>
                    </div>
                    <ul className={isOpen ? "nav-links show" : "nav-links"}>
                        <button className='nav-close_btn' onClick={() => setIsOpen(false)}>
                            <IoMdClose />
                        </button>
                        <a href="#" className='nav-link'>Bosh sahifa</a>
                        <a href="#" className='nav-link'>Biz haqimizda</a>
                        <a href="#" className='nav-link'>Yutuqlarimiz</a>
                        <a href="#" className='nav-link'>Video rolik</a>
                        <a href="#" className='nav-link'>Tavsiyalar</a>
                    </ul>
                    <div className="nav-menu">
                        <button className='nav-menu_btn' onClick={() => setIsOpen(true)}>
                            <RiMenu3Fill />
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar