import * as usersGameAPI from '../../utilities/usersGame-api';

export default function UsersGameDetailForm({game, usersGames, setUsersGames}) {
    
    ////////////////////
    // event handlers //
    ////////////////////

    async function deleteGame(evt) {
        try {
            console.log('I am here in delete')
            await usersGameAPI.deleteUsersGame(game)
            const removeDeletedGame = () => {
                SetUsersGames((current) =>
                  current.filter((fruit) => fruit.id !== 2)
                );
              };
        } catch {
        //     set**FormData({
        //         ...newGameFormData,
        //         error: "Game Delete failed, please try again."
        //     })

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
                {/* <form onSubmit={handleSubmitGame}> */}
                    <button onClick={deleteGame}>Delete</button>
                {/* </form> */}
            </div>              
            {/* <p className="error-message">&nbsp;{newGameFormData.error}</p> */}
        </>
        )
    }