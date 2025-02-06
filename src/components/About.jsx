import React, { useEffect } from 'react'
import img from '../assets/images/user1.jpg'
import img2 from '../assets/images/user2.jpg'
import img3 from '../assets/images/user3.jpg'
import img4 from '../assets/images/user4.jpg'
import img5 from '../assets/images/user5.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="about-content">
                    <div className="about-box" data-aos="fade-right">
                        <img width={200} className='about-img' src={img} alt="" />


                        <div>
                            <p className="about-text">
                                Shonazarov Bunyod
                            </p>
                            <p className="about-text">
                                8-V sinf o'quvchisi
                            </p>
                        </div>
                    </div>
                    <div className="about-box_2" data-aos="fade-up">
                        <div>
                            <p className="about-text">
                                Atabayev Amirxon
                            </p>
                            <p className="about-text">
                                8-V sinf o'quvchisi
                            </p>
                        </div>
                        <img width={200} className='about-img' src={img2} alt="" />
                    </div>
                    <div className="about-box" data-aos="fade-right">
                        <img width={200} className='about-img' src={img3} alt="" />
                        <div>
                            <p className="about-text">
                                Kamoladinov Sobirjon
                            </p>
                            <p className="about-text">
                                9-G sinf o'quvchisi
                            </p>
                        </div>
                    </div>

                    <div className="about-box_2" data-aos="fade-up">
                        <div>
                            <p className="about-text">
                                Shonazarov Alixan
                            </p>
                            <p className="about-text">
                                9-G sinf o'quvchisi
                            </p>
                        </div>
                        <img width={200} className='about-img' src={img4} alt="" />
                    </div>

                    <div className="about-box" data-aos="fade-right">
                        <img width={200} className='about-img' src={img5} alt="" />
                        <div>
                            <p className="about-text">
                                Otanazarov Ne’matjon
                            </p>
                            <p className="about-text">
                                9-A sindf o'quvchisi
                            </p>

                        </div>
                    </div>
                </div>
                <div className="about-video" id='video' data-aos="fade-down">
                    <h1 className="about-title">Chiqindi muammosi</h1>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/l9RLq4X6s8g?si=OAIEknUVP3Y1ggpS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default About