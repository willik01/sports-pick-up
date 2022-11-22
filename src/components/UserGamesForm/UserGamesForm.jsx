// import { useState, useEffect } from 'react'
// import * as userGamesAPI from '../../utilities/userGames-api';

export default function userGamesForm({user}) {

    ////////////////////
    // event handlers //
    ////////////////////
    function handleChangeGame(evt) {
        // setFormData({
        //     ...formData,
        //     [evt.target.name]: evt.target.value,
        //     error: ''
        // })
    }

    async function handleSubmitGame(evt) {
        evt.preventDefault()
        // try {
        //     const formDataCopy = {...formData, user:user._id}
        //     delete formDataCopy.error
        //     const profile = await profilesAPI.saveProfile(formDataCopy)
        //     setProfile(profile)
        // } catch {
        //     setFormData({
        //         ...formData,
        //         error: 'Profile save failed, please try again.'
        //     })
        // }
    }




        return(        
             <div className="styled-div"> 
                <form autoComplete='off' onSubmit={handleSubmitGame}>  
                    <tr>
                    <td>Sport</td>
                    <td><select name="userGame" id="userGame">
                        
                        <option value="Tennis">Tennis</option>
                        <option value="PickleBall">Pickle Ball</option>
                        <option value="Badminton">Badminton</option>
                        
                    </select></td>
                    </tr>
                    <tr>
                        <td>Skill Level</td>
                        <td><select name="skillLevel" id="skillLevel">
                            <option value="2.0">2.0</option>
                            <option value="2.5">2.5</option>
                            <option value="3.0">3.0</option>
                            <option value="3.5">3.5</option>
                            <option value="4.0">4.0</option>
                            <option value="4.5">4.5</option>
                            <option value="5.0">5.0</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Desired Play Location</td>
                        <td><input type="text" id="gameLocation" name="gameLocation" value={gameFormData.gameLocation} onChange={handleChangeGame} /></td>
                    </tr>
                    <tr>
                        <td>Years Experience</td>
                        <td><input type="number" id="yearsExperience" name="yearsExperience" value={gameFormData.yearsExperience} onChange={handleChangeGame} /></td>
                    </tr>
                    <tr>
                        <td>Competitiveness</td>
                        <td><input type="number" min="1" max="10" id="competitiveness" name="competitiveness" value={gameFormData.competitiveness} onChange={handleChangeGame} /></td>
                    </tr>
                    <td colspan="2">
                    <input type="submit" value="Add New Sport Profile" />
                    </td>

                </form>
            </div> 
        )
    }