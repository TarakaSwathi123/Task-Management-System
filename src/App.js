import { createContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import TaskList from "./components/TaskList"
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"

const AllListItem = createContext()
const SetListItem = createContext()

const getLocalStorage = () => {
  const list = localStorage.getItem("TaskItem")
  if (list) {
    return JSON.parse(list)
  } else {
    return []
  }
}

const App = () => {
  const [list, setList] = useState(getLocalStorage())

  useEffect(() => {
    localStorage.setItem("TaskItem", JSON.stringify(list))
  }, [list])


  return (
    <AllListItem.Provider value={list}>
      <SetListItem.Provider value={setList}>

        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<TaskList />} />
            <Route path="/addTask" element={<AddTask />} />
            <Route path="/editTask/:id" element={<EditTask />} />
          </Route>
        </Routes>

      </SetListItem.Provider>
    </AllListItem.Provider>
  )
}

export default App
export { AllListItem, SetListItem, getLocalStorage };