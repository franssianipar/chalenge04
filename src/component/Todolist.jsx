
import axios from "axios"
import Todo from "./Todo"

export default function Todolist(props){
    const updateComplete = (id,valueComplete)=>{
        axios.patch('https://fake-api-coba.herokuapp.com/todos/' + id,{
            complete: !valueComplete
        }).then((resp)=>{
            console.log(resp)
            alert("Update complete berhasil")
            props.fetch()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const Returncomplete=(todolist)=>{
        return todolist.filter((list)=>list.complete===true)
    }

    return(
        <>
        <h1 className="text-center text-5xl mb-5"> TodoList</h1>

        <div className="flex">
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5" onClick={function(){
                props.setFilter('all')
            }}> All</button>
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5" onClick={function(){
                props.setFilter('done')
            }}> Done</button>
            <button className="flex-auto mx-12 bg-cyan-400 w-96 h-10 mt-5 mb-5" onClick={function(){
                props.setFilter('todo')
            }}> Todo</button>
        </div>
        {
            props.todolist.map(function (value, index) {
                return <Todo key={value.id} task={value.task} complete={value.complete} id={value.id}
                fetch={props.fetch}
                onCheckboxClick={function (){
                    updateComplete(value.id, value.complete)
                    let todolist = []
                    todolist.push(...props.todolist)
                    todolist[index].complete = !todolist[index].complete
                    props.setTodolist(todolist)
                }}/>
            })
        }

        <div className="flex">
        <button className="flex-auto mx-12 w-6/12 bg-cyan-400 w-96 h-10 mt-5 mb-5"onClick={function(){
                    for(let i = 0; i < props.todolist.length; i++){
                        if(props.todolist[i].complete){
                            props.deleteTask(props.todolist[i].id)
                        }
                     }}}> Delete done Task</button>  
            <button className="flex-auto mx-12 w-6/12 bg-cyan-400 w-96 h-10 mt-5 mb-5"onClick={function(){
                    for(let i = 0; i < props.todolist.length; i++){
                        props.deleteTask(props.todolist[i].id)
                    }}}
                    > Delete all Task</button>
        </div>
        
        </>
    )
}