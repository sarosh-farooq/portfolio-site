import React from 'react'
import './static/css/header.css'



const Header = () => {
    return (
        <div>
            <header>
                <nav>

                
                <div className="head">
                    <img src="https://mediumblogs.com/wp-content/uploads/2021/08/logo_2.png" alt="" />
                </div>
                <div className="head">
                     

                        <a  href="#home">
                         <li>Home</li>
                         </a>
                         <a className='hide' href="#service">
                         <li>Service</li>
                         </a>
                         <a  href="#portfolio">
                         <li>Portfolio</li>
                         </a>
                         <a className='hide'  href="#review">
                         <li>Review</li>
                         </a>
                         <a  href="#contact">
                         <li>Contact</li>
                         </a>
                         <a href="mailto:sarosh.faroq@gmail.com">
                         <li className="btn">Hire me </li>
                         </a>
                     
                </div>
                </nav>
                
            </header>
            
        </div>
        
    )
}

export default Header
