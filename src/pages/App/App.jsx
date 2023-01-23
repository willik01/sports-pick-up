import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import * as usersGameAPI from '../../utilities/usersGame-api';
import * as pickupsAPI from '../../utilities/pickups-api'

import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import PickupsIndexPage from '../PickupsIndexPage/PickupsIndexPage'
import ProfilePage from '../ProfilePage/ProfilePage';
import AllPickupsListForm from '../../components/AllPickupsListForm/AllPickupsListForm'
import PickupDetailPage from '../PickupDetailPage/PickupDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [usersGames, setUsersGames] = useState([]);
  const [userGameEnums, setUserGameEnums] = useState([])
  const [skillLevelEnums, setSkillLevelEnums] = useState([])
  // const [competitivenessEnums, setCompetitivenessEnums] = useState(['low', 'medium', 'high']) //ACTION: add query to pull db enums
  const [competitivenessEnums, setCompetitivenessEnums] = useState([]) //ACTION: add query to pull db enums
  //All available pickups
  const [allPickups, setAllPickups] = useState([]);

  useEffect(function() {
    //Get all pickups
    async function getAllPickups() {
      const tempAllPickups = await pickupsAPI.getAllPickups();
      setAllPickups(tempAllPickups);
      }
    getAllPickups();

    if (user) {
      //Get user's games
      async function getUsersGames() {
            const tempUsersGames = await usersGameAPI.getUsersGames();
            setUsersGames(tempUsersGames);
            }
        getUsersGames();

      //Get games enums from DB  
      async function getUserGameEnums() {
          const tempUserGameEnums = await usersGameAPI.getUserGameEnums();
          setUserGameEnums(tempUserGameEnums)
          } 
      getUserGameEnums();
      
      //Get skill level enums from DB  
      async function getSkillLevelEnums() {
        const tempSkillLevelEnums = await usersGameAPI.getSkillLevelEnums();
        setSkillLevelEnums(tempSkillLevelEnums)
        } 
        getSkillLevelEnums();
        
      // Get competitiveness enums from DB  
      async function getCompetitivenessEnums() {
        const tempCompetitivenessEnums = await usersGameAPI.getCompetitivenessEnums();
        setCompetitivenessEnums(tempCompetitivenessEnums)
        } 
        getCompetitivenessEnums();
    }
  }, [user]); 
  
  return (
    <main className="App container" >
        { user ? 
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" 
                element={<PickupsIndexPage 
                user={user} 
                usersGames={usersGames} 
                allPickups={allPickups}
                setAllPickups={setAllPickups}
                userGameEnums={userGameEnums}
                skillLevelEnums={skillLevelEnums} 
                competitivenessEnums={competitivenessEnums}    
              />} />
              <Route path="/pickups" 
                element={<PickupsIndexPage 
                user={user} 
                usersGames={usersGames} 
                allPickups={allPickups}
                setAllPickups={setAllPickups}
                userGameEnums={userGameEnums}
                skillLevelEnums={skillLevelEnums}      
                competitivenessEnums={competitivenessEnums}
              />} />
              <Route path="/profile" 
                element={<ProfilePage 
                user={user} 
                usersGames={usersGames} 
                setUsersGames={setUsersGames} 
                userGameEnums={userGameEnums}
                skillLevelEnums={skillLevelEnums}
                competitivenessEnums={competitivenessEnums}
              />} />
              <Route path="/pickups/:id"
                element={<PickupDetailPage 
                  allPickups={allPickups}
                />} />
            </Routes>
          </>
          :
          <>
            <nav>
                <Link to="/signinup" state={{ from: "app" }}> <b> Sign-In, Sign-Up</b></Link>
            </nav>
            <Routes>
                <Route path="/signinup" 
                  element={<AuthPage 
                  user={user} 
                  setUser={setUser}
                /> }/>
                <Route path="/pickups/:id"
                  element={<PickupDetailPage 
                    allPickups={allPickups}
                  />} />
                <Route path="/"
                  element={<AllPickupsListForm 
                    allPickups={allPickups}
                    user={user}
                  />} />
            </Routes>

          {/* <AllPickupsListForm 
                user={user} 
                usersGames={usersGames} 
                allPickups={allPickups}
                setAllPickups={setAllPickups}
                userGameEnums={userGameEnums}
                skillLevelEnums={skillLevelEnums} 
                competitivenessEnums={competitivenessEnums}    
              />   */}
            </>
      }
    </main>
  );
}