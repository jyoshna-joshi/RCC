import { React, useState } from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css';
import Logo from '../images/logo.png';
import rovercarclub from '../images/rovercarclub.png';
import { useNavigate } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt='Logo' />
      <img src={rovercarclub} alt='rovercarclub'style={{ width: '1100px', paddingLeft : '6rem', alignContent: 'center'}} />
      <nav>
      <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
        <li><Link to= '/'>Home</Link></li>
        
        <li><Link to= '/selectSaveTemplateContent'>Upload</Link></li>
        <li><Link to= '/selectViewAllContent'>All content</Link></li>

        <li><Link to= '/selectLoginForm'>Admin Login</Link></li>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;
