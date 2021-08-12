import React, { useState } from 'react';
import './Navigate.css'
import { Link } from 'react-router-dom';

function Navigate ({ location, history }) {
  let home = "item";
  let board = "item";
  let about = "item";
  if (location.pathname === '/'){
    home = "active blue item";
  }
  else if (location.pathname === '/board'){
    board = "active blue item";
  }
  else if (location.pathname === '/about'){
    about = "active blue item";
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <a href="#!" class="navbar_toggleBtn" onClick={showSidebar}>
        <i class="bars icon"></i>
      </a>
	  <div className={sidebar ? 'Navigate': 'Navigate active'}>
      <div class="ui vertical menu navbar">
        <Link to='/'>
          <a class={home} href="#!">
            Home
          </a>
        </Link>
        <Link to='/board'>
          <a class={board} href="#!">
            Board
          </a>
        </Link>
        <Link to='/about'>
          <a class={about} href="#!">
            About
          </a>
        </Link>
      </div>
	</div>
  </>
  );
}

export default Navigate;