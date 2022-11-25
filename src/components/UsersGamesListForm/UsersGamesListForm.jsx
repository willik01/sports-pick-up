import { useState, useEffect } from 'react'
import * as usersGameAPI from '../../utilities/usersGame-api';
import UsersGameDetailForm from '../UsersGameDetailForm/UsersGameDetailForm';

export default function UsersGamesForm({usersGames, setUsersGames}) {

    // const [usersGames, setUsersGames] = useState([]);  //Move to profile page for state change

    //Get user's games
    useEffect(function() {
        async function getUsersGames() {
            const tempUsersGames = await usersGameAPI.getUsersGames();
            setUsersGames(tempUsersGames);
        }
        getUsersGames();
    }, []); 

    return(        
        <>
            <div className="styled-div"> 
            {usersGames.map((game, key) => (
                <UsersGameDetailForm game={game} key={key} usersGames={usersGames} setUsersGames={setUsersGames}/>
            ))}
            
            </div> 
            {/* <p className="error-message">&nbsp;{newGameFormData.error}</p> */}
        </>
    )
}