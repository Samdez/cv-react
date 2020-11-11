import { Navbar, StyledLink } from '../styles'

const Nav = () => {
  return (
    <Navbar>
      <ul>
        <li>
          <StyledLink to='/'>About me</StyledLink>
        </li>
        <li>
          <StyledLink to='/experience'>Experience</StyledLink>
        </li>
        <li>
        <StyledLink to='/contact'>Contact/Info</StyledLink>  
        </li>
      </ul>
    </Navbar>
  );
}

export default Nav;