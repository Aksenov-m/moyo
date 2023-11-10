import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import PageAuth from './components/FormPage/FormPage.jsx'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/moyo',
      element: (
        <PageAuth errorMessage="Неверный email или пароль. Попробуйте ещё раз или восстановите пароль" />
      ),
      errorElement: <ErrorPage />,
    },
  ])

  return (
    <>
      <div className="App" id="app">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
