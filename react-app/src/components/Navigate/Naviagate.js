import React, { useState } from 'react';
import './Navigate.css';
import { Link } from 'react-router-dom';

function Navigate({ location, history }) {
  let home = 'item';
  let about = 'item';
  let info = 'item';
  let board = 'item';

  if (location.pathname === '/') {
    home = 'active blue item';
  } else if (location.pathname === '/about') {
    about = 'active blue item';
  } else if (location.pathname === '/info') {
    info = 'active blue item';
  } else if (location.pathname === '/products') {
    board = 'active blue item';
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/*메뉴3줄버튼*/}
      <a href="#!" className="navbar_toggleBtn" onClick={showSidebar}>
        <i className="bars icon"></i>
      </a>
      {/*Navigate: true, Navigate active: false*/}
      <div className={sidebar ? 'Navigate' : 'Navigate active'}>
        <div className="ui vertical menu navbar">
          <Link to="/">
            <a className={home} href="#!">
              코로나OUT
            </a>
          </Link>
          <Link to="/about">
            <a className={about} href="#!">
              소개
            </a>
          </Link>
          <Link to="/info">
            <a className={info} href="#!">
              정보
            </a>
          </Link>
          <Link to="/boards">
            <a className={board} href="#!">
              방명록
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigate;
