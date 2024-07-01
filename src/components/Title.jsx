import React from 'react';

export default function Title({ id }) {
  return (
    <div className="chat-name-container">
      {id ? (
        <span className="name">Channel {id}</span>
      ) : (
        <span className="name">Choose your channel</span>
      )}
    </div>
  );
}
