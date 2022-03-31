import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Nav() {

    const [toggle, setToggle] = React.useState("active")

    function toggleActive() {
        setToggle(prevState => !prevState)
    }

    return (
        <>
            <nav>
                <a href="Main" className="logo">Layout Specialist</a>
                <ul >
                    <NavLink to={"/Main"} ><a href="#" >HOME</a>
                    </NavLink >
                    <NavLink to={"/About"} ><a href="#">About</a></NavLink>
                    <NavLink to={"/Contact"} ><a href="#">Contact</a></NavLink>
                    <NavLink to={"/Service"} ><a href="#">Service</a></NavLink>
                </ul>
            </nav>
        </>
    )
}