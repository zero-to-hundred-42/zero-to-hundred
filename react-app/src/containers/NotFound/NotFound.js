import React from 'react';
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';

// 유효하지 않은 페이지
const NotFound = () => (
  <Modal className="ui segment">
    <div className="ui active dimmer">
      <div className="ui active modal">
        <div className="header">
          <p className="modal-card-title">유효하지 않은 페이지입니다.</p>
        </div>
        <footer className="actions">
          <button className="ui red button">
            <Link to="/" style={{color:"white"}}>
              취소
            </Link>
          </button>
        </footer>
      </div>
    </div>
  </Modal>
);

export default NotFound;
