import { useState } from 'react'
import * as pickupsAPI from '../../utilities/pickups-api';

export default function AllPickupsListForm(
    {
    allPickups,
    setAllPickups,
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
                <td>{pickup.dateTimeRequested}</td>
                <td>{pickup.durationRequested}</td>
                </tr>          
                ))}
            </tbody>
        </table> 

    </>
    )
}