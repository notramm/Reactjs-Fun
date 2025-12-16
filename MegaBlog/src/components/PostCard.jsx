import React from 'react'
import appwriteService from '../appwrite/config';
import {Link} from 'react-router-dom';

function PostCard({
    $id,
    title,
    featuredImage
}) {
  return (
    <Link to={`/post/${$id}`} className='block rounded-lg overflow-hidden shadow-lg hover:shadow-xl duration-200 bg-white'>
        <div className='w-full h-48 overflow-hidden p-4 flex'>
            <div className='items-center justify-center bg-gray-100'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard