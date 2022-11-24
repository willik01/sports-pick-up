import * as usersGameAPI from '../../utilities/usersGame-api';

export default function UsersGameForm({game, key}) {
    
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
            <div className="styled-div" key={game._id}> 
                <div>{game.user} </div>
                <div>{game.game} </div>
                <div>{game.gameLocation} </div>
                <div>{game.skillLevel} </div>
            </div>              
            {/* <p className="error-message">&nbsp;{newGameFormData.error}</p> */}
        </>
        )
    }