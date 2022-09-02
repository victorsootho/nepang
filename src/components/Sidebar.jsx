import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="pl-2 relative w-40 top-0 left-0">
                <nav className="relative py-2 mx-2">
                    <div className="ml-2 pt-0">
                        <ul className="p-0">
                            <li className="m-0 py-1 px-0 text-xs leading-4">Bookmarks</li>
                            <li className="m-0 py-1 px-0 text-xs leading-4">Lesson Plans</li>
                            <li className="m-0 py-1 px-0 text-xs leading-4">Contact Us</li>
                            <li className="m-0 py-1 px-0 text-xs leading-4">About Nepang</li>
                        </ul>
                    </div>
                </nav>
                <nav className="relative py-2 mx-2">
                    <div className="ml-2 pt-0">
                        <ul className="p-0">
                            <li className="m-0 py-1 px-0 text-xs leading-4">Community</li>
                            <li className="m-0 py-1 px-0 text-xs leading-4">Contribute</li>
                            <li className="m-0 py-1 px-0 text-xs leading-4">Donate</li>
                        </ul>
                    </div>
                </nav>
            </div>
    </div>
  )
}

export default Navbar