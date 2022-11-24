import { useState, useEffect } from 'react'
import * as usersGameAPI from '../../utilities/usersGame-api';
import UsersGameForm from '../UsersGameForm.jsx/UsersGameForm';

export default function UsersGamesForm() {

    const [usersGames, setUsersGames] = useState([]);

    //Get user's games
    useEffect(function() {
        async function getUsersGames() {
            const tempUsersGames = await usersGameAPI.getUsersGames();
            console.log('usersGames in getUsersGames: ', tempUsersGames)
            setUsersGames(tempUsersGames);
        }
        getUsersGames();
    }, []); 

    return(        
        <>
            <div className="styled-div"> 
            {usersGames.map((game, key) => (
                <UsersGameForm game={game} key={key}/>
            ))}
            
            </div> 
            {/* <p className="error-message">&nbsp;{newGameFormData.error}</p> */}
        </>
    )
}