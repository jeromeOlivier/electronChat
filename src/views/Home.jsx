import React from 'react';
import {AvailableChatList, JoinedChatList, Title } from '../components/';

export default function Home() {
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatList />
      </div>
      <div className="col-9 fh">
        <Title />
        <AvailableChatList />
      </div>
    </div>
  );
}
