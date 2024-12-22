import PropTypes from 'prop-types'

const FollowerCard = ({ name = "untitle", image = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg", role = "unknown" }) => {
    return (
        <div className='bg-white p-10 rounded shadow text-center mb-5'>
            <img src={image} alt="kakashi hatake" className='w-40 h-40 object-cover rounded-full mx-auto' />
            <div className='mt-5'>
                <h4 className='text-xl font-semibold'>{name}</h4>
                <small>{role}</small>
            </div>
        </div>
    )
}

// https://naruto-api-character.onrender.com/api/characters

FollowerCard.prototype = {
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
}

export default FollowerCard;