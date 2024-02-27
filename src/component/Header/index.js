import './Header.scss';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">

      <div className='HeaderTop'>
        <div className='HeaderTop-Text'>
          <p className='Name'>Guide book | </p>
          <p> Minecraft</p>
        </div>
        <div className='HeaderTop-Right'>
          <img src="/image/nice.gif" className="Nice" alt="Nice"/>
          <p>ru</p>
        </div>
      </div>
        
      
      <div className="HeaderBottom">
            <div className='Buttons'>
            <Link to="/" className='Logotip'>
                <img src="/image/icons256.png" className="Logo" alt="logo"/>
                <h1>GuideBook</h1>
            </Link>
            <Link to="/Items" className='Button'>
                <h2>Предметы</h2>
            </Link>
            <Link to="/Mobs" className='Button'>
                <h2>Мобы</h2>
            </Link>
            <Link to="/Updates" className='Button'>
                <h2>Обновления</h2>
            </Link>
            </div>

            <div className='RightSide'>
                <a href="#" className='RightButton'>
                    <img src="/image/heart.png" className="MenuButton" alt="Like"/>
                </a>
                <a href="#" className='RightButton'>
                    <img src="/image/home.png" className="MenuButtonH" alt="Home"/>
                </a>
            </div>
      </div>
    </div>
  );
}

export default Header;