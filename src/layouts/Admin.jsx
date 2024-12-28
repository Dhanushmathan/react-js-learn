import React, { useState } from 'react'
import AdminNavbar from '../components/UI/AdminNavbar';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/UI/AdminSidebar';

const AdminLayout = () => {

    const [user, seUser] = useState({
        userId: 1,
        userName: "Kakashi",
        isLoggIn: true,
    });

    return (
        <div className='bg-gray-300 min-h-screen pb-10'>
            <AdminNavbar user={user} />
            {/* Left Side bar */}
            <div className='flex m-5 space-x-10'>
                <div className='w-1/4'>
                    <AdminSidebar user={user} />
                </div>

                <div className='w-3/4 bg-white p-10 rounded'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;