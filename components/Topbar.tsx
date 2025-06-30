"use client"
import Link from "next/link";

export default function Topbar() {
    return <div className="flex justify-between border-b-2 mb-2">
        <div className="mt-4 p-3">
            <h1 className="font-mono text-3xl font-bold"><Link href="/">Portofolio</Link></h1>
        </div>
        <div className="my-4 p-3 mt-6">
            <Link className="font-mono text-blue-400 font-semibold text-xl" href='/edit'>Edit</Link>
        </div>
    </div>
}