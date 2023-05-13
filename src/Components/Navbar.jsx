import { React, useState } from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css';
import Logo from '../images/logo.png';
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
      <h1>Rover Car Club of Australia</h1>
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
