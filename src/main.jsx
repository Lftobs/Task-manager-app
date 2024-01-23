import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'jotai'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TaskEdit from './component/TaskEdit.jsx'
import { TaskList } from './component/TaskList.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'edit/:taskId',
        element: <TaskEdit />
        // index: true,
        // path: '/',
        // element: <TaskList />,
        // children: [
        //   {
        //     path: 'edit/:taskId',
        //     element: <TaskEdit />
        //   },
        // ]
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={route} />
    </Provider>
    
  </React.StrictMode>,
)
