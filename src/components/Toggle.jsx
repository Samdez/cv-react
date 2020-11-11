import { useState } from "react";

const Toggle = ({children, title}) => {
  const [toggle, setToggle] = useState(true);
  return ( 
    <div onClick={() => setToggle(!toggle)}>
      <h3 className="skill-title">{title}</h3>
      {toggle && children}
      <div className="line"></div>
    </div>
   );
}
 
export default Toggle;