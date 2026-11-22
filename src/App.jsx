
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DocumentRequest from './pages/DocumentRequest';
import TrackRequest from './pages/TrackRequest';
import RequestHistory from './pages/RequestHistory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-request" element={<DocumentRequest />} />
      <Route path="/track-request" element={<TrackRequest />} />
      <Route path="/request-history" element={<RequestHistory />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
