import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Show_porfolio from './Show_porfolio'
import './static/css/portfolio.css'

const Portfolio = ({ data }) => {
    const [category, setcategory] = useState("All")
    const [datas, setdata] = useState([])
    const onChange = (cate, val) => {
        setcategory(cate)
        let d = data.find((d) => d.type === cate)
        setdata(d.Pictures)

        let option = value.current.children

        for (let index = 0; index < option.length; index++) {
            option[index].classList.remove('selected')
        }


        option[val].classList.add('selected')

    };


    const value = useRef(null);



    useEffect(() => {
        onChange('All', 0)

    }, [0])




    return (
        <div id='portfolio' className='portfolio'>
            <div className="box1">
                <div className="pictures">
                    {datas.map((pic) => {
                        return (
                            <a target="_blank" href={pic.href}><img src={pic.Picture} alt="" /></a>
                        )

                    }
                    )
                    }
                </div>
            </div>
            <div className="box2">
                <div>
                    <h2>Some of My <br />Creative Work</h2>
                    <div className="line"></div>
                    <p>I worked on few project in last two years. <br /> Here are some of them</p>
                </div>
                <div ref={value} id='dropdown' className="dropdown">
                    <option onClick={() => onChange('All', 0)} value="">All work</option>
                    <option onClick={() => onChange('Design', 1)} value="">Design</option>
                    <option onClick={() => onChange('Development', 2)} value="">Development</option>
                    <option onClick={() => onChange('SEO', 3)} value="">SEO</option>


                </div>
            </div>
        </div>
    )
}

export default Portfolio
