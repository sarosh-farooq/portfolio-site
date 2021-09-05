import React,{useState} from 'react'
import './static/css/contact_us.css'

const Contact_us = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        subject: "",
        detail: "",
      });
    
      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
    
        setUserData({ ...userData, [name]: value });
      };
    
      // connect with firebase
      const submitData = async (event) => {
        event.preventDefault();
        const { name, email, subject, detail } = userData;
    
        if (name && email && subject && detail) {
          const res = fetch(
             "put your own database URL",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                subject,
                detail,
              }),
            }
          );
    
          if (res) {
            setUserData({
              name: "",
              email: "",
              subject: "",
              detail: "",
            });
            alert("Data Stored");
          } else {
            alert("plz fill the data");
          }
        } else {
          alert("plz fill the data");
        }
      };
    


    return (
        <div id='contact' className=' contact'>
            <div className="title">
                <h2>Get In Touch</h2>
                <div className="line"></div>
                <div className="line2"></div>
                <div className="line2"></div>
            </div>
            <form className="con_form" method="POST">
                   <div className="box1">
                       <input type="text" placeholder='Name' name='name' value={userData.name}
                          onChange={postUserData}/>
                       <input type="email" placeholder='Email' name='email' value={userData.email}
                          onChange={postUserData} />
                   </div>
                   <input type="text" placeholder='Subject' name='subject' value={userData.subject}
                          onChange={postUserData} />
                   <textarea placeholder='Start writing...' name="detail" id="" cols="30" rows="10" value={userData.detail}
                          onChange={postUserData}></textarea>
                   <button type="submit" className="btn"  onClick={submitData}>Send Message</button>
            </form>
        </div>
    )
}

export default Contact_us
