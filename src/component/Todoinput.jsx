import axios from "axios"
import { useEffect, useState } from "react"
import { FaBook } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"

export default function Todoinput(){
    const [inputan,setInputan]= useState('')
    const[data,setData] =useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    const addtodoList = ()=>{
        axios.post('https://fake-api-coba.herokuapp.com/todos/',{
            task:inputan,complete:false
        }).then((resp)=>{
            console.log(resp)
            setInputan("")
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    useEffect(()=>{

        if(id !==undefined){
        axios.get('https://fake-api-coba.herokuapp.com/todos/' + id)
            .then((resp)=>{
                console.log(resp)
                setData(resp.data)
                setInputan(resp.data.task)
            })
            .catch((err)=>{
                console.log(err)
            })

        }

    }, [id])
    
    const updateTodolist=()=>{
        axios.patch('https://fake-api-coba.herokuapp.com/todos/' + id,{
            task:inputan
        }).then((resp)=>{
            console.log(resp)
            setInputan("")
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })

    }

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
                <input type="text" onChange={function(e){
                    setInputan(e.target.value)
                }} defaultValue={data.task} className="flex-auto focus:outline-0 p-1 pl-12 border-2 border-gray h-11" placeholder="Input/Edit Todo"/>
            </div>
            
            <div className="flex-auto flex">
                <button className="flex-auto bg-cyan-400 mx-9 h-10 mt-5 mb-5 " onClick={function(){
                    if(id!== undefined){
                        updateTodolist()
                    }
                    else{
                        addtodoList()
                    }
                }}> Submit</button>
            </div>
        </div>
        </>
    )
}