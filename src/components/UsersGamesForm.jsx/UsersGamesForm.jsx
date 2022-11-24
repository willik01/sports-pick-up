import { useState, useEffect } from 'react'
import * as usersGameAPI from '../../utilities/usersGame-api';

export default function UsersGamesForm({user}) {
    
    
    const [usersGames, setUsersGames] = useState([{
        _id: "",
        game: "",
        skillLevel: "",
        yearsExperiene: 0,
        gameLocation: "",
    }]);
    

    //Get user's games
    useEffect(function() {
        async function getUsersGames() {
            const tempUsersGames = await usersGameAPI.getUsersGames();
            console.log('usersGames in getUsersGames: ', tempUsersGames)
            setUsersGames(tempUsersGames);
        }
        getUsersGames();
    }, []); 

    ////////////////////
    // event handlers //
    ////////////////////
    function handleChangeGame(evt) {
        // setNewGameFormData({
        //     ...newGameFormData,
        //     [evt.target.name]: evt.target.value,
        //     error: ''
        // })
    };

    async function handleSubmitGame(evt) {
        evt.preventDefault()
        // try {
        //     const newGameFormDataCopy = {...newGameFormData, user:user._id}
        //     delete newGameFormDataCopy.error
        //     const newUserGame = await usersGameAPI.updateUsersGame(newGameFormDataCopy)
        // } catch {
        //     setNewGameFormData({
        //         ...newGameFormData,
        //         error: "User's game save failed, please try again."
        //     })
        // }
    };

        return(        
             <>
             <div className="styled-div"> 
             {console.log('usersGames in return: ', usersGames)}
             
                {usersGames.map((game, key) => (
                    <div key={game._id}>
                        <div>{game.game}</div>
                        <div>{game.user} </div>
                        <div>{game.game} </div>
                        <div>{game.gameLocation} </div>
                        <div>{game.skillLevel} </div>
                    </div>
                ))}
                {/* <form autoComplete="off" onSubmit={handleSubmitGame}>  
                    <div className="" >Sport</div>
                    <div className="" >
                        <select 
                            value={newGameFormData.game}
                            onChange={handleChangeGame}
                            // value={gameSelectedOption}  
                            // onChange={evt => setGameSelectedOption(evt.target.value)}
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
                            // value={skillSelectedOption}  
                            // onChange={evt => setSkillSelectedOption(evt.target.value)}
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
                </form> */}
            </div> 
            {/* <p className="error-message">&nbsp;{newGameFormData.error}</p> */}
        </>
        )
    }