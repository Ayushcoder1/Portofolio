"use client"

import Link from 'next/link'
import Button from './Button';
import { useState } from 'react';

function Signin({isSignin} : {isSignin : number}){
    const warning = null;
    const [name, setName] = useState();
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    
    return (
        <div className='bg-white shadow-xl rounded-lg px-10 py-8'>
            <h1 className='font-bold text-3xl text-center mb-2'>{isSignin ? "Log in" : "Sign up"}</h1>
            <p className='text-zinc-400 text-center text-lg mb-4'>{isSignin? "Enter your information to access your account" : 
            "Enter your information to create an account"}</p>

            {
                warning &&
                <p className='text-red-600 text-center text-sm'>{warning}</p>
            }

            {
                !isSignin && 
                <div>
                    <p className='text-lg font-semibold text-black mb-2'>Name</p>
                    <input type="text" placeholder='Hello there' className='border-black border-2 w-80 rounded-sm p-2 mb-2'/>
                </div>
            }
            <div>
                <p className='text-lg font-semibold text-black'>Email</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' className='border-black border-2 w-80 rounded-sm p-2 mb-2'/>
            </div>
            <div>
                <p className='text-lg font-semibold text-black'>Password</p>
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='12345678' className='border-black border-2 w-80 rounded-sm p-2 mb-6'/>
            </div>
            <Button isSignin={isSignin} username={email} password={password}/>
            <p className='text-center text-zinc-400 italic font-semibold'>{isSignin ? "New user?  " : "Already have an account?  "} <Link className='text-blue-400 underline' href={isSignin ? "/auth/signup" : "/auth/signin"}>{isSignin ? "Sign up" : "Sign in"}</Link> </p>
            
        </div>
    )
}

export default Signin