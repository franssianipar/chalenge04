import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Input() {
    return (
        <>
            <h1 className="text-center text-5xl mb-5" > TodoSearch </h1>
            <div className="border-4 mx-12">
                <div className="relative mt-5 ml-12 w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pointer-events-none">
                        <button type= "submit" className="bg-cyan-400 h-11 w-11">
                                <FaSearch className="w-11 text-white"/>
                        </button>
                    </div>
                    <input type="text" className=" w-6/12 focus:outline-0 p-1 pl-12 border-2 border-gray h-11" placeholder="Search Todo"/>
                </div>
                
                <div>
                    <button className="bg-cyan-400 w-6/12 ml-12 mr-9 h-10 mt-5 mb-5"> Search </button>
                    <Link to="/create">
                        <button className="bg-cyan-400 w-96 ml-12 mr-9 h-10 mt-5 mb-5" > Add new task</button>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}