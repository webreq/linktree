import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {link} from './link'
function LinkTree() {
  return (
    <div className='w-full flex flex-col justify-center space-y-4'>
        {
            link.map((val,index)=><Link href={val.link?val.link:`/NotFound/${val.name}`} key={index+1} className="bg-thisAnotherOrange rounded-lg items-center flex space-x-3 px-1 ">
                <Image src={val.image} width={25} height={25} alt={val.name} />
                <p className='text-lg font-semibold'>{val.name}</p>
            </Link>)
        }
    </div>
  )
}

export default LinkTree