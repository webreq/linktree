import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {CursorArrowRaysIcon} from '@heroicons/react/24/outline'
function TabNavigation() {
    const {pathname}= useRouter()
  return (
    <div className='absolute w-full bottom-0 left-0 bg-thisPink h-12 flex justify-center items-center'>
        <Link href="/" className={`${pathname==='/'?'text-thisPurple':'text-thisWhite'} text-lg font-semibold w-full text-center relative`}>
        My Link
            {pathname==='/'&&<CursorArrowRaysIcon className={`absolute bottom-0 right-8 w-6 h-6 animate-bounce -rotate-12`}/>}
        </Link>
        <Link href="/about" className={`${pathname==='/about'?'text-thisPurple':'text-thisWhite'} text-lg font-semibold w-full text-center relative`}>
        About Me
            {pathname==='/about'&&<CursorArrowRaysIcon className={`absolute bottom-0 right-8 w-6 h-6 animate-bounce -rotate-12`}/>}
        </Link>
    </div>
  )
}

export default TabNavigation