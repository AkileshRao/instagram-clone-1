import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore';

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </div>  
    </BrowserRouter>
  )
}

export default App