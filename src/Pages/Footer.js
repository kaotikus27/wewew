import React from "react"
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
    return (
        <>
            <footer>
                <p>Layout Specialist</p>
                <p>I makes soon as possible, You really like my workm if you don't i change
                    this until you like I give you satisfaction result!.
                </p>
                <div className="social-icons">

                    <a href="#"><i className=""><BsFacebook /></i></a>
                    <a href="#"><i className=""><AiFillLinkedin /></i></a>
                    <a href="#"><i className=""><AiFillInstagram /></i></a>

                </div>

                <p className="copyright">Copyright by KylaLacambra</p>
            </footer>

            <div className="a-social-b">
                <a href="#"><i className=""><BsFacebook /></i></a>
                <a href="#"><i className=""><AiFillLinkedin /></i></a>
                <a href="#"><i className=""><AiFillInstagram /></i></a>
            </div>
        </>
    )
}