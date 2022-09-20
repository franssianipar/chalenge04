import axios from "axios"
import { useEffect, useState } from "react"
import Input from "../component/Input"
import Todolist from "../component/Todolist"

export default function Main(){
    const [todolist, setTodolist] = useState([])

    useEffect(()=>{
        axios.get('https://fake-api-coba.herokuapp.com/todos/')
            .then((resp) => {
                console.log(resp)
                setTodolist(resp.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])



    return(
        <>
        <Input todolist={todolist} setTodolist={setTodolist} />
        <Todolist todolist={todolist} setTodolist={setTodolist}/>
        </>
        
    )
}