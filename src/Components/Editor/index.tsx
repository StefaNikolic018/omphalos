import React, { useState, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css'

export default function index({ text }: { text: string }) {
    // TODO:
    // 1. Create custom hook for adding new text
    // 2. Create input for title of the text
    // 3. Create button, form and logic for text save 

    return <div className="w-7/12 h-[80%] z-10"><ReactQuill className='bg-[#ffffffdb] dark:bg-zinc-900 dark:text-white rounded-xl w-full h-full text-black border-2 dark:border-[#ffffffdb]  border-zinc-700' placeholder='Enter your story here' theme="snow" value={text} /></div>
}
