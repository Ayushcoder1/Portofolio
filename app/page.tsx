import Bio from "@/components/Bio";
import Education from "@/components/Education";
import Links from "@/components/Links";
import Projects from "@/components/Projects";
import Techstack from "@/components/Techstack";
import Theme from "@/components/Theme";
import Topbar from "@/components/Topbar";

export default async function Home() {
  return (
    
    <div className='grid grid-cols-3 mx-10'>
      <div className='col-span-1'>
        <Theme />
        <Bio />
        <Links />
        <Education />
        <Techstack />
      </div>
      <div className='col-span-2 ml-10'>
        <div className='shadow-sm bg-zinc-125'>
          <h1 className='text-3xl p-4 font-semibold'>GitHub Projects</h1>
          <Projects />
        </div>
      </div>
    </div>
  );
}
