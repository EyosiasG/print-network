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
        <>
            <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-200'>
                <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
                    <div className="grid grid-cols-2 w-full items-center">
                        <img
                            src="https://img.freepik.com/free-vector/flat-printing-industry-illustration_23-2148887722.jpg?size=626&ext=jpg&uid=R74970259&ga=GA1.1.2132952269.1697178807&semt=ais"
                            className="w-80 h-80 mb-2"
                        />
                        <form className='p-18 items-center'>
                            <h1 className="text-center mb-10 text-lg font-bold"> Welcome to PrintNetwork </h1>
                            <input className="mb-4 text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input className="mb-3 text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className='flex flex-col'>
                                <a className="align-baseline text-xs text-blue-500 hover:text-blue-800 mb-4 p-1" href="#">
                                    Forgot Password?
                                </a>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline" 
                                    type="button"
                                    onClick={handleSignIn}
                                >
                                    Sign In
                                </button>
                                <p className="text-center text-gray-500 text-xs">
                                    Don't have an account? Sign Up
                                </p>
                            </div>
                        </form>
                    </div>
                     {/* Success Popup */}
                     {showSuccessPopup && (
                        <div className="popup success text-center text-2xs text-red">
                            <p>Sign in successful!</p>
                            <button onClick={closePopups}>Close</button>
                        </div>
                    )}

                    {/* Error Popup */}
                    {showErrorPopup && (
                        <div className="popup error text-center text-2xs text-red-950">
                            <p>Error signing in: {errorMessage}</p>
                            <button onClick={closePopups}>Close</button>
                        </div>
                    )}
                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 PrintNetwork. All rights reserved.
                </p>
            </div> 
        </>

    );
};