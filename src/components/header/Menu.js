import React from "react"
import { Link } from "gatsby"

const Menu = ({ menuItems }) => {
    return (
        <nav>
            <ul>
                {menuItems.map(({ node: item }, i) => (
                    <li key={i}>
                        <Link activeClassName="nav-active" to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Menu