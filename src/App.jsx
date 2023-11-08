// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
// import HomePage from './components/FormPage/FormPage'
import Header from './components/Header/Header.jsx'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Header errorMessage="Поля: Имя, Телефон, Почта - обязательные" />
      ),
      errorElement: <ErrorPage />,
    },
  ])

  return (
    <>
      <div className="App" id="app">
        {/* <Header /> */}
        <RouterProvider router={router} />
        {/* <main>
          <Header />
        </main> */}
      </div>
    </>
  )
}

export default App
