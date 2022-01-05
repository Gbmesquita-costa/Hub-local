import React from "react"
import "../css/Nav.css"

function Nav (props) {
    
    return (
        <nav className="nav">
            <ul>
                <li><a href="/">Local</a></li>
                <li><a href="/">Hub</a></li>
                <li><a href="/">Contato</a></li>
                <li><a href="/">empresas</a></li>
            </ul>
        </nav>
    )
}

export default Nav