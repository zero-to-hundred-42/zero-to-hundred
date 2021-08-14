import React from 'react';
import Modal from '../Modal/Modal';

// createPortal - div: Modal 생성
const ModalYesNo = ({ message, onYes, onNo }) => (
  <Modal className="ui segment">
  <div className="ui active dimmer">
    <div className="ui active modal">
      <div className="header">
        <p className="modal-card-title">Confirm</p>
      </div>
      <div className="image content">
        <div className="description">
          <p>{message}</p>
        </div>
      </div>
      <footer className="actions">
        <button className="ui black deny button" onClick={onNo}>
          No
        </button>
        <button
          className="ui positive right labeled icon button"
          onClick={onYes}
        >
          Yes
          <i className="checkmark icon"></i>
        </button>
      </footer>
    </div>
    </div>
  </Modal>
);

export default ModalYesNo;
