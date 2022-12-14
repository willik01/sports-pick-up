import {useParams} from "react-router-dom"

export default function PickupsDetailPage(
  {
    allPickups, 
  }) {
    
  const pickupId = useParams();
  const pickup = allPickups.find(pickupId.id)
console.log(pickupId, pickup)
  return (
    <main>
          <h1>pickup detal page</h1>
              <p>Pickup ID?{pickupId.id}</p>
              <p>Pickup info? </p>
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
                <th />
            </tr>
            </thead>
            <tbody>
                    <tr >
                        <td>{pickup.game}</td>
                        <td>{pickup.playersRequested}</td>
                        <td>{pickup.skillLevel}</td>
                        <td>{pickup.gameLocation}</td>  
                        <td>{pickup.competitiveness}</td>
                        <td>{new Date(pickup.dateRequested).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }</td>
                        <td>{new Date(pickup.timeRequested).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                        <td>{pickup.durationRequested}</td>

                    </tr>          
                
            </tbody>
        </table>
    </main>
    )
}