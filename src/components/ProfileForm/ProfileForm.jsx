import { useState, useEffect } from 'react'
import * as profilesAPI from '../../utilities/profiles-api';

export default function ProfileForm({user}) {
    const [formData, setFormData] = useState({
        // user: '',  
        location: '',
        // games: '',
        // language: '',
        // country: '',
        error: '',
    })

    // const [gameFormData, setGameFormData] = useState({
    //     error: '',
    // })

    const [profile, setProfile] = useState({
        // user: '',  
        location: '',
        // games: '',
        // language: '',
        // country: '',
        error: '',
    })

    useEffect(function() {
        async function getProfile() {
            // const userProfile = await profilesAPI.getProfile(user._id);
            const userProfile = await profilesAPI.getProfile();
            setFormData(userProfile);
        }
        getProfile();
    }, [])
    ////////////////////
    // event handlers //
    ////////////////////

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmitProfile(evt) {
        evt.preventDefault()
        try {
            // const countryToInsert = [country.[country:'US']]
            const formDataCopy = {...formData, user:user._id}
            delete formDataCopy.error        
            const profile = await profilesAPI.saveProfile(formDataCopy)
            setProfile(profile)
        } catch {
            setFormData({
                ...formData,
                error: 'Profile save failed, please try again.'
            })
        }
    }

    return(
        <div>
            <div className='styled-div'>
              <form autoComplete='off' onSubmit={handleSubmitProfile}>
                <div className='styled-div-head'>User Name</div>
                
                <input className='styled-div-rows' type="text" name="userName" value={user.name} />
                <div className='styled-div-head'>Location </div>
                <input className='styled-div-rows' type="text" name="location" value={formData.location} onChange={handleChange} />
                <div className='styled-div-head'>Language</div>
                <input className='styled-div-rows' type="text" name="language" value={formData.language} onChange={handleChange} />
                <div className='styled-div-head'>Country</div>
                <input className='styled-div-rows' type="text" name="country" value={formData.country} onChange={handleChange} />                
                <button type="submit">Update Profile</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
          </div>
    )
}