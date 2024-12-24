import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();     
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }

    return(
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <input value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required className="outline-none bg-transparent placeholder:text-grey-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full" type="email" placeholder='Enter your email' />
                    
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required className="outline-none bg-transparent placeholder:text-grey-400 mt-3 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full" type="password" placeholder='Enter your password' />
                    
                    <button className="text-white outline-none placeholder:text-white mt-5 border-2 border-none bg-emerald-600 py-3 px-5 text-xl rounded-full">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login