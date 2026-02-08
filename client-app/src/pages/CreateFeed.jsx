import React, { useState } from 'react'
import axios from 'axios'

const CreateFeed = () => {

    // const [formData, setFormData]= useState({
    //     imageURL: "",
    //     caption: ""
    // })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);

        console.log(formData);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }


        const res = await axios.post("/api/create-feed", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res);
                console.log("Post created successfuly");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className='flex flex-col justify-center items-center gap-6 h-full w-full bg-gray-900 text-white'>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6 bg-gray-800 py-10 px-6 shadow-2xl rounded-md'>
                <h1 className='text-3xl text-center mb-2 font-bold'>Create Your FEED</h1>
                <div className='flex flex-col gap-2 text-xl'>
                    <label htmlFor="">Select Image</label>
                    <input className='bg-gray-700 rounded-md px-4 py-2 outline-none border border-white/50' type="file" name='imageURL' placeholder='Image' accept='image/*' required />
                </div>
                <div className='flex flex-col gap-2 text-xl'>
                    <label htmlFor="">Caption</label>
                    <input className='bg-gray-700 rounded-md px-4 py-2 outline-none border border-white/50' type="text" name='caption' required />
                </div>

                <button className='px-4 py-2 bg-blue-500 font-bold text-lg rounded-md active:scale-95 cursor-pointer'>Submit</button>
            </form>
        </section>
    )
}

export default CreateFeed   