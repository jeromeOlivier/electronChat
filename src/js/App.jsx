import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from '../store';
import { listenToAuthChanges } from '../actions/auth';

import { NavBar } from '../components/';
import { Home, Settings, Welcome, Chat } from '../views/';

const store = configureStore();

export default function App() {
  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
