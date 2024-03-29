import {useParams} from "react-router-dom"
import {useEffect, useState} from 'react' 
import * as profilesAPI from '../../utilities/profiles-api';
import * as usersAPI from '../../utilities/users-api';
import { getUser } from '../../utilities/users-service' // ?

export default function PickupsDetailPage(
  {
    allPickups, 
  }) {
      
    const pickupId = useParams();
    const pickup = allPickups.find(pu => pu._id === pickupId.id);
    const [thisCreatorUser, setThisCreatorUser] = useState([]);
    const [PUOwner, setPUOwner] = useState([]);
    const user = getUser();

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

    async function handleAcceptPickup() {
        try {
            //Add current user to PU playersAccepted
            pickup.playersAccepted.push(user._id)
            console.log("current user", user._id, "pickup id",pickupId, "pickupPlayersAccepted", pickup.playersAccepted )
            // function to save user to playersAccepted array . 
        } catch(err) {
            console.log('handleAcceptPickup Error',err)
        }
    };

      
  return (
      <main>
        <h1>pickup detal page</h1>
          <table className="styled-table">
            <tr>
                {/* <td>{thisCreatorUser.gender}</td> */}
                <th>Sport</th>
                <td>{pickup.game}</td>
            </tr><tr>
                <th>Players Needed</th>
                <td>{pickup.playersRequested}</td>
            </tr><tr>
                <th>Skill Level</th>
                <td>{pickup.skillLevel}</td>
            </tr><tr>
                <th>Location</th>
                <td>{pickup.gameLocation}</td>
            </tr><tr>
                <th>Competitiveness</th>
                <td>{pickup.competitiveness}</td>
            </tr><tr>
                <th>Date</th>
                <td>{new Date(pickup.dateRequested).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }</td>
            </tr><tr>
                <th>Time</th>
                <td>{new Date(pickup.timeRequested).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
            </tr><tr>
                <th>Duration</th>
                <td>{pickup.durationRequested}</td>                  
            </tr><tr>
                <th>Req Loc</th>
                <td>{thisCreatorUser.location}</td>                
            </tr><tr>
                <th>Req Lang</th>
                <td>{thisCreatorUser.language}</td>
            </tr><tr>
                <th>Req Country</th>
                <td>{thisCreatorUser.country}</td>
            </tr><tr>
                <th>Req Name</th>
                <td>{PUOwner.name}</td>
            </tr>
            {/* check for user and then make sure the user is not the PU creator */}
            { user &&
                !(user._id === pickup.creatorUser) &&
                    <tr>
                        <th>Accept Pick-UP?</th>
                            <button onClick={handleAcceptPickup}>Accept this Pickp-Up</button>
                    </tr>               
            }
        </table>
    </main>
    )
}