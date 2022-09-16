
import Todo from "./Todo"

export default function Todolist(){
    return(
        <>
        <h1 className="text-center text-5xl mb-5"> TodoList</h1>

        <div className="flex">
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Add new task</button>
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Add new task</button>
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Add new task</button>
        </div>

        <Todo/>
        <Todo/>
        <Todo/>

        <div className="flex">
            <button className="flex-auto mx-12 w-6/12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Add new task</button>
            <button className="flex-auto mx-12 w-6/12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Add new task</button>
        </div>
        
        </>
    )
}