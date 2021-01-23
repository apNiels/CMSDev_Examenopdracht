import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Menu from "./Menu"

const Header = ({ siteTitle }) => {
    const {
        logo,
        wpcontent: { menuItems },
    } = useStaticQuery(graphql`
    query {
        logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
                fixed(quality: 100, width: 200) {
                    ...GatsbyImageSharpFixed_withWebp
                }
            }
        }
        wpcontent {
            menuItems {
                edges {
                    node {
                        label
                        path
                    }
                }
            }
        }
    }`);

    return (
        <header
            style={{
                background: `rebeccapurple`,
                marginBottom: `1.45rem`,
            }}
        >
            <Link to="/">
                <Img alt={`logo ${siteTitle}`} fixed={logo.childImageSharp.fixed} />
            </Link>
            <Menu menuItems={menuItems.edges} />
        </header>
    );
}

export default Header;