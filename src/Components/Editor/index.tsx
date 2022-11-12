import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function index({ text }: { text: string }) {
    const [value, setValue] = useState(text);
    console.log(value)
    return <ReactQuill className='bg-white rounded-xl w-full h-full text-black' theme="snow" value={value} onChange={setValue} />
}
