import { useState } from "react"
import { v4 } from "uuid"
import { taskAtom } from "../../Store"
import { useAtom } from "jotai"


const TaskAdd = ({isOpen, setIsOpen}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [priority, setPriority] = useState('Normal')
    const [, setTask] = useAtom(taskAtom)

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleDes = (event) => {
        setDescription(event.target.value)
    }

    const handleDate = (event) => {
        setDate(event.target.value)
    }
    const handlePriority = (event) => {
        setPriority(event.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            id: v4(),
            title: title,
            description: description,
            dueDate: date,
            status: 'Pending',
            priority: priority
        }
        setTask((prevTask) =>[
            data,
            ...prevTask,
        ])
        setDate('')
        setTitle('')
        setPriority('Normal')
        setDescription('')
    }
  return (
    <>
        <div className={`${isOpen ? 'grid':'hidden'} place-items-center w-full h-full bg-trans fixed backdrop-blur-sm top-0 z-30`}>
            <button className="absolute top-20 grid place-items-center rounded-full h-8 w-8 bg-black" onClick={() => setIsOpen(!isOpen)}>
                <i className="fa-solid fa-xmark text-slate-300 text-xl"></i>
            </button>
            <form className="grid place-items-center h-auto w-1/2 bg-slate-200  rounded-md max-md:w-5/6" onSubmit={handleSubmit}>
                <div className="grid w-5/6 mb-4 mt-4">
                    <label htmlFor="title" className="font-bold">Title</label>
                    <input type="text" id="title" value={title} onChange={handleTitle} className="h-8 border-gray-400 border-2 rounded-md pl-4 outline-none text-sm" required/>
                </div>

                <div className="grid w-5/6 mb-4">
                    <label htmlFor="description" className="font-bold">Description</label>
                    <input type="text" id="description" value={description} onChange={handleDes} className="h-8 border-gray-400 border-2 rounded-md pl-4 outline-none text-sm" required/>
                </div>

                <div className="grid w-5/6 mb-4">
                    <label htmlFor="due-date" className="font-bold">Due-date</label>
                    <input type="date" id="due-date" value={date} onChange={handleDate} className="h-8 border-gray-400 border-2 rounded-md pl-4 outline-none text-sm" required/>
                </div>

                <div className="grid w-5/6 mb-4">
                    <label htmlFor="priority" className="font-bold">Priority</label>
                    <select name="priority" id="priority" value={priority} onChange={handlePriority} className="h-8 border-gray-400 border-2 rounded-md pl-4 outline-none text-sm" required>
                        <option value="Normal">Normal</option>
                        <option value="Important">Important</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                </div>                
                <button type="submit" className="bg-black rounded-md text-slate-200 font-bold h-8 mb-4 w-1/2"> Add </button>
            </form>
        </div>
    </>
  )
}

export default TaskAdd