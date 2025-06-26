import Signin from "@/components/login"

export default function(){
    return <div className='flex flex-col items-center'>
        <div className='mt-10 w-100'>
            <Signin isSignin={1}/>
        </div>
    </div>
}