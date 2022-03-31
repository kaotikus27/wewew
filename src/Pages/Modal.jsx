import React from 'react'
import display from "../images/Profile.jpg"
const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <div className="overlay">
            <div className="modalContainer">
                <img src={display} alt="" srcset="" />
                <div className="modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                    <div className="content">
                        <p>Do you want A</p>
                        <h1>$20 Credit</h1>
                        <p>for your first Trade?</p>
                    </div>
                    <div className="btnContainer">
                        <button className="btnPrimary">
                            <span className="bold">Yes</span>, I love this!
                        </button>
                        <button className="btnOutline">
                            <span className="bold">NO</span>, Thanks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal