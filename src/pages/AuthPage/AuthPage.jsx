import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'

export default function AuthPage({ user, setUser }) {
    const [show, setShow] = useState(false);
    let buttonText = show ? "Sign-up instead":"Register instead"
    let pagePrompt = show ? "Create Your Account":"Sign-In to Your Account"
    function toggleShow() {
        setShow(!show);
    }

    return (
        <main>
            <h1>{pagePrompt}</h1>
            { show ? 
                <SignUpForm setUser={setUser} />
                :
                <LoginForm setUser={setUser} />
            }
            <button onClick={toggleShow}>{buttonText}</button>
        </main>
    )
}