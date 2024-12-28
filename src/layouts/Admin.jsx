import React, { useState } from 'react'
import AdminNavbar from '../components/UI/AdminNavbar';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/UI/AdminSidebar';
import UserContext from '../contexts/UserContext';

const AdminLayout = () => {

    const [user, setUser] = useState({
        userId: 1,
        userName: "Itachi",
        isLoggIn: true,
    });

    return (
        <div className='bg-gray-300 min-h-screen pb-10'>
            <UserContext.Provider value={{ user, setUser }}>
                <AdminNavbar />
                {/* Left Side bar */}
                <div className='flex m-5 space-x-10'>
                    <div className='w-1/4'>
                        <AdminSidebar />
                    </div>

                    <div className='w-3/4 bg-white p-10 rounded'>
                        <Outlet />
                    </div>
                </div>
            </UserContext.Provider>
        </div>
    )
}

export default AdminLayout;