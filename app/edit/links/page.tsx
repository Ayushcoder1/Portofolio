"use client"
import Adder from "@/components/Adder";
import { useState } from "react";

export default function() {
    const [insertMode, setInsertMode] = useState(false);
    const arr = [["Github", "Ayushcode1", "https://github.com/Ayushcoder1/"], ["Leetcode", "Ayushcoder1", "https://leetcode.com/Ayushcoder1/"]];
    return <div>
        {
            arr.map((ele) => {
                return <div key={ele[0]} className="flex justify-center gap-4">
                    <div className="flex gap-1 mb-4 justify-center border-2 rounded-md w-70">
                        <button onClick={() => {
                            const data = {
                                data1 : ele[0],
                                data2 : ele[1],
                                data3 : ele[2],
                            }
                            sessionStorage.setItem("edit", JSON.stringify(data))
                            setInsertMode(true);
                        }} className="text-lg font-mono pt-2 hover:cursor-pointer">{ele[0]}</button>
                        <div className="pt-2 hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                    </div>
                    <div className="pt-2 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </div>
                </div>
            })
        }
        <div className="flex justify-center">
            <div onClick={() => {
                sessionStorage.removeItem("edit");
                setInsertMode(true);
            }} className="hover:cursor-pointer font-mono bg-zinc-300 text-xl rounded-md py-2 text-center font-semibold w-100 mt-4">Add link</div>
        </div>

        {
            insertMode && 
            <div className="fixed inset-0 bg-amber-50 shadow-3xl rounded-lg flex justify-center px-16 py-2 z-50 my-30 mx-50">
                <div className="flex justify-center full-screen">
                    <Adder setInsertMode={setInsertMode} inputType="link"/>
                </div>
            </div>
        }
    </div>
}