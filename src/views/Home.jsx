import React, { useEffect } from 'react';
import { AvailableChatList, JoinedChatList, Title } from '../components/';
import { fetchChats } from '../api/chats';

export default function Home() {
  useEffect(() => {
    fetchChats().then((chats) => {
      debugger;
    });
  });
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
