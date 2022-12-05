import Image from 'next/image'
import webreq from '../public/webreq.png'
import LinkTree from './LinkTree'
import TabNavigation from './TabNavigation'
function HomePage() {
  return (
    <div className='w-full h-screen flex flex-col items-center px-16 py-10 space-y-10 relative'>
        <Image src={webreq} className='rounded-full border-2 border-thisOrange' width={100} height={100}  alt="foto"/>
        <LinkTree/>
        <TabNavigation/>
    </div>
  )
}

export default HomePage