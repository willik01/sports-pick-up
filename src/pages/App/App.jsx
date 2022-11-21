import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
// import NewOrderPage from '../NewOrderPage/NewOrderPage'
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

import NavBar from '../../components/NavBar/NavBar'
import PickUpsIndexPage from '../PickUpsIndexPage/PickUpsIndexPage'
import ProfilePage from '../ProfilePage/ProfilePage';



export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<PickUpsIndexPage />} />
            <Route path="/pickups" element={<PickUpsIndexPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
          </Routes>
        </>
        :
        <AuthPage user={user} setUser={setUser}/>
      }
    </main>
  );
}