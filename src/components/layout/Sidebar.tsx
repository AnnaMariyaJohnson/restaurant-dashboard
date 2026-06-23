import {Link} from 'react-router-dom'

export default function Sidebar(){
    return(
        <div className='w-64 bg-gray-900 text-white min-h-screen p-5'>
            <h2 className='text-xl font-bold mb-8'>
                QuickBite Dashboard
            </h2>
            <nav className='space-y-4'>
                <Link 
                    to="/dashboard"
                    className='block'
                >
                    Dashboard
                </Link>

                <Link 
                    to="/menu"
                    className='block'
                >
                    Menu
                </Link>

                <Link 
                    to="/orders"
                    className='block'
                >
                    Orders
                </Link>

                <Link 
                    to="/reviews"
                    className='block'
                >
                    Reviews
                </Link>

                <Link 
                    to="/profile"
                    className='block'
                >
                    Restaurant Profile
                </Link>
            </nav>
        </div>
    )
}