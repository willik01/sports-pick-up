import * as pickupsAPI from '../../utilities/pickups-api'
import './PickUpsIndexPage.css';
import { useState } from 'react'
import NewPickUpForm from '../../components/NewPickUpForm/NewPickUpForm'



export default function PickUpsIndexPage({user, usersGames, userGameEnums, skillLevelEnums, competitivenessEnums}) {
  // const [newUserPickup, setNewUserPickup] = useState([]);
  //pickups created by user
  const [usersPickups, setUsersPickups] = useState([]);
  //All available pickups
  const [allPickups, setAllPickups] = useState([]);

  return (
        <main>
            <NewPickUpForm 
              user={user} 
              usersGames={usersGames} 
              // newUserPickup={newUserPickup}
              // setNewUserPickup={setNewUserPickup}
              usersPickups={usersPickups}
              setUsersPickups={setUsersPickups}
              // allPickups={allPickups}
              setAllPickups={setAllPickups}
              userGameEnums={userGameEnums}
              skillLevelEnums={skillLevelEnums}
              competitivenessEnums={competitivenessEnums}
            />
            <h1>All Pickups</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Players Needed</th>
                  <th>Sport</th>
                  <th>Skill Level</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <% pickups.forEach(function(p) { %>
                  <tr>
                    <td><%= p.playersRequested %></td>
            
                    <% p.gameRequested.forEach(function(detail) { %>
                      <td><%= detail.userGame %></td>
                      <td><%= detail.skillLevel %></td>
                      <td><%= detail.gameLocation %></td>
                      <% }); %>  
                      <td><%= p.dateTimeRequested.toLocaleDateString() %><br><%= p.dateTimeRequested.toLocaleTimeString() %></td>
                    <td><%= p.durationRequested %></td>
                    <!-- <td><img alt="avatar" src="<%= p.userAvatar %>" referrerpolicy="no-referrer" ><%= p.userName %></td> -->
                    <td><a href="/pickups/<%= p._id %>">DETAILS</a></td>
                  </tr>
                  <% }); %> */}
                </tbody>
            </table> 
        </main>
    )
}