import axios from "axios"
import { FaPencilAlt, FaTrashAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export default function Todo(props){
    const navigate = useNavigate()

    const deleteTask = (id)=>{
        axios.delete('https://fake-api-coba.herokuapp.com/todos/' + id)
        .then((resp)=>{
            console.log(resp)
            alert("delete berhasil")
            props.fetch()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    return(
        <div className="border-4 mx-12 mt-4 px-12">
            <div className="relative mt-3 flex">
                <input readOnly type="text" className=" flex-auto focus:outline-0 mb-3" style={{textDecoration: props.complete === true ? "line-through" : "none"}} defaultValue={props.task}/>
                <input className="ml-2" type="checkbox" onClick={props.onCheckboxClick} defaultChecked={props.complete} />
                <button className="ml-2" onClick={function(){
                    navigate('/update/' + props.id)
                }}><FaPencilAlt/></button>
                <button className="ml-2" onClick={function(){
                    deleteTask(props.id)
                }}><FaTrashAlt/></button>
            </div>
        </div>
    )

}