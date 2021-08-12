import React from 'react';
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
  return (
	<div className="Navigate">
		<div class="ui vertical pointing menu">
      <Link to='/'>
        <a class={home}>
          Home
        </a>
      </Link>
      <Link to='/Board'>
        <a class={board}>
          Board
        </a>
      </Link>
      <Link to='/about'>
        <a class={about}>
          About
        </a>
      </Link>
    </div>
	</div>
  );
}

export default Navigate;