import React from "react"
import { FooterWrapper } from "./footerStyles/footerStyles"

const Footer = () => {
    return (
        <FooterWrapper>
            <p>&copy; {new Date().getFullYear()}, by Niels Van de Poel</p>
        </FooterWrapper>
    );
}
  
  export default Footer