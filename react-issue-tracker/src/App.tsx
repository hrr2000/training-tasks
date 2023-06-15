import React, { useEffect } from 'react';
import './App.css';
import AppTitle from './components/atoms/AppTitle';
import HomePage from './pages/HomePage';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import AppViewModel from './viewmodels/AppViewModel';

function App() {
  const { loadIssues, issues } = AppViewModel();

  useEffect(() => {
    loadIssues().catch(console.error);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <div className="px-5">
            <NavLink to="/">
              <AppTitle title={'WebRTC Issue Viewer'} />
            </NavLink>
          </div>
        </header>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage issues={issues} />} />
            <Route path="issues/:id" element={<HomePage issues={issues} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
