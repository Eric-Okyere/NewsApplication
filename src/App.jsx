import { Route,  Routes } from "react-router-dom"
import HomePage from "../src/Pages/Home/HomePage"
import Detail from "./Pages/Detail/Detail"
import RegisterPage from "./register/RegisterPage"
import { Toaster } from 'react-hot-toast'
import LoginPage from "./Pages/login/LoginPage"
import ProfilePage from "./Pages/profile/ProfilePage"




function App() {
 

  return (
    <div className="App font-opensans">
      <Routes>
        <Route index   path="/" element={<HomePage />} />
        <Route   path="/blog/:id" element={<Detail />} />
        <Route   path="/register" element={<RegisterPage /> } />
        <Route   path="/login" element={<LoginPage /> } />
        <Route   path="/profile" element={<ProfilePage /> } />
      </Routes>
    
    <Toaster />
    </div>
  )
}

export default App
