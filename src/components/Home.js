import React from 'react'
import './static/css/home.css'

const Home = () => {
    return (
        <div id='home' className="home">
            <div className="box_1">
               <img src="https://mediumblogs.com/wp-content/uploads/2021/08/person.jpg" alt="" />
            </div>
            <div className="box_2">
                  <h3>HELLO!</h3>
                  <h1>I'm Sarosh</h1>
                  <h2>A front-end developer with 2 years of experience. I build many <br /> websites in recent past years and working on latest technologies.</h2>
                  <button  onclick="window.location.href='www.example.com/page.html?id={$contact}'" className="btn">Contact us</button>
            </div>
        </div>
    )
}

export default Home
