import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header';
import PageOverall from './components/pageOverall';
import Sidebar from './components/sidebar';
import SmoothScroll from './components/SmoothScroll';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />

      <Router>
        <SmoothScroll>
          <PageOverall>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </PageOverall>
        </SmoothScroll>
      </Router>
    </div>
  );
}

export default App;
