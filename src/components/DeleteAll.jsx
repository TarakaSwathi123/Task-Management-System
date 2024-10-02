import { useContext } from "react"
import { SetListItem } from "../App"

const DeleteAll = () => {

    const setList = useContext(SetListItem)

    const handleClick = async () => {

        const confirmed = window.confirm("Are you sure to Delete All Data")
        if (confirmed) {
            setList([])
        }
    }

    return (
        <>
            <button className="text-red-500 float-right m-5 font-bold border border-red-400 bg-red-100 px-5 py-2 rounded-xl hover:bg-red-500 hover:text-white " onClick={handleClick}> Delete All </button>
        </>
    )
}

export default DeleteAll