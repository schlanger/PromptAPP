import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SecurityCenter from './pages/SecurityCenter';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/security" element={<SecurityCenter />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
