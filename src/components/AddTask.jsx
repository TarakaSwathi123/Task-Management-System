import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SetListItem } from "../App";


const AddTask = () => {

    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: "low",
        status: false,
        dueDate: new Date()
    });
    const navigate = useNavigate()
    const setList = useContext(SetListItem)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!task.title) {
            alert("Title required");
            return;
        } else {
            // localStorage.setItem("TaskList", JSON.stringify({
            //     ...task, id: (new Date().getTime()), dueDate
            // }))
            setList(pre => {
                return [{ ...task, id: (new Date().getTime()) }, ...pre]
            })
            navigate("/")
        }
    }

    const handleDescription = (e) => setTask(pre => ({ ...pre, description: e.target.value }))
    const handlePriority = (e) => setTask(pre => ({ ...pre, priority: e.target.value }))
    const handleDueDate = (date) => setTask(pre => ({ ...pre, dueDate: date }))

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">

                <input type="text" name="title" id="title" value={task.title} className="border border-slate-500 mt-10 px-5 py-3 font-bold" placeholder="Add Topic" autoComplete="off" onChange={(e) => setTask(pre => ({ ...pre, title: e.target.value }))} />

                <textarea name="description" id="description" value={task.description} className="border border-slate-500 my-4 px-5 py-3" placeholder="Description" autoComplete="off" onChange={(e) => handleDescription(e)} />

                <div className="flex justify-between rounded-md ">
                    <select name="priority" id="priority" defaultValue={""} className="max-w-xs py-2 px-3 text-center float-left rounded-sm" onChange={handlePriority}>
                        <option value="" disabled className="font-bold">Select Prority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <div className="flex text-lg">

                        <p className="me-3">Due Date:</p>
                        <div className="border border-slate-600 ">
                            <DatePicker name="dueDate" selected={task.dueDate} onChange={handleDueDate} minDate={task.dueDate} className="w-fit outline-none text-center" />
                        </div>
                    </div>
                </div>

                <button type="submit" className="bg-green-400 hover:bg-green-800 text-white hover:font-bold  py-3 mt-4"> Add + </button>

            </form>
        </>
    )
}

export default AddTask;
