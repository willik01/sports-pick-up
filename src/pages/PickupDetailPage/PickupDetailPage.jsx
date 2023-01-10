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

          // async function getPUOwnerName() {
          //   setPUOwner(await usersAPI.getPUOwnerName(pickup.creatorUser));
          // }
          // getPUOwnerName();

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
                <th>Location</th>
                <th>Competitiveness</th>
                <th>Date</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Requestor</th>
                <th>Req Loc</th>
                <th>Req Lang</th>
                <th>Req country</th>
            </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{pickup.game}</td>
                        <td>{pickup.playersRequested}</td>
                        <td>{pickup.skillLevel}</td>
                        <td>{pickup.gameLocation}</td>  
                        <td>{pickup.competitiveness}</td>
                        <td>{new Date(pickup.dateRequested).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }</td>
                        <td>{new Date(pickup.timeRequested).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                        <td>{pickup.durationRequested}</td>
                        <td>{pickup.creatorUser}</td>
                        <td>{thisCreatorUser.location}</td>
                        {/* <td>{thisCreatorUser.gender}</td> */}
                        <td>{thisCreatorUser.language}</td>
                        <td>{thisCreatorUser.country}</td>
                    </tr>          
            </tbody>
        </table>
    </main>
    )
}