import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';

import ErrorMessage from '../Shared/Form/ErrorMessage';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import useFirebaseContext from '../../Context/Firebase/useFirebaseContext';


export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    delayError: 500,
  });
  const { login, googleLogin } = useFirebaseContext();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    login(data.email, data.password);
    reset();
  };
  return (
    <div className='dark:text-neutral-100 text-zinc-900 flex flex-col justify-center items-center w-full min-h-screen z-10'>
      <h1 className='font-bold text-3xl -mb-10 animate-bounce'>LOGIN</h1>
      <div className=' z-10 flex flex-col relative w-[40%]'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500 500'
          width='100%'
          id='blobSvg'
          filter='blur(0px)'
          style={{ opacity: ' 1' }}
          transform='rotate(0)'
          className='flex justify-center items-center '
        >
          {' '}
          <defs>
            {' '}
            <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
              {' '}
              <stop
                offset='0%'
                style={{ stopColor: 'rgb(255, 195, 117)' }}
              ></stop>{' '}
              <stop
                offset='100%'
                style={{ stopColor: 'rgb(255, 149, 0)' }}
              ></stop>{' '}
            </linearGradient>{' '}
          </defs>{' '}
          <path id='blob' fill='url(#gradient)' style={{ opacity: ' 1' }}>
            <animate
              attributeName='d'
              dur='15s'
              repeatCount='indefinite'
              values='M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M384.02639,318.52969Q359.04619,387.05939,278.02474,435.01815Q197.0033,482.97691,137.94391,408.01485Q78.88453,333.05279,75.91422,249.0132Q72.94391,164.97361,138.46041,107.43731Q203.97691,49.90102,276.0132,88.41917Q348.04949,126.93731,378.52804,188.46866Q409.0066,250,384.02639,318.52969Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M451.77435,331.68776Q380.0333,413.37552,297.8522,408.1811Q215.67111,402.98668,163.20108,360.14446Q110.73105,317.30225,116.40549,253.17111Q122.07993,189.03996,169.7144,146.88551Q217.34887,104.73105,314.55328,76.47669Q411.75769,48.22232,467.63654,149.11116Q523.51539,250,451.77435,331.68776Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z'
            ></animate>
          </path>
          <path id='blob' fill='url(#gradient)' style={{ opacity: ' 1' }}>
            <animate
              attributeName='d'
              dur='15s'
              repeatCount='indefinite'
              values='M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z'
            ></animate>
          </path>
        </svg>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='absolute top-1/3 left-1/3 gap-5 flex flex-col justify-center items-center'
        >
          <input
            type='email'
            className='border-2 border-zinc-900 dark:text-zinc-800 py-2 px-5 text-zinc-800  dark:border-neutral-100 dark:bg-zinc-900 hover:scale-x-105 rounded-xl text-xl transition-all duration-150 ease-linear  
          hover:opacity-80
          focus:border-orange-400
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            placeholder='Email'
            {...register('email', {
              required: 'Please enter your Email address',
              minLength: {
                value: 10,
                message: 'Minimum 10 characters!',
              },
            })}
          />
          <ErrorMessage error={errors.email} />
          <input
            type='password'
            className='border-2 border-zinc-900 dark:text-zinc-800 py-2 px-5 text-zinc-800  
          dark:bg-zinc-900 dark:border-neutral-100 hover:scale-x-105 rounded-xl text-xl transition-all duration-150 ease-linear  
          hover:opacity-80
          focus:border-orange-400
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            placeholder='Password'
            {...register('password', {
              required: 'Please enter your password',
              minLength: {
                value: 6,
                message: 'Minimum 6 characters!',
              },
            })}
          />
          <ErrorMessage error={errors.password} />
          <div className="flex flex-col justify-center items-center gap-3">
            <div className='flex  flex-row justify-center items-center gap-5'>
              <Link
                to='/register'
                className='relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl'
              >
                <span
                  className='w-full h-full bg-gradient-to-br from-[#ff8a0591] via-[#a48a2287] to-[#7272727c] group-hover:from-[#72727288] group-hover:via-[#a48a2282] group-hover:to-[#ff8a0582]
            dark:from-[#ff8a0524] dark:via-[#a48a2224] dark:to-[#7272722f] dark:group-hover:from-[#7272722f] dark:group-hover:via-[#a48a2224] dark:group-hover:to-[#ff8a0524]
            absolute'
                ></span>
                <span className='relative px-5 py-1 transition-all ease-out bg-white  dark:bg-black  rounded-xl group-hover:bg-opacity-0 duration-400'>
                  <span className='relative text-black dark:text-white'>
                    Sign up
                  </span>
                </span>
              </Link>
              <button
                type='submit'
                className={`${isValid ? 'opacity-1' : 'opacity-50'
                  } relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl`}
                disabled={!isValid}
              >
                <span className='w-full h-full bg-gradient-to-br from-[#ff8a05ed] via-[#a45c22] to-[#7272729a] group-hover:from-[#727272e8] group-hover:via-[#a45c22] group-hover:to-[#ff8a05e7] absolute'></span>
                <span className='relative px-5 py-1 transition-all ease-out bg-white  dark:bg-black  rounded-xl group-hover:bg-opacity-0 duration-400'>
                  <span className='relative text-black dark:text-white '>
                    Log in
                  </span>
                </span>
              </button>
            </div>
            <div className="flex justify-center items-center w-full rounded-xl bg-[#ffffffcc] hover:bg-white transition-all duration-150 shadow-xl cursor-pointer py-2" onClick={googleLogin}>
              <FcGoogle className='text-3xl ' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
