import { useEffect, useState } from 'react'
import { TaskList } from './component/TaskList'
import TaskAdd from './component/TaskAdd'
import { Outlet } from 'react-router-dom'
import { useAtom } from 'jotai'
import { taskAtom } from '../Store'
import { Chart } from 'chart.js'


function App() {
  const [isAdd, setIsAdd] = useState(false)
  const [tasks, setTask] = useAtom(taskAtom)
  const [filteredTask, setFilterTask] = useState(tasks)
  const [filterModal, setFilterModal] = useState(false)

  useEffect(() => {
    setFilterTask(tasks)
  }, [tasks])

  const handleDateAdded = () => {
    setFilterTask(tasks)
    setFilterModal(false)
  }

  const handleDueDate = () => {
    const data = [...tasks].sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate))
    setFilterTask(data)
    setFilterModal(false)
  }

  const handleStatus = (status) => {
    const data = tasks.filter(task => task.status === status )
    setFilterTask(data)
    setFilterModal(false)
  }

  const handlePriority = (priority) => {
    const data = tasks.filter(task => task.priority === priority )
    setFilterTask(data)
    setFilterModal(false)
  }
  
  return (
    <>
    {/* <Chart /> */}
    <header className=' grid'>
      <h1 className='font-extrabold text-center text-xl mt-2'>Task manager</h1>
      <nav className='mt-10 flex justify-end mr-10 gap-5 fixed w-full top-4 right-4 backdrop:blur-xl'>
        
        <div className='flex gap-2 items-center px-2 py-1 rounded-lg hover:bg-trans' onClick={() => setFilterModal(!filterModal)}>
          <i className="fa-solid fa-filter text-xl cursor-pointer" ></i>
          <p>Filter</p>
        </div>
        <div className={`${filterModal ? 'grid' : 'hidden' } bg-slate-200 w-11/12 max-w-64 py-2 backdrop-blur-lg place-items-center z-40 absolute top-12`}>
          <h2 className='mt-2 font-bold'>Sort-by</h2>
          <ul className='mt-1 mb-2 w-full grid place-items-center'>
            <li className='grid place-items-center cursor-pointer pb-1 border-gray-400 border-b-2 w-11/12  ' onClick={handleDateAdded}>All</li>
            <li className='grid place-items-center cursor-pointer mt-1 pb-1 border-gray-400 border-b-2 w-11/12  ' onClick={handleDueDate}>Due-date</li>
            <li className='grid place-items-center mt-1 pb-1 border-gray-400 border-b-2 w-11/12  '>
              Priority
              <span className='flex justify-evenly mt-1 w-full'>
                <p className='border-gray-400 border-r-2 pr-2 cursor-pointer' onClick={() => handlePriority('Normal')}>Normal</p>
                <p className='border-gray-400 border-r-2 pr-2 cursor-pointer' onClick={() => handlePriority('Important')}>Important</p>
                <p className='pr-2 cursor-pointer' onClick={() => handlePriority('Urgent')}>Urgent</p>
              </span>
            
            </li>
            <li className='grid place-items-center mt-1 pb-1 w-11/12  '>
              Status
              <span className='flex justify-evenly mt-1  w-full'>
                <p className='border-gray-400 border-r-2 pr-2 cursor-pointer' onClick={() => handleStatus('Pending')}>Pending</p>
                <p className='border-gray-400 border-r-2 pr-2 cursor-pointer' onClick={() => handleStatus('Completed')}>Completed</p>
                <p className='pr-2 cursor-pointer' onClick={() => handleStatus('Started')}>Started</p>
              </span>
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
    <main className='flex justify-center'>
      <section className='mt-20 w-full grid place-items-center mb-20'>
        {/* <Outlet /> */}
        <TaskList tasks={filteredTask}/>
      </section>
    </main>
    <TaskAdd isOpen={isAdd} setIsOpen={setIsAdd} />
    <footer className='grid place-items-center w-full p-3'>
      <div className='fixed bottom-8 z-10 grid h-16 w-16 rounded-full place-items-center bg-black ' onClick={() => setIsAdd(!isAdd)}>
        <i className="fa-solid fa-plus text-slate-300 text-xl"></i>
      </div>
    </footer>
    </>
  )
}

export default App
