// Rewrite the SignUpForm as a function component
import { useState, useEffect } from 'react'
import * as profilesAPI from '../../utilities/profiles-api';

export default function ProfileForm({user}) {
    console.log('keitk', user.name)
    const [formData, setFormData] = useState({
        // user: '',  
        location: '',
        // games: '',
        // language: '',
        // country: '',
        error: '',
    })

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

    // event handlers ??

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const formDataCopy = {...formData, user:user._id}
            console.log('formdatacopy: ', formDataCopy)
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
              <form autoComplete='off' onSubmit={handleSubmit}>
                <div className='styled-div-head'>User Name</div>
                <div className='styled-div-rows'>{user.name}</div>
                <div className='styled-div-head'><label>Location</label> </div>
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
                {/* <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}  />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange}  />
                <label>Confirm</label>
                <input type="password" name="confirm" value={formData.confirm} onChange={handleChange}  /> */}
                <button type="submit">Update Profile</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
          </div>
    )
}