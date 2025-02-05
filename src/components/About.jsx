import React from 'react'
import img from '../assets/images/user.jpg'

const About = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="about-content">
                    <div className="about-box">
                        <img width={200} className='about-img' src={img} alt="" />
                        <p className="about-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus magni nobis accusamus blanditiis ducimus possimus totam voluptas provident porro. 
                        </p>
                    </div>
                    <div className="about-box_2">
                        <p className="about-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus magni nobis accusamus blanditiis ducimus possimus totam voluptas provident porro. 
                        </p>
                        <img width={200} className='about-img' src={img} alt="" />
                    </div>
                    <div className="about-box">
                        <img width={200} className='about-img' src={img} alt="" />
                        <p className="about-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus magni nobis accusamus blanditiis ducimus possimus totam voluptas provident porro. 
                        </p>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default About