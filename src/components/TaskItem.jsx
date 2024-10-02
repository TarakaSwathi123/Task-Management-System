import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Delete from "./Delete";
import { SetListItem } from "../App";

const TaskItem = ({ item, list }) => {

    const [toggleDescription, setToggleDescription] = useState(false)
    const [status, setStatus] = useState(item.status)
    const setList = useContext(SetListItem)

    const { id, title, description, priority, dueDate } = item
    const date = new Date(dueDate)

    const handleStatus = () => {
        setStatus(!status)
        const updated = list.map(task =>
            task.id === id ? { ...task, status: !status } : task
        )
        setList(updated)
    }

    return (
        <>
            <div className={`${status ? "bg-green-300" : null} border border-slate-400 p-4 my-3 shadow-xl`} >
                <input type="checkbox" defaultChecked={status} onChange={handleStatus} />
                <div>

                    <div className="flex justify-between gap-5">
                        <div onClick={() => setToggleDescription(!toggleDescription)}>
                            <h2 className="font-bold text-2xl max-w-fit   ">
                                {title} {toggleDescription ? <b className="text-red-600 float-right m-1"><FaMinus /></b> : <b className="text-green-600 float-right m-1  "><FaPlusSquare /></b>}
                            </h2>
                            {toggleDescription && <p>{description}</p>}
                        </div>

                        <div className="flex gap-3 items-center">
                            <Delete id={id} list={list} setList={setList} />
                            <Link to={`/editTask/${id}`} className="text-yellow-300 "> <HiPencilAlt size={30} /> </Link>
                        </div>
                    </div>

                    <div className="text-sm flex justify-between text-gray-600 mt-2 ">
                        <div className="flex gap-5">
                            <p>Status: <i>{status ? "completed" : "not-completed"}</i> </p>
                            <p>Priority: {priority}</p>
                        </div>
                        <p><i>Due Date:</i> {date.toLocaleDateString()} </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default TaskItem