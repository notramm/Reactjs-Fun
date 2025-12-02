import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/notramm')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='flex flex-col justify-center items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github followers: {data.followers ?? "N/A"}
    <img src={data.avatar_url ?? ""} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
