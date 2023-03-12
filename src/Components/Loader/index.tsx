import React from 'react'
import { ColorRing } from 'react-loader-spinner'

export default function index() {
  return (
    <div className="flex-center h-screen w-screen bg-neutral-400">
      <div className="rounded-full bg-zinc-700 p-5">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </div>
  )
}
