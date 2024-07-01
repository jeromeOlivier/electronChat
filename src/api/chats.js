import db from '../db/firestore';

const extractedSnapshots = (snapshot) =>
  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

export const fetchChats = () =>
  db.collection('chats').get().then(extractedSnapshots);
