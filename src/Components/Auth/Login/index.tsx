import React, { memo } from 'react'
import { FcGoogle } from 'react-icons/fc'

import Blob from '../../Shared/Blob'

import useFirebaseContext from '../../../Context/Firebase/useFirebaseContext'

const Login = () => {
  const { googleLogin } = useFirebaseContext()

  return (
    <div className="mobile-content-h relative z-10 flex w-full flex-col items-center justify-center text-zinc-900 dark:text-neutral-100 md:min-h-screen">
      <div className="relative z-10 flex w-10/12 flex-col md:w-[40%]">
        <Blob />
      </div>
      <div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-3xl border-2 border-zinc-900 bg-[#ffffffcc] px-2 py-2 shadow-xl transition-all duration-150 hover:bg-white dark:border-[#ffffffcc] dark:bg-zinc-800 dark:hover:bg-zinc-900"
        onClick={googleLogin}
      >
        <FcGoogle className="text-3xl " />
      </div>
    </div>
  )
}

export default memo(Login)
