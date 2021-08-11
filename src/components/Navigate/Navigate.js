import React from 'react';
import './Navigate.css'

const Navigate = () => (
	<div className="Navigate">
		<div class="ui vertical menu">
  <a class="active teal item">
    Inbox
    <div class="ui teal left pointing label">1</div>
  </a>
  <a class="item">
    Spam
    <div class="ui label">51</div>
  </a>
  <a class="item">
    Updates
    <div class="ui label">1</div>
  </a>
  <div class="item">
    <div class="ui transparent icon input">
      <i class="search icon"></i>
    </div>
  </div>
	</div>
	</div>
);

export default Navigate;