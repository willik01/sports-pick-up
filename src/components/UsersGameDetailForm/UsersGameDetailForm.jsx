import * as usersGameAPI from '../../utilities/usersGame-api';

export default function UsersGameDetailForm({game, usersGames, setUsersGames}) {
    
    ////////////////////
    // event handlers //
    ////////////////////
    let displayErr
    async function deleteGame(evt) {
        try {
            console.log('I am here in delete', game, 'usersGames', usersGames)
            await usersGameAPI.deleteUsersGame(game)
            setUsersGames((current) => current.filter((deletedOne) => deletedOne._id !== game._id));
        } catch {
            displayErr = "Game Delete failed, please try again."
        }
    }

    return(        
        <>
            <div className="styled-div" key={game._id}> 
                <div>{game._id} </div>
                <div>{game.game} </div>
                <div>{game.gameLocation} </div>
                <div>{game.skillLevel} </div>
                <div>{game.yearsExperience} </div>
                    <button onClick={deleteGame}>Delete</button>
            </div>              
            <p className="error-message">&nbsp;{displayErr}</p>
        </>
        )
    }