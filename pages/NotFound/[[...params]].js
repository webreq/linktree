import Link from 'next/link'
import { useRouter } from 'next/router'
import {ChevronLeftIcon} from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { link } from '../../components/link'
function NotFound({params}) {
    const router= useRouter()
    useEffect(()=>{
        const activeurl = link.find(val=> val.name===params)
        if(!activeurl) router.push('/')
    },[])
  return (
    <div className='w-full h-screen relative flex'>
        <Link href={'/'} className='absolute top-2 left-2 flex items-center'>
            <ChevronLeftIcon className='text-thisWhite w-10 h-10' />
            <p className='text-thisWhite text-lg'>Back</p>
        </Link>
        <div className='mt-10 p-10 flex flex-col items-center w-full space-y-5 h-screen justify-center'>
            <p className='text-4xl font-extrabold'>404.</p>
            <p className='text-xl font-bold'>I don't have {params} account yet</p>
        </div>
    </div>
  )
}

export default NotFound

export function getServerSideProps({query}){
    const params = query?.params?.[0]
    return{
        props:{params:params?params:null}
    }
}