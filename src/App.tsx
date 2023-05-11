import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header';
import PageOverall from './components/pageOverall';
import Sidebar from './components/sidebar';
import SmoothScroll from './components/SmoothScroll';
import Homepage from './pages/Homepage';
import CustomerProfile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <SmoothScroll>
          <Header />
          <Sidebar />
          <PageOverall>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<CustomerProfile />} />
            </Routes>
          </PageOverall>
        </SmoothScroll>
      </Router>
    </div>
  );
}

export default App;
