
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Card1({userName = "Visit ME!", btnText = "Click me!"}) { 
  return (
    <div className="flex justify-wrap  flex-row gap-6 ">
  <div className="w-65 h-90 max-w-xs rounded-md shadow-md bg-black text-gray-100 flex flex-col mt-4">
    <img
      src="https://i.ytimg.com/vi/5UPdRF5xpVM/maxresdefault.jpg"
      alt=""
      className="object-cover object-center w-full rounded-t-md h-48 bg-gray-500"
    />
    <div className="flex flex-col justify-between p-6 space-y-5">
      <div className="space-y-1">
        <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
          soluta amet corporis!
        </p>
      </div>
      <button
        type="button"
        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
      >
        {btnText}
      </button>
    </div>
  </div>
</div>


  )
}

export default Card1