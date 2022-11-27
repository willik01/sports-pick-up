import { useState, useEffect } from 'react'
import * as usersGameAPI from '../../utilities/usersGame-api';
import UsersGameDetailForm from '../UsersGameDetailForm/UsersGameDetailForm';

export default function UsersGamesForm({usersGames, setUsersGames}) {

    return(        
        <>
            <div className="styled-div"> 
            {usersGames.map((game, key) => (
                <UsersGameDetailForm 
                game={game} 
                key={key} 
                usersGames={usersGames} 
                setUsersGames={setUsersGames}
                />
            ))}
            
            </div> 
            {/* <p className="error-message">&nbsp;{newGameFormData.error}</p> */}
        </>
    )
}