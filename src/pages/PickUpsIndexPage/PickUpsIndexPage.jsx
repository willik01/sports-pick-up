import './PickUpsIndexPage.css';
import { useState } from 'react'
import NewPickUpForm from '../../components/NewPickUpForm/NewPickUpForm'



export default function PickUpsIndexPage(
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

  return (
        <main>
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
            <h1>All Pickups</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Sport</th>
                  <th>Players Needed</th>
                  <th>Skill Level</th>
                  <th>Location</th>
                  <th>competitiveness</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                  {allPickups.map((pickup, key) => (
                  <tr key={key}>
                    <td>{pickup.game}</td>
                    <td>{pickup.playersRequested}</td>
                    <td>{pickup.skillLevel}</td>
                    <td>{pickup.gameLocation}</td>  
                    <td>{pickup.competitiveness}</td>
                    <td>pickup.dateTimeRequested.toLocaleDateString</td>
                    <td>pickup.durationRequested</td>
                  </tr>          
                  ))}
                </tbody>
            </table> 
        </main>
    )
}