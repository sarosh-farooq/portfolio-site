import React from 'react'
import './static/css/reviews.css'
import {AiFillStar} from 'react-icons/ai'
import profile from './static/img/profile.png'

const Reviews = () => {
    return (
        <div id='review' className='home reviews'>
            <div className="box_1">
                <h2>What my <br /> Customers <br /> are saying</h2>
                <div className="line"></div>
                <div className="line2"></div>
                <div className="line2"></div>
            </div>
            <div className="review_box">
                <div className="review">
                   <div className="reviews_per">
                       <img src={profile} alt="" />
                       <div className="other_detail">
                           <h3>Mr. Ahmed Roye</h3>
                           <h4>Web Designer</h4>
                       </div>
                   </div>
                   <p>Sarosh has some excellent skills and knowledge - far beyond most of them, but ultimately we decided we're better off keeping this with our in-house team long term. Hope we get the chance to work together on something more suitable in the future. That will be very helpful for next projects.</p>
                    <div className="star" >
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </div>
                <div className="review">
                   <div className="reviews_per">
                       <img src={profile} alt="" />
                       <div className="other_detail">
                           <h3>Mr. Naseem Badami</h3>
                           <h4>Full-stack Developer</h4>
                       </div>
                   </div>
                   <p>It was good working with Sarosh, unfortunately we were all held up with site works after we handed over the project to him so actually could not get much time to brief him changes, but his team was very patient and understood our requirement correctly and he was very open to take up the changes even.</p>
                   <div className="star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
