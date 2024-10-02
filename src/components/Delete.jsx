import { GoTrash } from "react-icons/go";

const Delete = (props) => {

    const handleDelete = () => {
        const updated = props.list.filter(task => task.id !== props.id)
        props.setList(updated)
    }

    return (
        <>
            <button className="text-red-500 " onClick={handleDelete}> <GoTrash size={28} /> </button>
        </>
    )
}

export default Delete