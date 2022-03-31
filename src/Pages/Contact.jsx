import React from "react"
import "./contact.css"
import { BsMailbox } from 'react-icons/bs';


export default function Contact() {
    return (
        <>
            <div className="contact">
                <p>If you have any project in your mind!.</p>
                <button>Let's Work it OUT!</button>
            </div>
            <div className="contact--container">
                <h1 className="contact--tittles">C O N T A C T</h1>
                <div className="contact--content">
                    <p className="get">Get in Touch-<br /><span>work together</span></p>
                    <p>Got a priject? Drop me a line if you want to work together on something<br />
                        exciting. Big or small. Mobile or web.</p>
                </div>
                <h1 className="contact--tittles">A D D R E S S</h1>
                <div className="address--container">
                    <p>block 1 , lot 2 .
                        Champaca Quezon,
                        Philippines</p>
                    <div className="info--container">
                        <h3 className="contact--tittle">Your Name?
                            <input type="text" placeholder="What's your name?" id="" /></h3>
                        <h3 className="contact--tittle">Your Email
                            <input type="text" placeholder="What’s your email address?" id="" /></h3>
                        <h3 className="contact--tittle">Service
                            <input type="text" placeholder="What’s are your interested in?" id="" /></h3>
                        <h3 className="contact--tittle">Budget
                            <input type="text" placeholder="What’s your  budget?" id="" /></h3>
                        <h3 className="contact--tittle">Message
                            <input type="text" placeholder="What’s  your  message?" id="" /></h3>
                    </div>
                </div>
                <button className="c-btn" > <BsMailbox /> <br />  Send message</button>
            </div>
        </>
    )
}