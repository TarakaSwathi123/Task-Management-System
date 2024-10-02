import styles from "../styles/Navbar.module.css"
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <section className="container mx-auto py-6 px-3 bg-white">

                <nav className="flex gap-5 items-center px-8 py-3 justify-between bg-slate-800 text-white font-bold tracking-widest rounded-3xl ">
                    <Link to={'/'} className="text-2xl hover:text-red-200  ">Task Management Application</Link>
                    <Link to='/addTask' className="bg-white text-black hover:bg-gray-500  hover:text-white  rounded-2xl px-4 py-2 " >Add Task</Link>
                </nav>

                <Outlet />
            </section>
        </>
    )
}

export default Navbar