
import Todo from "./Todo"

export default function Todolist(props){
    
    
    return(
        <>
        <h1 className="text-center text-5xl mb-5"> TodoList</h1>

        <div className="flex">
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> All</button>
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Done</button>
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Todo</button>
        </div>
        {
            props.todolist.map(function (value, index) {
                return <Todo task={value.task} complete={value.complete} onCheckboxClick={function (){
                    let todolist = []
                    todolist.push(...props.todolist)
                    todolist[index].complete = !todolist[index].complete
                    props.setTodolist(todolist)
                }}/>
            })
        }

        <div className="flex">
            <button className="flex-auto mx-12 w-6/12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Delete done Task</button>
            <button className="flex-auto mx-12 w-6/12 bg-cyan-400 w-96 h-10 mt-5 mb-5"> Delete all Task</button>
        </div>
        
        </>
    )
}