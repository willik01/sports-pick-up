// import { useState } from 'react'
// import * as pickupsAPI from '../../utilities/pickups-api';
import { Link } from 'react-router-dom'

export default function AllPickupsListForm(
    {
    allPickups,
    user,
}) {
    
return(        
    <>
        <h1>All Pickups</h1>
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
                {/* <th>Gender</th> */}
                <th />
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
                        <td>{new Date(pickup.dateRequested).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }</td>
                        <td>{new Date(pickup.timeRequested).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                        <td>{pickup.durationRequested}</td>
                        <td><Link to={`/pickups/${pickup._id}`} state={{ from: "app" }}>View</Link></td>
                    </tr>          
                ))}
            </tbody>
        </table>
    </>
    )
}