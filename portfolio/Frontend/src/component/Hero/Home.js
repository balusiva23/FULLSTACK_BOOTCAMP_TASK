import React from "react"
import "./Home.css"
//import hero from "../pic/hero.png"
import hero from "../pic/mypic.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Siva Kumar</span>
            </h1>
            <h2>
              a
              <span>
                {/* " Professional Coder.", " Developer." */}
                <Typewriter words={["  Full Stack.","  Php Web", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>To become a successful professional in a highly competitive
            technological world where performance is rewarded with new
            challenging responsibilities and to serve a reputed growth-oriented
            industry in the field of design, development, and maintenance
            .</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  {/* <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button> */}
                  <a className='btn_shadow' href="https://www.linkedin.com/in/sivakumar-b-6863891b1" rel="noreferrer" target="_blank">
                    <i class='fab fa-linkedin-in'></i>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                {/* <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button> */}
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
