import React from 'react';
import { ChatUserList, ChatMessageList } from '../components/';
import { Title } from '../views/';

export default function Chat() {
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <Title />
        <ChatMessageList />
      </div>
    </div>
  );
}
