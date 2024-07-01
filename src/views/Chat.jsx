import React from 'react';
import { useParams } from 'react-router-dom';
import { ChatUserList, ChatMessageList } from '../components/';
import { Title } from '../views/';

export default function Chat() {
  const params = useParams();

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <Title id={params.id} />
        <ChatMessageList />
      </div>
    </div>
  );
}
