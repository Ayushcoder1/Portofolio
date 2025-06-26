"use client"

import axios from "axios";

export default function({isSignin, username, password} : {isSignin : number, username : string, password : string}) {
    const session = async () => {
        await axios.post('http://localhost:3000/api/signup', {
            username,
            password
        });
    }
    return (
        <div>
            <button onClick={session} className='border-black border-2 w-80 rounded-full p-2 mb-2 text-white bg-green-500 text-lg font-bold'>{isSignin ? "Log in" : "Sign up"}</button>
        </div>
    )
}