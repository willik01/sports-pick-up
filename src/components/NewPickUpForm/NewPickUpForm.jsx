import { useState, useEffect } from 'react'
import * as usersGameAPI from '../../utilities/usersGame-api';

export default function NewPickUpForm({user, usersGames, setUsersGames, userGameEnums, skillLevelEnums}) {
    
    const [newPickupFormData, setNewPickupFormData] = useState({
        game: userGameEnums[0],
        skillLevel: skillLevelEnums[1],
        yearsExperience: '',
        genderPreference: '',
        gameLocation: '',
        // error: '',
    });
    
    async function handleSubmitPickup(evt) {
        // evt.preventDefault()
        // try {
        //     const tempPickupFormData = {...newPickupFormData, user:user._id}
        //     delete tempPickupFormData.error
        //     //Should this be a simple insert vs. upsert? 
        //     const newPickup = await pickup***API.pickupFuntionName(tempPickupFormData)
        //     // add this new pickup to user's pickups state
        //     setUserPickups**TBD**(()=> pickupData***.concat(newPickup))
        // } catch {
        //     setNewGameFormData({
        //         ...newGameFormData,
        //         error: "User's game save failed, please try again."
        //     })
        // }
    };
    ////////////////////
    // event handlers //
    ////////////////////
    function handleChangeGame(evt) {
        setNewPickupFormData({
            ...newPickupFormData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    };


        return(        
             <>
             <div className="styled-div"> 
                <form autoComplete="off" onSubmit={handleSubmitGame}>  
                    <div className='styled-div-head' >Sport</div>
                    <div className="styled-div-rows" >
                        <select 
                            value={newGameFormData.game}
                            onChange={handleChangeGame}
                            name="game" 
                            id="game">
                            {userGameEnums.map((g) => (
                                <option value={g} key={g}>{g}</option>
                            ))}
                        </select></div>
                    <div className="styled-div-head" >Skill Level</div>
                    <div className="styled-div-rows" >
                        <select 
                            value={newGameFormData.skillLevel}
                            onChange={handleChangeGame}
                            name="skillLevel" 
                            id="skillLevel"
                        >
                            {skillLevelEnums.map((sl) => (
                            <option value={sl} key={sl}>{sl}</option>
                            ))}
                        </select></div>
                    <div className="styled-div-head" >Years Experience</div>
                    <div className="styled-div-rows" ><input type="number" id="yearsExperience" name="yearsExperience" value={newGameFormData.yearsExperience} onChange={handleChangeGame} /></div>
                    <div className="styled-div-head" >Desired Play Location</div>
                    <div className="styled-div-rows" ><input type="text" id="gameLocation" name="gameLocation" value={newGameFormData.gameLocation} onChange={handleChangeGame} /></div>
                    <button type="submit">Add New Sport Profile</button>
                </form>
            </div> 
            <p className="error-message">&nbsp;{newGameFormData.error}</p>
        </>
        )
    }