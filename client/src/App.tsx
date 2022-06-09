import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Explore from './pages/Explore/Explore';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Link to="explore">Explore</Link>
        <Routes>
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App