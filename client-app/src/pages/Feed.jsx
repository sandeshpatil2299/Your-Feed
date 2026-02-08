import React, { useEffect, useState } from 'react'
import axios from "axios"

const Feed = () => {
    const [feeds, setFeeds] = useState([])
    const [error, setError] = useState()

    const getFeed = async () => {
        try {
            const res = await axios.get("/api/feeds");
            setFeeds(res.data.feed);
            console.log(res.data.feed);
        } catch (error) {
            setError(error.message || "Failed to fetch feeds");
            console.error("Error fetching feed:", error);
        }
    };

    useEffect(() => {
        getFeed();
    }, [])

    return (
        <div className='flex h-full gap-4 bg-gray-900 w-full p-20'>
            {
                feeds.length > 0 ? feeds.map((feed, index) => {
                    return (
                        <div key={index} className='w-100 bg-white p-5 shadow-2xl'>
                            <img className='max-w-full object-cover object-center' src={feed.imageURL} alt="" />
                            <h1 className='text-lg font-bold capitalize mt-2'>{feed.caption}</h1>
                        </div>
                    )
                })
                    : <div>
                        <h1>There is no feed</h1>
                    </div>
            }
        </div>
    )
}

export default Feed