import { FaPencilAlt, FaTrashAlt} from "react-icons/fa"

export default function Todo(props){
    return(
        <div className="border-4 mx-12 mt-4 px-12">
            <div className="relative mt-3 flex">
                <input type="text" className=" flex-auto focus:outline-0 mb-3" style={{textDecoration: props.complete === true ? "line-through" : "none"}} defaultValue={props.task}/>
                <input className="ml-2" type="checkbox" onClick={props.onCheckboxClick} defaultChecked={props.complete} />
                <button className="ml-2"><FaPencilAlt/></button>
                <button className="ml-2"><FaTrashAlt/></button>
            </div>
        </div>
    )

}