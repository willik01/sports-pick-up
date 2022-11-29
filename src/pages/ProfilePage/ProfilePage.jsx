import ProfileForm from '../../components/ProfileForm/ProfileForm'
import NewUserGameForm from '../../components/NewUserGameForm/NewUserGameForm';
import UsersGamesListForm from '../../components/UsersGamesListForm/UsersGamesListForm';
// import * as usersGameAPI from '../../utilities/usersGame-api';

import './ProfilePage.css';
// import { useState, useEffect } from 'react'


export default function ProfilePage({user, usersGames, setUsersGames, userGameEnums, skillLevelEnums, competitivenessEnums}) {
  
  
  return (
    <main className="profile-page">
        <ProfileForm user={user} />
        <UsersGamesListForm usersGames={usersGames} />
        {/* wait for enums to populate from the DB */}
        {skillLevelEnums.length && userGameEnums.length && competitivenessEnums.length 
          ? 
          <NewUserGameForm 
            user={user} 
            usersGames={usersGames} 
            setUsersGames={setUsersGames} 
            userGameEnums={userGameEnums}
            skillLevelEnums={skillLevelEnums}
            competitivenessEnums={competitivenessEnums}
            />
          : 'loading...'};
    </main>
  );
}