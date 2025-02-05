import React from 'react'
import video from '../assets/images/video.mp4'

const Video = () => {
    return (
        <section className="video">
            <div className='container'>
                <video width="100%" controls className='video-player'>
                    <source src={video} type="video/mp4" />
                    Sizning brauzeringiz video tagini qo‘llab-quvvatlamaydi.
                </video>
            </div>
        </section>
    )
}

export default Video