// import ProfileForm from '../../components/ProfileForm/ProfileForm'
// import NewUserGameForm from '../../components/NewUserGameForm/NewUserGameForm';
// import UsersGamesListForm from '../../components/UsersGamesListForm/UsersGamesListForm';

import { useState } from 'react'


export default function AddPickupsPage({user}) {
  
  const [usersPickups, setUsersPickups] = useState([]);
  
  return (
    <main className="profile-page">
        {/* <ProfileForm user={user} />
        <UsersGamesListForm usersGames={usersGames} setUsersGames={setUsersGames}/>
        <NewUserGameForm user={user} usersGames={usersGames} setUsersGames={setUsersGames}/> */}
    </main>
  );
}