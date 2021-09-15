import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'
 
const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Hooks</Link>
                </li>
                <li>
                    <Link to="/UseState">useState()</Link>
                </li>
                <li>
                    <Link to="/UseEffect">useEffect()</Link>
                </li>
                <li>
                    <Link to="/UseContext">useContext()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu