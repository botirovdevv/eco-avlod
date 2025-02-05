import React from 'react'
import video from '../assets/images/video.mp4'

const Video = () => {
    return (
        <div className='container'>
            <video width="100%" controls >
                <source src={video} type="video/mp4" />
                Sizning brauzeringiz video tagini qo‘llab-quvvatlamaydi.
            </video>
        </div>
    )
}

export default Video