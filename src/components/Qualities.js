import React from 'react'
import './static/css/qualities.css'
import SEO from'./static/img/SEO icon.png'
import web from'./static/img/web_dev.png'
const Qualities = () => {
    return (
        <div className="home quality ">
        <div className="box1">
            <h2>Why You <br /> Should Hire Me</h2>
            <div className="line"></div>
            <p>I'm passionate about my work and worked hard to complete the project on time. This gives me more time to recheck all the functionalities and satisfied the customer.</p>
            <p>In the last few years, I worked on multiple projects with my qualified team and develop great websites. I continue to learn new things to upgrade my skills and knowledge. </p>
            <button>Hire me</button>
        </div>
        <div className="box2">
          
            <div className="product_des pd2">
                <div className="pd">
                    <div className="img_frame">
                    <img src="https://mediumblogs.com/wp-content/uploads/2021/08/Web-Design.png" alt="" />
                    </div>
                    <div className='pd_detail'>
                    <h3>Web Design</h3>
                    <p>I can create responsive web layouts with grid and flex, which looks amazing on all mobile and desktop devices</p>
                    </div>
                </div>
                <div className="pd">
                    <div className="img_frame">
                    <img src={web} alt="" />
                    </div>
                    <div className='pd_detail'>
                    <h3>Web Development</h3>
                    <p>I have in-depth knowledge of current trending technologies and have experience of HTML 5, CSS3, JS, jQuery, React Js, etc.</p>
                    </div>
                </div>
                <div className="pd">
                    <div className="img_frame">
                    <img src={SEO} alt="" />
                    </div>
                    <div className='pd_detail'>
                    <h3>SEO</h3>
                    <p>I can provide quality services in SEO for WordPress Website. My main focus is to deliver quality work and customer satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Qualities
