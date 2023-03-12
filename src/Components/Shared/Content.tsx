import React from 'react'
import Snowfall from 'react-snowfall'
import { ToastContainer } from 'react-toastify'

import Sidebar from '../Sidebar'
import Loader from '../ThemeLoader'
import bg from '../../assets/background.jpg'

import useGlobalContext from '../../Context/Global/useGlobalContext'
import FirebaseContextProvider from '../../Context/Firebase/FirebaseContext'

export default function Content({ children }: { children: React.ReactNode }) {
  const { dark, isInit } = useGlobalContext()

  return (
    <FirebaseContextProvider>
      <div className="relative min-h-screen w-screen overflow-x-hidden dark:bg-zinc-900">
        <ToastContainer />
        {!isInit ? (
          <Loader />
        ) : (
          <div className="home dark:home-black flex flex-col md:flex-row">
            <Sidebar />
            <div className="relative w-full">
              <img
                src={bg}
                alt="Bg"
                className="mobile-content-h absolute top-0 left-0 z-0 w-full opacity-10 dark:opacity-[3%] md:h-screen"
              />
              <Snowfall
                snowflakeCount={25}
                style={{ width: '100%' }}
                color={dark ? 'white' : 'black'}
              />
              {children}
            </div>
          </div>
        )}
      </div>
    </FirebaseContextProvider>
  )
}
