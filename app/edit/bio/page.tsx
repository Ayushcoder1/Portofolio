export default function() {
    return <div>
        <div className="flex gap-32">
            <p className="text-lg font-mono pt-2">Full Name</p>
            <input type="text" placeholder="full name" className="font-mono text-lg border-2 px-4 py-2 rounded-md" />
        </div>
        <div className="flex gap-32 mt-8">
            <p className="text-lg font-mono pt-2">Jobs and main stack</p>
            <input type="text" placeholder="Fresher | SDE | React" className="font-mono text-lg border-2 px-4 py-2 rounded-md w-150 text-center" />
        </div>
        <div className="mt-16 text-center">
                <button className="w-50 right-0 bg-green-400 text-2xl font-mono text-white py-2 rounded-full">Submit</button>
        </div>
    </div>
}