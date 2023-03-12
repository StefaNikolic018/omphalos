import React, { memo } from 'react'
import ModeSwitch from './ModeSwitch'
import Tooltip from '../Shared/Tooltip'
import useFirebaseContext from '../../Context/Firebase/useFirebaseContext'

import { BiLogOutCircle } from 'react-icons/bi'
import logo from '../../assets/omphalos-logo-custom.png'

const index = () => {
  const { user, logout } = useFirebaseContext()
  return (
    <div className="w-30 flex flex-row items-center justify-between bg-neutral-100 p-3 text-zinc-900 shadow-md dark:bg-zinc-900 dark:text-neutral-100 md:h-screen md:flex-col md:shadow-zinc-900 md:dark:shadow-neutral-100">
      <div className="space-y-5">
        <div className="ease-liner flex items-center justify-between rounded-3xl border border-x-2 border-y-transparent border-x-orange-400 bg-gray-300 p-2 transition-all duration-200 hover:rounded-xl dark:bg-zinc-800 dark:hover:bg-zinc-700">
          <h2>
            <img
              className="w-16 dark:invert dark:saturate-0"
              src={logo}
              alt="Omphalos Logo"
            />
          </h2>
        </div>
        <hr className="mx-auto hidden h-1 rounded border-0 bg-gray-300 dark:bg-zinc-800 md:visible" />
        {!!user && (
          <div className="flex-center flex-col">
            <ul className="space-y-1 pt-2 pb-4 text-sm">
              <li>
                <Tooltip text={user.displayName}>
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="mb-4 h-16 w-16 cursor-pointer rounded-full border-4 border-orange-500 hover:opacity-80"
                  />
                </Tooltip>
              </li>
              <li>
                <Tooltip text="Logout">
                  <button
                    className="ease-liner group mx-auto mb-3 flex w-2/3 justify-center rounded-3xl bg-gray-300 px-2 py-1 transition-all duration-200 hover:rounded-xl hover:bg-gray-300 hover:text-orange-600 hover:shadow-sm dark:bg-zinc-800 dark:shadow-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-orange-600"
                    onClick={logout}
                  >
                    <BiLogOutCircle className="text-4xl group-hover:text-orange-400 dark:text-neutral-100" />
                  </button>
                </Tooltip>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4 justify-self-end p-2 md:mt-12">
        <ModeSwitch />
      </div>
    </div>
  )
}

export default memo(index)
