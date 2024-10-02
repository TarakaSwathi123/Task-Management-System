import TaskItem from './TaskItem'
import { AllListItem, getLocalStorage } from '../App'
import { useContext, useEffect, useState } from 'react'
import DeleteAll from './DeleteAll';
import Sorting from './Sorting';

const TaskList = () => {

    const list = useContext(AllListItem);
    const [newList, setNewList] = useState(list)
    const [sort, setSort] = useState("")

    const sortingValue = (e) => {
        setSort(e)
    }


    const sortList = (e) => {
        const arr = newList

        if (e === "none") {
            setNewList(getLocalStorage())

        } else if (e === "priority") {
            const sortedArray = arr.sort((a, b) => {
                if (a.priority === "high") {
                    return -1;
                } else if (b.priority === "high") {
                    return 1;
                } else if (a.priority === "medium") {
                    return -1;
                } else if (b.priority === "medium") {
                    return 1;
                } else {
                    return 0;
                }
            })
            setNewList(sortedArray)

        } else if (e === "status") {
            const sortedArray = arr.sort((a, b) => {
                if (a.status === false) {
                    return -1;
                } else if (b.status === false) {
                    return 1;
                } else {
                    return 0;
                }
            })
            setNewList(sortedArray)
        }
        setSort(e)
    }

    useEffect(() => {
        setNewList(list)
    }, [list])


    return (
        <>
            {Boolean(newList.length) && <Sorting sortList={sortList} />}
            {
                newList && newList.map(item => {
                    return <TaskItem item={item} key={item.id} list={list} />
                })
            }
            {!newList.length && <h2 className='text-center mt-10 font-bold text-2xl text-red-500 '>No Task Found</h2>}

            {newList.length ? <DeleteAll /> : null}
        </>
    )
}

export default TaskList