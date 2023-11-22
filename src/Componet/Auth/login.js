import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // User signed in successfully
            setShowSuccessPopup(true);
            console.log('User signed in successfully:', userCredential.user);
        } catch (error) {
            // Error signing in
            setErrorMessage(error.message);
            setShowErrorPopup(true);
            console.error('Error signing in:', error.message);
        }
    };

    const closePopups = () => {
        setShowSuccessPopup(false);
        setShowErrorPopup(false);
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>

            {/* Success Popup */}
            {showSuccessPopup && (
                <div className="popup success">
                    <p>Sign in successful!</p>
                    <button onClick={closePopups}>Close</button>
                </div>
            )}

            {/* Error Popup */}
            {showErrorPopup && (
                <div className="popup error">
                    <p>Error signing in: {errorMessage}</p>
                    <button onClick={closePopups}>Close</button>
                </div>
            )}
        </div>
    );
};