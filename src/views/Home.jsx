import React, { useEffect } from 'react';
import { AvailableChatList, JoinedChatList, Title } from '../components/';
import { fetchChats } from '../actions/chats';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items);
  useEffect(() => {
    async function fetchAndDispatchChats() {
      dispatch(fetchChats());
    }
    fetchAndDispatchChats();
  }, [dispatch]);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatList chats={chats} />
      </div>
      <div className="col-9 fh">
        <Title />
        <AvailableChatList chats={chats} />
      </div>
    </div>
  );
}
