import { useState } from 'react'
import * as pickupsAPI from '../../utilities/pickups-api';

export default function NewPickUpForm(
    {user, 
    usersGames, 
    usersPickups, 
    setUsersPickups, 
    allPickups,
    setAllPickups,
    userGameEnums, 
    skillLevelEnums,
    competitivenessEnums}) {
    
    const [newPickupFormData, setNewPickupFormData] = useState({
        game: userGameEnums[0],
        playersRequested: 1,
        skillLevel: skillLevelEnums[2],
        competitiveness: competitivenessEnums[1],
        // yearsExperience: '',
        // genderPreference: '',
        gameLocation: '',
        // error: 'some error for testing',
    });

    async function handleSubmitPickup(evt) {
        evt.preventDefault()
        try {
            const tempPickupFormData = {...newPickupFormData, user:user._id}
            delete tempPickupFormData.error
            //Should this be a simple insert vs. upsert? 
            const newPickup = await pickupsAPI.updatePickup(tempPickupFormData)
            // add this new pickup to user's pickups state
            setUsersPickups(()=> usersPickups.concat(newPickup))
            setAllPickups(()=> allPickups.concat(newPickup))
        } catch {
            setNewPickupFormData({
                ...newPickupFormData,
                error: "Requested pickup save failed, please try again."
            })
        }
    };
    ////////////////////
    // event handlers //
    ////////////////////
    function handlePickup(evt) {
        setNewPickupFormData({
            ...newPickupFormData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    };

return(        
    <>
        <div className="styled-div"> 
            <form autoComplete="off" onSubmit={handleSubmitPickup}>  
                <div className='styled-div-head' >Sport</div>
                <div className="styled-div-rows" >
                    <select 
                        value={newPickupFormData.game}
                        onChange={handlePickup}
                        name="game" 
                        id="game">
                        {userGameEnums.map((g) => (
                            <option value={g} key={g}>{g}</option>
                        ))}
                    </select></div>
                <div className="styled-div-head" >Players Requested</div>
                <div className="styled-div-rows" ><input type="number" id="playersRequested" name="playersRequested" value={newPickupFormData.playersRequested} onChange={handlePickup} /></div>
                <div className="styled-div-head" >Skill Level</div>
                <div className="styled-div-rows" >
                    <select 
                        value={newPickupFormData.skillLevel}
                        onChange={handlePickup}
                        name="skillLevel" 
                        id="skillLevel">
                        {skillLevelEnums.map((sl) => (
                        <option value={sl} key={sl}>{sl}</option>
                        ))}
                    </select></div>
                {/* <div className="styled-div-head" >Years Experience</div>
                <div className="styled-div-rows" ><input type="number" id="yearsExperience" name="yearsExperience" value={newPickupFormData.yearsExperience} onChange={handlePickup} /></div> */}
                <div className='styled-div-head' >Competitiveness</div>
                <div className="styled-div-rows" >
                    <select 
                        value={newPickupFormData.competitiveness}
                        onChange={handlePickup}
                        name="competitiveness" 
                        id="competitiveness">
                        {competitivenessEnums.map((c) => (
                            <option value={c} key={c}>{c}</option>
                        ))}
                    </select></div>
                <div className="styled-div-head" >Desired Play Location</div>
                <div className="styled-div-rows" ><input type="text" id="gameLocation" name="gameLocation" value={newPickupFormData.gameLocation} onChange={handlePickup} /></div>
                <button type="submit">Add New Pickup Request</button>
            </form>
        </div> 
        <p className="error-message">&nbsp;{newPickupFormData.error}</p>
    </>
    )
}