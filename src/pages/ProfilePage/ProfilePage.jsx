import { useState } from 'react'

import NavBar from '../../components/NavBar/NavBar'

export default function ProfilePage(user) {
  const[ profile, setProfile] = useState([])
    
  return (
    <main className="profile-page">
        {console.log("i am in the profile page")}
    </main>
  );
}