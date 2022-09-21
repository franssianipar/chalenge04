import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import Input from "../component/Input"
import Todolist from "../component/Todolist"

export default function Main(){
    const [filter,setFilter] = useState('all')
    const[search,setSearch] = useState('')
    const [todolist, setTodolist] = useState([])

    const fetch = useCallback(() => {
        axios.get('https://fake-api-coba.herokuapp.com/todos/')
        .then((resp) => {
            console.log(resp)
            const filteredtodoList = resp.data.reduce(function(prevValue,currentValue){
                console.log(currentValue.task)
                if (!currentValue.task.toUpperCase().includes(search.toUpperCase())){
                    return prevValue
                }

                if(filter==='all'){
                    prevValue.push(currentValue)
                }
                else if(filter==='done' && currentValue.complete===true){
                    prevValue.push(currentValue)   
                }
                else if(filter==='todo' && currentValue.complete===false){
                    prevValue.push(currentValue)
                }
                return prevValue
            },[]) 
            setTodolist(filteredtodoList)
        })
        .catch((e) => {
            console.log(e)
        })        
    }, [filter,search])

    useEffect(()=>{
        fetch()
    }, [filter, search, fetch])



    return(
        <>
        <Input todolist={todolist} setTodolist={setTodolist} setSearch={setSearch}/>
        <Todolist todolist={todolist} setTodolist={setTodolist} setFilter={setFilter} filter={filter} fetch={fetch}/>
        </>
        
    )
}