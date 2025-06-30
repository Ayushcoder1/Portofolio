"use client"
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const bioRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      bioRef.current!.click();
    }, []);
    const route = useRouter();
  return (
    <div className="mx-8 my-4">
        <div className="flex gap-8 text-zinc-500 font-mono font-semibold text-xl border-b-2 border-zinc-300 w-155 py-2">
            <div ref={bioRef} className="hover:cursor-pointer" onClick={() => route.push('/edit/bio')}>Bio</div>
            <div className="hover:cursor-pointer" onClick={() => route.push('/edit/links')}>Links</div>
            <div className="hover:cursor-pointer" onClick={() => route.push('/edit/education')}>Education</div>
            <div className="hover:cursor-pointer" onClick={() => route.push('/edit/techstack')}>TechStack</div>
            <div className="hover:cursor-pointer" onClick={() => route.push('/edit/projects')}>Github Projects</div>
        </div>
        <div className="bg-white shadow-lg px-8 py-4 rounded-md m-4">
            {children}
        </div>
    </div>
  );
}
