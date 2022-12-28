import { useState } from 'react';
import * as pickupsAPI from '../../utilities/pickups-api';
import { TimePicker, DatePicker } from 'antd';

import SearchLocationInput from '../../SearchLocationInput';

export default function NewPickupForm(
    {user, 
    usersGames, //TODO: pull from usersGames to populate new pickup request. Also save a new game to the user profile if a userGame for that sport does not yet exist for the user. 
    usersPickups, 
    setUsersPickups, 
    allPickups,
    setAllPickups,
    userGameEnums, 
    skillLevelEnums,
    competitivenessEnums}) {
    
    const [newPickupFormData, setNewPickupFormData] = useState({
        game: userGameEnums[0],
        playersRequested: 1,
        skillLevel: skillLevelEnums[2],
        competitiveness: competitivenessEnums[1],
        gameLocation: '',
        dateRequested: Date(),
        timeRequested: Date(),
        durationRequested: 60, //store as minutes
        genderToPlayRequested: 'Any', 
    
        // error: 'some error for testing',
    });

    async function handleSubmitPickup(evt) {
        evt.preventDefault()
        try {
            //Pull location value from field because it is not auto updated in newPickupFormData
            const tempPickupFormData = {...newPickupFormData, creatorUser:user._id, gameLocation:document.getElementById('gameLocation').value}
            delete tempPickupFormData.error
            const newPickup = await pickupsAPI.updatePickup(tempPickupFormData)
            // add this new pickup to user's pickups state
            setUsersPickups(()=> usersPickups.concat(newPickup))
            setAllPickups(()=> allPickups.concat(newPickup))
        } catch(err) {
            setNewPickupFormData({
                ...newPickupFormData,
                error: "Requested pickup save failed, please try again."
                
            })
            console.log('NewPickupForm Error',err)
        }
    };
    ////////////////////
    // event handlers //
    ////////////////////
    function handlePickup(evt) {
        setNewPickupFormData({
            ...newPickupFormData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    };

    //Date and time from https://ant.design/components
    let handleCalChange = function (d, dateString) {
        setNewPickupFormData({...newPickupFormData, 'dateRequested':dateString})
    };

    let handleTimeChange = function (t, timeString) {
        setNewPickupFormData({...newPickupFormData, 'timeRequested':t})
    };
    
    // function handleLocChange(evt) {
    //     // console.log("evt:",evt )
    //     // setNewPickupFormData({...newPickupFormData, 'gameLocation':location})
    //     // console.log('new form data after time change',newPickupFormData)
    // };


return(        
    <>
        <hr />
        <h2>Add New Pickup Request</h2>
        <hr />
        <div className="styled-div"> 
            <form autoComplete="off" onSubmit={handleSubmitPickup}>  
                <div className='styled-div-head' >Sport</div>
                <div className="styled-div-rows" >
                    <select 
                        value={newPickupFormData.game}
                        onChange={handlePickup}
                        name="game" 
                        id="game">
                        {userGameEnums.map((g) => (
                            <option value={g} key={g}>{g}</option>
                        ))}
                    </select></div>
                <div className="styled-div-head" >Players Requested</div>
                <div className="styled-div-rows" ><input required type="number" id="playersRequested" name="playersRequested" value={newPickupFormData.playersRequested} onChange={handlePickup} /></div>
                <div className="styled-div-head" >Skill Level</div>
                <div className="styled-div-rows" >
                    <select 
                        required 
                        value={newPickupFormData.skillLevel}
                        onChange={handlePickup}
                        name="skillLevel" 
                        id="skillLevel">
                        {skillLevelEnums.map((sl) => (
                        <option value={sl} key={sl}>{sl}</option>
                        ))}
                    </select></div>
                <div className='styled-div-head' >Competitiveness</div>
                <div className="styled-div-rows" >
                    <select 
                        required
                        value={newPickupFormData.competitiveness}
                        onChange={handlePickup}
                        name="competitiveness" 
                        id="competitiveness">
                        {competitivenessEnums.map((c) => (
                            <option value={c} key={c}>{c}</option>
                        ))}
                    </select></div>
                <div className="styled-div-head" >Desired Play Location</div>
                <SearchLocationInput />
                {/* <SearchLocationInput onChange={handleLocChange} /> */}
                {/* <SearchLocationInput onChange={() => null} /> */}
                {/* <div className="styled-div-rows" ><input required type="text" id="autocomplete" name="gameLocation" value={newPickupFormData.gameLocation} onChange={handlePickup} /></div> */}
                <div className="styled-div-head" >Time</div>
                <TimePicker required minuteStep={15} use12Hours format='HH:mm a' className='styled-div-rows' id="dateTimeRequested" name="dateTimeRequested"  onChange={handleTimeChange} />
                {/* <div className="styled-div-rows" ><input type="text" id="dateTimeRequested" name="dateTimeRequested" value={newPickupFormData.dateTimeRequested} onChange={handlePickup} /></div> */}
                <div className="styled-div-head" >Date</div>
                <DatePicker required className="styled-div-rows" format='MMM-DD-YYYY' onChange={handleCalChange}/>
                {/* <DatePicker format='MMM-DD-YYYY' id="dateRequested" name="dateRequested" value={newPickupFormData.dateRequested} onChange={handlePickup} /> */}
                <div className="styled-div-head" >Duration</div>
                <div className="styled-div-rows" ><input required type="number" id="durationRequested" name="durationRequested" value={newPickupFormData.durationRequested} onChange={handlePickup} /></div>
                <div className="styled-div-head" >Gender Requested</div>
                <div className="styled-div-rows" ><input required type="text" id="genderToPlayRequested" name="genderToPlayRequested" value={newPickupFormData.genderToPlayRequested} onChange={handlePickup} /></div>
                <button type="submit">Add New Pickup Request</button>
            </form>
        </div> 
        <p className="error-message">&nbsp;{newPickupFormData.error}</p>
    </>
    )
}