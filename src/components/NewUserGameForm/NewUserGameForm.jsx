import { useState, useEffect } from 'react'
import * as usersGameAPI from '../../utilities/usersGame-api';

export default function NewUserGameForm({user, usersGames, setUsersGames}) {
    
    const skillOptions = ['1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'];
    const gameOptions = ['Tennis', 'Pickleball', 'Badminton'];
    
    // QUESTION: what is the purpose of defining the element for useState? Does it keep track when you fill the variable with data/fields from a previous save? 
    const [newGameFormData, setNewGameFormData] = useState({
        game: gameOptions[0],
        skillLevel: skillOptions[1],
        yearsExperience: '',
        genderPreference: '',
        gameLocation: '',
        error: '',
    });

    ////////////////////
    // event handlers //
    ////////////////////
    function handleChangeGame(evt) {
        setNewGameFormData({
            ...newGameFormData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    };

    async function handleSubmitGame(evt) {
        evt.preventDefault()
        try {
            const newGameFormDataCopy = {...newGameFormData, user:user._id}
            delete newGameFormDataCopy.error
            const newUserGame = await usersGameAPI.updateUsersGame(newGameFormDataCopy)
            setUsersGames(()=> usersGames.concat(newUserGame))
        } catch {
            setNewGameFormData({
                ...newGameFormData,
                error: "User's game save failed, please try again."
            })
        }
    };

        return(        
             <>
             <div className="styled-div"> 
                <form autoComplete="off" onSubmit={handleSubmitGame}>  
                    <div className="" >Sport</div>
                    <div className="" >
                        <select 
                            value={newGameFormData.game}
                            onChange={handleChangeGame}
                            name="game" 
                            id="game">
                            {gameOptions.map((g) => (
                                <option value={g} key={g}>{g}</option>
                            ))}
                        </select></div>
                    <div className="" >Skill Level</div>
                    <div className="" >
                        <select 
                            value={newGameFormData.skillLevel}
                            onChange={handleChangeGame}
                            name="skillLevel" 
                            id="skillLevel"
                        >
                            {skillOptions.map((sl) => (
                            <option value={sl} key={sl}>{sl}</option>
                            ))}
                        </select></div>
                    <div className="" >Years Experience</div>
                    <div className="" ><input type="number" id="yearsExperience" name="yearsExperience" value={newGameFormData.yearsExperience} onChange={handleChangeGame} /></div>
                    <div className="" >Desired Play Location</div>
                    <div className="" ><input type="text" id="gameLocation" name="gameLocation" value={newGameFormData.gameLocation} onChange={handleChangeGame} /></div>
                    <button type="submit">Add New Sport Profile</button>
                </form>
            </div> 
            <p className="error-message">&nbsp;{newGameFormData.error}</p>
        </>
        )
    }