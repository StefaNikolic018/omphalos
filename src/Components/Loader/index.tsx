import React from 'react'
import { ColorRing } from 'react-loader-spinner'


import logo from '../../assets/logo.png'

export default function index() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-neutral-400">
            <div className="p-5 rounded-full bg-zinc-700">
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
