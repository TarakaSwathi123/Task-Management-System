import { useContext, useEffect, useState } from "react"
import { AllListItem, SetListItem } from "../App"
import { useNavigate, useParams } from "react-router-dom"
import ReactDatePicker from "react-datepicker";



const EditTask = () => {

  const [updateTask, setUpdateTask] = useState([]);

  const navigate = useNavigate()
  const list = useContext(AllListItem)
  const setList = useContext(SetListItem)
  const { id } = useParams()


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!updateTask.title) {
      alert("Title required");
      return;
    } else {
      const updatedList = list.map(task => (task.id === updateTask.id) ? updateTask : task)
      setList(updatedList)
      navigate("/")
    }
  }

  const handleTitle = (e) => setUpdateTask(pre => ({ ...pre, title: e.target.value }))
  const handleDescription = (e) => setUpdateTask(pre => ({ ...pre, description: e.target.value }))
  const handlePriority = (e) => setUpdateTask(pre => ({ ...pre, priority: e.target.value }))
  const handleDueDate = (date) => setUpdateTask(pre => ({ ...pre, dueDate: date }))


  useEffect(() => {
    const editedItem = list.filter(ele => ele.id === parseInt(id))[0]
    const date = new Date(editedItem.dueDate)
    setUpdateTask({ ...editedItem, dueDate: date })
  }, [])

  return (

    <>
      {
        updateTask &&
        <form onSubmit={handleSubmit} className="flex flex-col">

          <input type="text" name="title" id="title" value={updateTask.title} className="border border-slate-500 mt-10 px-5 py-3 font-bold" placeholder="Add Topic" autoComplete="off" onChange={handleTitle} />

          <textarea name="description" id="description" value={updateTask.description} className="border border-slate-500 my-4 px-5 py-3" placeholder="Description" autoComplete="off" onChange={(e) => handleDescription(e)} />

          <div className="flex justify-between">
            <select name="priority" id="priority" value={updateTask.priority} className="max-w-xs py-2 px-3 text-center float-left outline-slate-500 " onChange={handlePriority}>
              <option value="" disabled className="font-bold">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <div className="flex text-lg">

              <p className="me-3">Due Date:</p>
              <div className="border border-slate-600 ">
                <ReactDatePicker name="dueDate" selected={updateTask.dueDate} onChange={handleDueDate} minDate={updateTask.dueDate} className="w-fit outline-none text-center" />
              </div>
            </div>
          </div>

          <button type="submit" className="bg-green-400 hover:bg-green-800 text-white hover:font-bold  py-3 mt-4"> Update </button>

        </form>
      }
    </>
  )
}

export default EditTask