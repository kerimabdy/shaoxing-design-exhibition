'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

export const Navigation = () => {
  const currentPath = usePathname() || "";

  return <NavigationContainer>
    <Link href={'/students'}><NavigationLink aria-selected={currentPath.includes('/students')}>学生</NavigationLink></Link>
    <Link href={'/'}><NavigationLink aria-selected={currentPath === '/'}>主页</NavigationLink ></Link>
    <Link href={'/course'}><NavigationLink aria-selected={currentPath.includes('/course')}>课程</NavigationLink></Link>
  </NavigationContainer>
}