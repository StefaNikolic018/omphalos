import React from 'react'
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options: ToastOptions<{}> = {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}

const notify = (text: string, isError: boolean) => isError ? toast.error(text, options) : toast.success(text, options);

export default function useToast() {
    return notify;
}
