import React, { useEffect } from 'react';
import { AvailableChatList, JoinedChatList, Title } from '../components/';
import { fetchChats } from '../actions/chats';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items);
  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        {JSON.stringify(chats)}
        <JoinedChatList />
      </div>
      <div className="col-9 fh">
        <Title />
        <AvailableChatList />
      </div>
    </div>
  );
}
