import './App.css';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import EntertainerDetailsPage from './pages/EntertainerDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent'; // make sure path is correct

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/entertainers/:id" element={<EntertainerDetailsPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
