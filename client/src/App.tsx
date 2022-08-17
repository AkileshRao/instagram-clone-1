import { BrowserRouter, Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PrivateRoutes from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UploadPost from './pages/UploadPost';

const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="/main" element={<PrivateRoutes />}>
            <Route path='/main/dashboard' element={<Dashboard />} />
            {/* <Route path='/main/upload-post' element={<UploadPost />} /> */}
          </Route>
          
          <Route path='*' element={<Navigate to={"/login"} />} />
        </Routes>
      </>
  )
}

export default App