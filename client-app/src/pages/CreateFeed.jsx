import React from 'react'

const CreateFeed = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-4 h-full w-full bg-gray-900 text-white'>
            <h1 className='text-3xl font-bold'>Create Your FEED</h1>

            <form className='flex flex-col justify-between bg-gray-800 h-1/3 p-3 rounded-md'>
                <div className='text-xl bg-gray-700'>
                    <label htmlFor="">Image</label>
                    <input type="file" name='image'  placeholder='Image' accept='image/*' required/>
                </div>
                <div>
                    <label htmlFor="">Caption</label>
                    <input type="text" name='caption' required/>
                </div>

                <button>Submit</button>
            </form>
        </section>
    )
}

export default CreateFeed