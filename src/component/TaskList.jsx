import { useAtom } from "jotai"
import { taskAtom } from "../../Store"
import { useState } from "react"
import TaskEdit from "./TaskEdit"
import { Link, Outlet } from "react-router-dom"


export const TaskList = ({tasks}) => {
    const [Tasks, setTask] = useAtom(taskAtom)

  return (
    <>
        {tasks?.map((task) => (
            <div className={`${task.status == 'Completed' ? 'line-through':''} bg-slate-100 w-2/3 rounded-md mb-5 max-md:w-11/12`} key={task.id}>
                <div className={`flex gap-3 justify-center items-center`}>
                    <h2  className={`font-extrabold text-center m-2`}>{task.title}</h2>
                    <span className={`${task.priority == 'Normal' ? 'bg-gray-600': ''} ${task.priority == 'Important' ? 'bg-yellow-600': ''} ${task.priority== 'Urgent' ?
 'bg-red-600' : ''} block h-2 w-2 rounded-full`}></span>  
                </div>
                
                <div className='flex border-t-8 border-b-8 min-h-20 '>
                    <div className='grid w-1/3 border-r-8 place-items-center text-center my-2'>
                        {task.dueDate}
                        <div>
                            <p className={`${task.status == 'Completed' ? 'text-gray-500': ''} ${task.status == 'Started' ? 'text-green-500': ''} ${task.status == 'Pending' ? 'text-orange-500' : ''} font-bold`}>Status: {task.status}</p>
                            <p className={`${task.priority == 'Normal' ? 'text-gray-600': ''} ${task.priority == 'Important' ? 'text-yellow-600': ''} ${task.priority== 'Urgent' ? 'text-red-600' : ''} font-bold`}>Priority: {task.priority}</p>
                        </div>
                    </div>
                    <div className='grid w-2/3 place-items-center p-5 text-center'>
                    <p>{task.description}</p>
                    </div>
                </div>
                <div className='flex justify-around my-2'>
                    <i className="fa-solid fa-trash cursor-pointer no-underline text-xl text-red-500" onClick={() => {
                        const idx = Tasks.findIndex(x => x.id === task.id)
                        const tasks = [...Tasks.slice(0, idx), ...Tasks.slice(idx + 1)]
                        setTask(tasks)
                    }}></i>
                    <Link to={`edit/${task.id}`} state={{
                        id: task.id,
                        data: task
                    }}> 
                        <i className="fa-solid fa-pen-to-square cursor-pointer text-xl text-slate-500" onClick={() => {}}></i> 
                    </Link>
                </div>
            </div>
        ))}
        <Outlet />
    </>
  )
}
