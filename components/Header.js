import Image from 'next/image'
import React, { useRef } from 'react'
import {useRouter} from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router=useRouter();
    const searchInputRef=useRef(null);

    const search=(e)=>{
        e.preventDefault();
        const term=searchInputRef.current.value;

        if(!term)
        return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image 
                src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                height={40} 
                width={120}
                className='cursor-pointer'
                onClick={()=>router.push('/')}
                />

                <form className='flex border flex-grow border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                    <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type='text'/>
                
                    <XIcon className='sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' onClick={()=>searchInputRef.current.value=""}/>

                    <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />

                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>

                <Avatar url='https://lh3.googleusercontent.com/a-/AOh14Gj2JANU9hIp_7rRckr6bp5JUxlWOhAHZOa0XE5j0g=s96-c-rg-br100' className='ml-auto'/>


                {/*Header options*/}

                



            </div>
            <HeaderOptions/>

            
        </header>
    )
}

export default Header
