export default function() {
     const arr = ["C++", "Python", "HTML", "CSS", "JavaScript", "Node.js",
         "React", "Tailwind", "Git", "Bash", "MongoDB", "MySQL"];
    return <div>
        <div>
            <input type="text" placeholder="" className="font-mono text-lg border-2 px-4 py-2 rounded-md" />
            <button className="px-4 ml-4 bg-zinc-400 text-2xl font-mono text-white py-2 rounded-full">Add</button>
        </div>
        <div className="grid grid-cols-8 gap-8 mt-8 border-2 border-zinc-400 p-4 rounded-sm">
            {
                arr.map((ele) => {
                    return <div key={ele} className="flex justify-between border-2 px-4 py-2 rounded-sm">
                        <p className="hover:cursor-pointer">×</p>
                        <p>{ele}</p>
                    </div>
                })
            }
        </div>
    </div>
}