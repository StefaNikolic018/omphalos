import React, { memo } from 'react'
const ErrorMessage = (error?: any) => {
  return !!error?.message ? (
    <p className="relative -top-3 rounded-2xl bg-[#ffffff74] p-2 text-xs italic text-red-500">
      {error.message}
    </p>
  ) : (
    <></>
  )
}

export default memo(ErrorMessage)
