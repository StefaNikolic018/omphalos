import React, { memo } from 'react';
const ErrorMessage = (error?: any) => {
  return !!error?.message ? (
    <p className='text-red-500 text-xs italic p-2 relative -top-3 bg-[#ffffff74] rounded-2xl'>
      {error.message}
    </p>
  ) : (
    <></>
  );
};

export default memo(ErrorMessage);
