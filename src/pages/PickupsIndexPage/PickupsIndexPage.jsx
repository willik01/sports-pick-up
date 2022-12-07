import './PickupsIndexPage.css';
import { useState } from 'react'
import NewPickUpForm from '../../components/NewPickupForm/NewPickupForm'
import AllPickupsListForm from '../../components/AllPickupsListForm/AllPickupsListForm'

export default function PickupsIndexPage(
  {
    user, 
    usersGames, 
    userGameEnums, 
    skillLevelEnums, 
    competitivenessEnums, 
    allPickups, 
    setAllPickups
  }) {
  // const [newUserPickup, setNewUserPickup] = useState([]);
  //pickups created by user
  const [usersPickups, setUsersPickups] = useState([]);
  
  {console.log('levels: ',skillLevelEnums , 'games', userGameEnums, 'compet', competitivenessEnums)}
  

  return (
    <main>
          <AllPickupsListForm 
            allPickups={allPickups}
            setAllPickups={setAllPickups}
          />
          {/* wait for enums to populate from the DB */}
            {skillLevelEnums.length && userGameEnums.length && competitivenessEnums.length 
            ? 
              <NewPickUpForm 
              user={user} 
              usersGames={usersGames} 
              // newUserPickup={newUserPickup}
              // setNewUserPickup={setNewUserPickup}
              usersPickups={usersPickups}
              setUsersPickups={setUsersPickups}
              allPickups={allPickups}
              setAllPickups={setAllPickups}
              userGameEnums={userGameEnums}
              skillLevelEnums={skillLevelEnums}
              competitivenessEnums={competitivenessEnums}
              />
            : 'Loading...'}

        </main>
    )
}