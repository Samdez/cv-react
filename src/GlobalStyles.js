import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: rgb(55,71,214);
background: linear-gradient(90deg, rgba(55,71,214,1) 0%, rgba(0,164,255,1) 100%);
  font-family: 'Poppins', sans-serif;
  line-height: 1.2rem;
  letter-spacing: .1rem
}
h2 {
  font-weight: lighter;
  font-size: 4rem;
  color: white;
  margin-bottom: 2rem;
}
p{
  padding: 1.5rem 0rem;
  color: white;
  font-size: 1.4rem;
  line-height: 150%normal;
}
button{
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: white;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  margin-bottom: 8rem;
  border-radius: 10px;
  &:hover{
    background: white;
    color: rgb(55,71,214);
  }
}
`;

export default GlobalStyle;