import React from 'react';
import Img1 from "../assets/Fuck1.jpg"
import Img2 from "../assets/Fuck2.jpg"
import Img3 from "../assets/Fuck3.jpg"
import Img4 from "../assets/Fuck4.jpg"
import Img5 from "../assets/Fuck5.jpg"
import Img6 from "../assets/Fuck6.jpg"
import Img7 from "../assets/Fuck7.jpg"
import Img8 from "../assets/Fuck8.jpg"
import Img9 from "../assets/Fuck9.jpg"
import Img10 from "../assets/Fuck10.jpg"

const Dashboard = ({ onLogout }) => {
  return (
    <div className="Dashboard">
      <div className="dashboard">

        <img src={Img1} alt="Fuck you image" className='imgs' />
        <img src={Img2} alt="Fuck you image" className='imgs' />
        <img src={Img3} alt="Fuck you image" className='imgs' />
        <img src={Img4} alt="Fuck you image" className='imgs' />
        <img src={Img5} alt="Fuck you image" className='imgs' />
        <img src={Img6} alt="Fuck you image" className='imgs' />
        <img src={Img7} alt="Fuck you image" className='imgs' />
        <img src={Img8} alt="Fuck you image" className='imgs' />
        <img src={Img9} alt="Fuck you image" className='imgs' />
        <img src={Img10} alt="Fuck you image" className='imgs' />
      </div>
        <h1>FUCK YOU BROO !!!!</h1>
      <button onClick={onLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
