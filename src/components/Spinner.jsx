import React from 'react'
import {FaSpinner} from "react-icons/fa"

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <FaSpinner className="text-5xl text-blue-500" />
    </div>
  )
}

export default Spinner