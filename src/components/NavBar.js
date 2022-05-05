import React, {useState} from "react"
import { MenuIcon, XIcon} from '@heroicons/react/outline'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className=" pl-[1.5rem] w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Fetch Them All</h1>
                    <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Tools</li>    
                    </ul>
              
                {/* ///Everything below is what the user sees if their screen is md or smaller               */}
                </div>
                <div className="hidden md:flex pr-4">
                        <button className=' text-zinc-200 px-8 py-3 mb-4'>click me</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ?
                    <MenuIcon className="w-10"/>
                    : <XIcon className="w-5"/>}
                    
                </div>
            </div>
 
        <ul className={!nav ? 'hidden' : "absolute bg-zinc-200 w-full px-8"}>
                        <li className="border-b-2 border-zinc-300 w-full">Home</li>
                        <li className="border-b-2 border-zinc-300 w-full">About</li>
                        <li className="border-b-2 border-zinc-300 w-full">Tools</li>  
                        <div className="flex flex-col my-4">
                            <button className="text-zinc-200 px-8 py-3 mb-4">click me </button>
                        </div>
        </ul>

        </div>
    )
}

export default NavBar