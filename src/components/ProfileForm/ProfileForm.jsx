import { useState, useEffect } from 'react'
import * as profilesAPI from '../../utilities/profiles-api';

export default function ProfileForm({user}) {
    const [profileFormData, setProfileFormData] = useState({
        location: '',
        language: '',
        country: '',
        error: '',
    })
    
    const [ isAlertVisible, setIsAlertVisible ] = useState(false);

    useEffect(function() {
        async function getProfile() {
            const tempUserProfile = await profilesAPI.getProfile();
            setProfileFormData(tempUserProfile);
        }
        getProfile();
    }, [])
    ////////////////////
    // event handlers //
    ////////////////////

    function handleChange(evt) {
        setProfileFormData({
            ...profileFormData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmitProfile(evt) {
        evt.preventDefault()
        try {
            const profileFormDataCopy = {...profileFormData, user:user._id}
            delete profileFormDataCopy.error        
            const profile = await profilesAPI.saveProfile(profileFormDataCopy)
            setProfileFormData({...profileFormDataCopy, error: 'Profile Saved!'})
            setIsAlertVisible(true);
            setTimeout(() => {
                setIsAlertVisible(false);
                }, 2000);
        } catch(err) {
            setProfileFormData({
                ...profileFormData,
                error: 'Profile save failed, please try again.'
            })
            console.log('ProfileForm Error',err)
        }
    }

    return(
        <div className='element-border'>
            <div className='styled-div'>
              <form autoComplete='off' onSubmit={handleSubmitProfile}>
                <div className='styled-div-head'>User Name</div> 
                <input className='styled-div-rows' type="text" name="userName" value={user.name} disabled readOnly />
                <div className='styled-div-head'>Language</div>
                <input className='styled-div-rows' type="text" name="language" value={profileFormData.language} onChange={handleChange} />
                <div className='styled-div-head'>Location </div>
                <input className='styled-div-rows' type="text" name="location" value={profileFormData.location} onChange={handleChange} />
                <div className='styled-div-head'>Country</div>
                <input className='styled-div-rows' type="text" name="country" value={profileFormData.country} onChange={handleChange} />                
                <button className='btn-primary'  type="submit" >Update Profile</button>
              </form>
            </div>
            <p className="error-message">{isAlertVisible ? profileFormData.error : ''}</p>
        
          </div>
    )
}