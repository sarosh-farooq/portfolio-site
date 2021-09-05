import React from 'react'
import './static/css/mywork.css'
const Mywork = () => {
    return (
        <div id='service' className="home mywork ">
            <div className="box1">
                <h2>What Actually <br /> I Love to do</h2>
                <div className="line"></div>
                <p>I love to work on HTML, CSS, and SEO projects to push my skills, and learn new things every day. creating responsive layouts is challenging but that's how we learn to explore our limits.</p>
                <p>Recently, I worked on Jquery, react, and other latest technologies, which can help me building new layouts and user-friendly websites. And proving a good user experience is my first priority.</p>
                <button>See more</button>
            </div>
            <div className="box2">
                <div className="product_des pd1">
                    <div className="pd">
                        <div className="img_frame">
                        <img src="https://mediumblogs.com/wp-content/uploads/2021/08/Responsive-Layout.png" alt="" />
                        </div>
                        <h3>Responsive Layout</h3>
                        <p>I can create a responsive layout that looks awesome on all devices. And make it accessible for users to enhance user-experience</p>
                    </div>
                    <div className="pd">
                        <div className="img_frame">
                        <img src="https://mediumblogs.com/wp-content/uploads/2021/08/Web-Development.png" alt="" />
                        </div>
                        <h3>Web Development</h3>
                        <p>Building new websites and creating them each day is a challenge that I like to accept and complete within the time period</p>
                    </div>
                </div>
                <div className="product_des pd2">
                    <div className="pd">
                        <div className="img_frame">
                        <img src="https://mediumblogs.com/wp-content/uploads/2021/08/Web-Design.png" alt="" />
                        </div>
                        <h3>Web Design</h3>
                        <p>Web design should be simple, responsive, and proving a good user experience. And i can do it all by bringing creativity.</p>
                    </div>
                    <div className="pd">
                        <div className="img_frame">
                        <img src="https://mediumblogs.com/wp-content/uploads/2021/08/CSS-Animations.png" alt="" />
                        </div>
                        <h3>CSS Animations</h3>
                        <p>The animation can add life to the elements of the website to make them attractive and catch users' attention.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mywork
