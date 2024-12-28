import React from 'react'
import PropTypes from 'prop-types';

const AdminSidebar = ({ user }) => {
    return (
        <div className='bg-white p-10 rounded'>
            <h4 className='font-semibold'>Welcome {user.userName}</h4>
            <p className='text-gray-600'>Here are your side menus</p>
        </div>
    )
}

AdminSidebar.propTypes = {
    user: PropTypes.string,
}

export default AdminSidebar;