import styled from "styled-components"
import { COLORS } from "../../../constants"

export const FooterWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  background: ${COLORS.BLACK};
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  marginTop: 2rem;

  p {
    font-size: 1.5rem;
    color: ${COLORS.TERTIARY};
  }
`