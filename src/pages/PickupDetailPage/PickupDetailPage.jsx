import {useParams} from "react-router-dom"

import {useEffect, useState} from 'react'
import * as profilesAPI from '../../utilities/profiles-api';
import * as usersAPI from '../../utilities/users-api';


export default function PickupsDetailPage(
  {
    allPickups, 
  }) {
      
      const pickupId = useParams();
      const pickup = allPickups.find(pu => pu._id === pickupId.id);
      const [thisCreatorUser, setThisCreatorUser] = useState([]);
      const [PUOwner, setPUOwner] = useState([]);
      
      useEffect(function() {
          async function getPUOwnerProfile() {
            setThisCreatorUser(await profilesAPI.getPUOwnerProfile(pickup.creatorUser));
          }
          getPUOwnerProfile();

          async function getPUOwnerName() {
            setPUOwner(await usersAPI.getPUOwnerName(pickup.creatorUser));
          }
          getPUOwnerName();
      }, [])
      
  return (
    <main>
          <h1>pickup detal page</h1>
          <table className="styled-table">
            <thead>
            <tr>
                <th>Sport</th>
                <th>Players Needed</th>
                <th>Skill Level</th>
            </tr><tr>
                <th>Location</th>
                <th>Competitiveness</th>
                <th>Date</th>
            </tr><tr>
                <th>Time</th>
                <th>Duration</th>
                <th>Req Loc</th>
            </tr><tr>
                <th>Req Lang</th>
                <th>Req Country</th>
                <th>Req Name</th>
            </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{pickup.game}</td>
                        <td>{pickup.gameLocation}</td>
                        <td>{pickup.skillLevel}</td>
                        {/* <td>{thisCreatorUser.gender}</td> */}
                    </tr>
                    <tr>                        
                        <td>{pickup.playersRequested}</td>
                        <td>{pickup.competitiveness}</td>
                        <td>{pickup.durationRequested}</td>                  
                    </tr>          
                    <tr>
                        <td>{new Date(pickup.dateRequested).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }</td>
                        <td>{new Date(pickup.timeRequested).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                        <td>{thisCreatorUser.location}</td>                
                    </tr>    
                    <tr>
                        <td>{thisCreatorUser.language}</td>
                        <td>{thisCreatorUser.country}</td>
                        <td>{PUOwner.name}</td>
                    </tr>          
            </tbody>
        </table>
    </main>
    )
}