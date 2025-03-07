import { CommentOutlined, HeartFilled, HeartOutlined, HeartTwoTone } from '@ant-design/icons'
import React from 'react'

const MemeCard = ({name, url, isLiked, likeCount, handleLike, commentCount, handleComment }) => {
  return (
    <div className="bg-(--gray-color) rounded-lg shadow-md p-1 overflow-hidden transition duration-300 hover:scale-105">
    <img
      src={url}
      alt={name}
      className="w-full h-80 object-cover"
    />
    <div className="p-4">
      <div className="flex items-center mb-2">
        <h3 className="font-semibold text-lg">{name}</h3>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={handleLike} className="flex items-center text-gray-600 hover:text-red-500 focus:outline-none">
            {isLiked ? (
            //   <HeartFilled  className="w-5 h-5 fill-red-500" />
            <HeartTwoTone twoToneColor="red" />
            ) : (
              <HeartOutlined twoToneColor="#eb2f96" className="w-5 h-5 stroke-red-500" />
            )}
            <span className="ml-1">{likeCount}</span>
          </button>
          <button className="flex items-center ml-4 text-gray-600 hover:text-blue-500 focus:outline-none">
            <CommentOutlined className="w-5 h-5" />
            <span className="ml-1">{commentCount}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MemeCard