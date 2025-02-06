import React, { useEffect } from 'react'
import img from '../assets/images/director.jpg'
import img2 from '../assets/images/user.jpg'
import Aos from 'aos';

const Header = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // Animatsiya davomiyligi (1 soniya)
            once: true, // Animatsiya faqat bir marta ishlaydi
        });
    }, []);
    return (
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <div className="header-texts" data-aos="fade-up">
                        <h3 className='header-name'>Urganch shahar 5-son maktabning <span className='header-color_name'>Eco</span> Avlod Jamoasi</h3>
                        <h1 className='header-title'>Yer - bizning uyimiz, uni asrash burchimiz!</h1>
                    </div>
                    <div className="header-images">
                        <div className="header-image">
                            <img src={img} className='header-img' alt="" />
                        </div>

                        <div className="header-image">
                            <img src={img2} className='header-img' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header