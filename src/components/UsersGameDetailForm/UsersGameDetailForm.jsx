import * as usersGameAPI from '../../utilities/usersGame-api';

export default function UsersGameDetailForm({game, usersGames, setUsersGames}) {
    
    ////////////////////
    // event handlers //
    ////////////////////
    let displayErr
    async function deleteGame(evt) {
        try {
            await usersGameAPI.deleteUsersGame(game)
            // remove game from state
            setUsersGames((current) => current.filter((deletedOne) => deletedOne._id !== game._id));
        } catch {
            displayErr = "Game Delete failed, please try again."
        }
    }

    return(        
        <>
            <div className="styled-div" key={game._id}> 
            <form>
                <div className="styled-div-head" >Game ID</div>
                <div className="styled-div-rows" >{game._id} </div>
                <div className="styled-div-head" >Sport</div>
                <div className="styled-div-rows" >{game.game} </div>
                <div className="styled-div-head" >Desired Location</div>
                <div className="styled-div-rows" >{game.gameLocation} </div>
                <div className="styled-div-head" >Skill Level</div>
                <div className="styled-div-rows" >{game.skillLevel} </div>
                <div className="styled-div-head" >Years Experience</div>
                <div className="styled-div-rows" >{game.yearsExperience} </div>
                    <button onClick={deleteGame}>Delete</button>
            </form>
            </div>              
            <p className="error-message">&nbsp;{displayErr}</p>
        </>
        )
    }