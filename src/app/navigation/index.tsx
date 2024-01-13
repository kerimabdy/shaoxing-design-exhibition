import React from 'react';

export const NavigationContainer: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  return (
    <header className='absolute z-30 top-0 left-0 right-0 border-b border-b-zinc-800 bg-black'>
      <nav className='flex flex-nowrap *:!w-full divide-x divide-zinc-800'>{children}</nav>
    </header>
  )
}

export const NavigationLink: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
  return <div className="w-full flex justify-center text-opacity-70 hover:text-opacity-100  aria-selected:text-opacity-100 text-white p-8 bg-opacity-0 bg-white hover:bg-opacity-5  hover:border-opacity-100 aria-selected:bg-opacity-0 aria-selected:border-opacity-100 border-white border-opacity-0 border-b " {...props}>
    <span className='text-2xl '>{children}</span>
  </div>
}