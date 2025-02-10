import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Indexpage from './pages/indexPage/indexpage';
import './App.css';
import DetailsPage from './pages/detailsPage/detailsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Indexpage />} />
            <Route path="/job/:jobId" element={<DetailsPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
