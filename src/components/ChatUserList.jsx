import React from 'react';
import { avatar001, avatar002 } from '../assets/index';

export default function ChatUserList() {
  return (
    <div className="list-container">
      <div className="chat-search-box">
        <div className="input-group">
          <input className="form-control" placeholder="Search" />
        </div>
      </div>
      <ul className="items">
        <li onClick={() => {}} className="item">
          <div className="item-status">
            <img src={avatar001} alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
            <span className="name mr-2">Some User 1</span>
          </p>
        </li>
        <li onClick={() => {}} className="item">
          <div className="item-status">
            <img src={avatar001} alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
            <span className="name mr-2">Some User 2</span>
          </p>
        </li>
        <li onClick={() => {}} className="item">
          <div className="item-status">
            <img src={avatar002} alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
            <span className="name mr-2">Some User 3</span>
          </p>
        </li>
        <li onClick={() => {}} className="item">
          <div className="item-status">
            <img src={avatar002} alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
            <span className="name mr-2">Some User 4</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
