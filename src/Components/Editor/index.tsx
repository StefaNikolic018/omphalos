import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function index({ text }: { text: string }) {
    // TODO:
    // 1. Create custom hook for adding new text
    // 2. Create input for title of the text
    // 3. Create button, form and logic for text save 

    return <ReactQuill className='bg-[#ffffffdb] rounded-xl w-full h-full text-black border-2 dark:border-white border-zinc-700' theme="snow" value={text} />
}
