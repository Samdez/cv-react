import { Navbar, StyledLink } from '../styles'

const Nav = () => {
  return (
    <Navbar>
      <ul className="nav-list">
        <li className="li-item">
          <StyledLink to='/'>About me</StyledLink>
        </li>
        <li className="li-item">
          <StyledLink to='/experience'>Experience</StyledLink>
        </li>
        <li className="li-item">
        <StyledLink to='/contact'>Contact</StyledLink>  
        </li>
      </ul>
    </Navbar>
  );
}

export default Nav;