import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
     <div className="header">
      <img src="src/Images/kec-1.webp" alt="" />
      <div className="title">
      <h1>IETE SOUTH ZONE SEMINAR & ISF CONGRESS</h1>
      <br />
      <h3>c/o KONGU ENGINEERING COLLEGE</h3>
      </div>
      <img src="src/Images/iete-1.webp" alt="" className='iete'/>
       </div>
       <div className="abovefooter">
       
       <div className="body"><br /><br /><br />
       <h1>IETE ERODE CENTRE</h1><br />
        <h1>BUILDING DIGITAL FUTURE CUTTING-EDGE INNOVATION</h1>  
        <br /><br />
        <h2>PAPER AND PROJECT EXPO</h2>
       </div>
       <br />
       <div className="abovecard">
        <div className="bro">
          <img src="src/Images/bro.jpg" alt="" />
        </div>
       <div className="instruct">
         <center>
         <h1>INSTRUCTIONS</h1>
          <div className="line">

          </div>
         </center>
          <br />
          <ul>
            <li>Maximum 4 members per team.</li>
            <br />
            <li>Minimum 1 member per team.</li>
            <br />
            <li>Teams will be shortlisted based on Abstract submitted.</li>
            <br />
            <li>Registration fees Rs.200 (for IETE Member) ,Rs.250 (for non IETE Members)
              per member (Only for shortlisted teams)</li>
            <br />
            <li>Last date for registration March 5,2025.</li>
            <br />
            <li>Shortlisted teams will be announced on March 10,2025.</li>
            <br />
            <li>Final Submition on March 15</li>
          </ul>
        </div>
       </div>
       <div className="card-container">
        
        <div className="card1">
          <div className="paper"></div>
          <p className='p'>For Paper Presentation</p>
          <br /><br /><br />
           <a href="https://forms.gle/6jQTuvUsrj7SGBm6A"> <button>Register Here</button></a>
        </div>
        <div className="card2">
          <div className="project"></div>
          <p className='p'>For Project Presentation</p>
          <br /><br /><br />
          <a href="https://forms.gle/wbJhW2DT6Xorva8k6"> <button>Register Here</button></a>
        </div>
       </div>
       <br />
       <br />
       <div className="footer">
      <div className="footer1">
          
        <div  className="collegename">
          
          <h2>KONGU ENGINEERING COLLEGE</h2>
        </div>
        <div className="address">
          <b>Address:</b>&nbsp;
        PERUNDURAI,ERODE - 638060
        </div>
        <div  className="phone">
          <b>Phone Number:&nbsp;</b>

        9342910364 ,9488042479
          <br />
          <br />
        </div>
        
        </div>
        
         
       </div>
       </div>   
       
    </div>
  )
}

export default Home
