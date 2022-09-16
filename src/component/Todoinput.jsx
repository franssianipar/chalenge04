import { FaBook } from "react-icons/fa"

export default function Todoinput(){
    return(
        <>
        <h1 className="text-center text-5xl mb-5" > TodoInput </h1>
        <div className="border-4 mx-12 flex flex-col">
            <div className="relative flex mx-9 mt-5">
                <div class="absolute w-full inset-y-0 left-0 items-center pointer-events-none">
                    <button type= "submit" className="bg-cyan-400 h-11 w-11">
                            <FaBook className="w-11 text-white"/>
                    </button>
                </div>
                <input type="text" className="flex-auto focus:outline-0 p-1 pl-12 border-2 border-gray h-11" placeholder="Search Todo"/>
            </div>
            
            <div className="flex-auto flex">
                <button className="flex-auto bg-cyan-400 mx-9 h-10 mt-5 mb-5 "> Search </button>
            </div>
        </div>
        </>
    )
}