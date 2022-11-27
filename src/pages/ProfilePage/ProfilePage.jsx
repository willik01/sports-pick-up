import ProfileForm from '../../components/ProfileForm/ProfileForm'
import NewUserGameForm from '../../components/NewUserGameForm/NewUserGameForm';
import UsersGamesListForm from '../../components/UsersGamesListForm/UsersGamesListForm';
import * as usersGameAPI from '../../utilities/usersGame-api';

import './ProfilePage.css';
import { useState, useEffect } from 'react'


export default function ProfilePage({user}) {
  
  const [usersGames, setUsersGames] = useState([]);
  const [userGameEnums, setUserGameEnums] = useState([])
  const [skillLevelEnums, setSkillLevelEnums] = useState([])
    //Get user's games

  useEffect(function() {
    async function getUsersGames() {
        const tempUsersGames = await usersGameAPI.getUsersGames();
        setUsersGames(tempUsersGames);
        }
    getUsersGames();
  
    async function getUserGameEnums() {
        const tempUserGameEnums = await usersGameAPI.getUserGameEnums();
        setUserGameEnums(tempUserGameEnums)
        } 
    getUserGameEnums();

    async function getSkillLevelEnums() {
      const tempSkillLevelEnums = await usersGameAPI.getSkillLevelEnums();
      setSkillLevelEnums(tempSkillLevelEnums)
      } 
      getSkillLevelEnums();
      
  }, []); 
  
  return (
    <main className="profile-page">
        <ProfileForm user={user} />
        <UsersGamesListForm usersGames={usersGames} />
        <NewUserGameForm 
          user={user} 
          usersGames={usersGames} 
          setUsersGames={setUsersGames} 
          userGameEnums={userGameEnums}
          skillLevelEnums={skillLevelEnums}
           />
    </main>
  );
}