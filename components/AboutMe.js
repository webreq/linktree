import {UserIcon,CalendarIcon,InformationCircleIcon,DevicePhoneMobileIcon,EnvelopeIcon} from '@heroicons/react/24/outline'
import TabNavigation from './TabNavigation'
function AboutMe() {
  return (
    <div className='w-full h-screen flex flex-col px-16 py-10 space-y-10 relative'>
        <p className='text-4xl font-roboto font-extrabold'>About Me:</p>
        <div className='flex flex-col space-y-4'>
            <div className='flex space-x-3 items-center'>
                <div className='bg-calm rounded-sm w-8 h-8'>
                    <UserIcon className='text-thisBrown' />
                </div>
                <p className='font-roboto font-bold'>Web Req</p>
            </div>
            <div className='flex space-x-3 items-center'>
                <div className='bg-calm rounded-sm w-8 h-8'>
                    <CalendarIcon className='text-thisBrown' />
                </div>
                <p className='font-roboto font-bold'>3rd June 2019</p>
            </div>
            <div className='flex space-x-3 items-center'>
                <div className='bg-calm rounded-sm w-8 h-8'>
                    <DevicePhoneMobileIcon className='text-thisBrown' />
                </div>
                <p className='font-roboto font-bold'>085XXXXXXXX</p>
            </div>
            <div className='flex space-x-3 items-center'>
                <div className='bg-calm rounded-sm w-8 h-8'>
                    <EnvelopeIcon className='text-thisBrown' />
                </div>
                <p className='font-roboto font-bold'>webreq@mail.com</p>
            </div>
            <div className='w-full h-auto border-thisWhite border rounded-sm p-4 relative'>
                <InformationCircleIcon className='absolute top-0 left-0 text-thisWhite w-5 h-5' />
                <p className='text-xs text-thisWhite'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
        <TabNavigation/>
    </div>
  )
}

export default AboutMe