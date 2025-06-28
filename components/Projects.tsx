function Projects() {
  const projects = [
    ["Todo Web App", "A Todo Web App with auth, edit, done, delete and insert feature"],
    ["Digit Recognizer", "A single-layer neural network from scratch trained to identify digits 0–9"],
    ["Dummy 3", "Dummy description"],
    ["Dummy 4", "Dummy description"],
    ["Dummy 5", "Dummy description"],
  ];

  return (
    <div className="grid grid-cols-2">
      {projects.map(([title, desc], idx) => (
        <div key={idx}
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 p-10 flex flex-col justify-between m-5">
            <div className="flex">
                <h2 className="text-2xl ml-2 font-semibold mb-2 text-zinc-500">{title}</h2>
            </div>
            <p className="text-zinc-400 flex-grow font-mono">{desc}</p>

        </div>
      ))}
    </div>
  );
}

export default Projects;
