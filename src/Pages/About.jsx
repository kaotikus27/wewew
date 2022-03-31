import React from 'react'
import aboutimg from "../images/Profile.jpg"
import expimg from "../images/expimg.png"
import adobe from "../images/adobe.jpg"
import spartan from "../images/sparta.jpg"
import aic from "../images/ai.png"
import "../Pages/About.css"

const About = () => {

    return (
        <>
            <div className="about--container">
                <div className="about--profile">
                    <img className='about--image' src={aboutimg} />
                    <div className="btnContainer">
                        <button className='btnPrimary'>Hire me</button>
                        <button className='btnOutline'>Download CV</button>
                    </div>
                </div>
                <div className="about--content">
                    <p>Kyla Lacambra</p>
                    <p>Layout Builder</p>
                    <p>A highly-organized and hard-working individual with a degree of Computer
                        Science looking to secure a challenging position to gain practical experience and
                        to bring strong sense of dedication and responsibility in your company through
                        my previous educational and work experiences</p>
                </div>
            </div>

            <div className="about--experience--container">
                <div className="exp--content">
                    <h1>EXPERIENCE</h1>
                    <p>Market Researcher</p>
                    <p>Email Support Represetative</p>

                </div>
                <div className="exp--img">
                    <img className='expimg' src={expimg} alt="" />
                </div>
            </div>
            <div className="about--skills--container">
                <div className="skills--img">
                    <img className='expimg' src={adobe} alt="" />
                </div>
                <div className="skills--content">
                    <h1>SKILLS</h1>
                    <p>UI/UX Design</p>
                    <p>CANVA</p>
                    <p>ADOBE Photoshop</p>
                    <p>FIGMA</p>
                    <p>HTML, CSS , JavaScript , </p>
                </div>
            </div>
            <div className="certificate--container">
                <div className="certificate--content">
                    <h1>CERTIFICATE</h1>
                    <p>HUAWEI HCIA - AI COURSE</p>
                    <p>SPARTA: GETTING GROUND ON ANALYTICS</p>
                </div>
                <div className="certificate--img">
                    <img src={spartan} alt="" srcset="" />
                    <img src={aic} alt="" srcset="" />
                </div>
            </div>

        </>
    )
}

export default About