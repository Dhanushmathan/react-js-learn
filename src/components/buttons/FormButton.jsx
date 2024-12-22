import React from 'react'

const FormButton = (props) => {
  return (
    <div>
        <button className='px-4 py-2 rounded bg-yellow-700 text-white w-full hover:bg-yellow-800'>{}{props.text}</button>
    </div>
  )
}

export default FormButton;