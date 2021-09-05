import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import './static/css/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="head">

                <a href="#home">
                    <li>Home</li>
                </a>
                <a href="#service">
                    <li>Service</li>
                </a>
                <a href="#portfolio">
                    <li>Portfolio</li>
                </a>
                <a href="#review">
                    <li>Review</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>

            </div>
            <div className="social">
                <a target='_blank' href='https://web.facebook.com/sarosh.farooq.9'><FiFacebook /></a>
                <a target='_blank' href='https://www.linkedin.com/in/sarosh-farooq/'><FaLinkedinIn /></a>
                <a target='_blank' href=''><FaPinterestP /></a>
                <a target='_blank' href='https://www.instagram.com/sarosh.faroq/'><AiOutlineInstagram /></a>
            </div>
            <div className="copyright">
                <h2>Copyrigh&copy;Sarosh 2021, All rights reserved </h2>
            </div>
        </div>
    )
}

export default Footer
