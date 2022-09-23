import React from 'react'
import Lesotho from '../../src/img/lesotho.png'

function Navbar() {
  return (
    <div className='px-6 top-14 sticky'>
      <div className="pl-1 relative w-40 top-0 left-0">
        <nav className="relative py-2 mx-2">
            <div className="ml-2 pt-0">
                <h3 className="text-gray-700 font-bold text-xs">Me</h3>
                <ul className="p-0">
                    <li className="m-0 py-1 gap-1 px-0 text-base leading-4 flex">
                        <img src={Lesotho} className='w-5 object-cover' alt="Lesotho Flag" />
                        <span className='m-0 py-1 px-0 text-xs leading-4 cursor-pointer'>Lesotho</span>
                    </li>
                    <li  className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer">Grade 11</li>
                </ul>
            </div>
        </nav>
        <nav className="relative py-2 mx-2">
            <div className="ml-2 pt-0">
                <h3 className="text-gray-700 font-bold text-xs">Feed</h3>
                <ul className="p-0">
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">Bookmarks</li>
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">Lesson Plans</li>
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">Study Groups</li>
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">Tutors</li>
                </ul>
            </div>
        </nav>
        <nav className="relative py-2 mx-2">
            <div className="ml-2 pt-0">
                <h3 className="text-gray-700 font-bold text-xs">
                    <span>Contribute</span>
                </h3>
                <ul className="p-0">
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">Donate</li>
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">Become a Tutor</li>
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">Edit a Page</li>
                </ul>
                
            </div>
        </nav>
        <nav className="relative py-2 mx-2">
            <div className="ml-2 pt-0">
            <h3 className="text-gray-700 font-bold text-xs">Contact</h3>
                <ul>
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">Contact Us</li>
                    <li className="m-0 py-1 px-0 text-xs leading-4 cursor-pointer text-blue-700 hover:underline">About Nepang</li>
                </ul>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Navbar