"use client";

import { useEffect, useRef } from "react";

export default function Adder({inputType, setInsertMode} : {inputType : string, setInsertMode: (mode: boolean) => void}) {
    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const ref3 = useRef<HTMLInputElement>(null);
    const data = JSON.parse(sessionStorage.getItem("edit") || "{}")

    useEffect(() => {
        ref1.current!.value = data.data1 || '';
        ref2.current!.value = data.data2 || '';
        ref3.current!.value = data.data3 || '';
        ref1.current!.focus();
    }, []);

    const headers = inputType == 'link' ? ["Website name: ", "Text: ", "Link: "]
    : inputType == 'education' ? ["Period of education: ", "Title(like BS in Maths): ", "College: "] 
    : ["Project title: ", "Project description: ", "Github link: "];
    return (
        <div className="grid grid-rows-4 gap-4 p-8">
            <div className="grid grid-rows-2 gap-2">
                <p className="text-lg font-mono pt-2">{headers[0]}</p>
                <input ref={ref1} type="text" className="font-mono bg-white p-2 text-lg border-2 px-4 py-2 rounded-md w-150" />
            </div>
            <div className="grid grid-rows-2 gap-2">
                <p className="text-lg font-mono pt-2">{headers[1]}</p>
                <input ref={ref2} type="text" className="font-mono bg-white p-2 text-lg border-2 px-4 py-2 rounded-md w-150" />
            </div>
            <div className="grid grid-rows-2 gap-2">
                <p className="text-lg font-mono pt-2">{headers[2]}</p>
                <input ref={ref3} type="text" className="font-mono bg-white p-2 text-lg border-2 px-4 py-2 rounded-md w-150" />
            </div>
            <div className="mt-8 justify-center flex gap-4">
                <button className="hover:cursor-pointer w-50 right-0 bg-green-400 text-2xl font-mono text-white py-2 rounded-full">Submit</button>
                <button onClick={() => {
                    setInsertMode(false);
                }} className="hover:cursor-pointer w-50 right-0 bg-red-400 text-2xl font-mono text-white py-2 rounded-full">Cancel</button>
            </div>
            
        </div>
    )
}