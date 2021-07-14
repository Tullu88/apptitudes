import './App.css';
import logo from './images/Apptitudes-Logo-3t.png';
import './fonts.css';
import talal from './images/talal.jpg';
import frank from './images/frank.jpg';
import antonio from './images/antonio2.jpeg';

function App() {
  return (
    <div className="App">

      <div className="first-frame">
        <div className="items-container">
            <div className="logo-container">
                <img src={logo} className="logo"/>
                <h1 className="logotype">Apptitudes</h1>
            </div>
            <div className="subtext-container">
              <h3 className="f1-title">We are an Ed-tech startup based in Barcelona<br/> and incubated by Demium,
              and our mission is: 
                </h3>
                <p className="f1-text">to reduce school dropouts through a video game that gamifies the learning
                of mathematics, <br/> through a compelling narrative that transmits positive values
               <br/> and goes in parallel with the academic school year.</p>
            </div>
          </div>
      </div>

      <div className="second-frame">
        <h1 className="second-frame-title">The Team</h1>
        <div className="foto-frame-container">
          <div className="foto-frame-1">
                <img className="foto" src={talal}></img>
                <strong className="names">Talal Harmouch</strong>
                <p className="occupation">Digital</p>
            </div>
            <div className="foto-frame-2">
                <img className="foto" src={frank}></img>
                <strong className="names">Frank Peralta</strong>
                <p className="occupation">Sales</p>
            </div>
            <div className="foto-frame-3">
                <img className="foto-3" src={antonio}></img>
                <strong className="names">Antonio Soccio</strong>
                <p className="occupation">Marketing</p>
            </div>
        </div>
      </div>

      {/* <div className="third-frame">
        <h3 className="email">Email registration coming soon</h3>
      </div> */}
      
      <div className="fourth-frame">
        <div className="socials">
            <p className="footer">Soon on social media</p>
        </div>
        <img src={logo} className="logo-footer"/>
        <p  className="address">
          Utopicus Torre Marenostrum, Demium <br/>
          Carrer dels Pinzón, 2, 08003<br/>
          Catalunya, Barcelona, Spain
        </p>
      </div>
      {/* <img src={logo} alt="logo" className="logo"/>
      <h2>Barcelona based startup working on making learning a fun experience with the goal of reducing school dropout.</h2>
      <h3>Website under construction</h3> */}
    </div>
  );
}

export default App;
