import styled from "styled-components"

export const Header = styled.header`
  background: ${props => props.theme.primaryColor};
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`
