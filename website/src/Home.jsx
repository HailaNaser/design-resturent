import React from 'react'
// font-bold 

 function Home() {
  return (
    <>
        <div className='relative '>
            <img className='max-sm:h-[100vh] max-sm:w-full ' src="https://stone-horn-a78.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F989539c7-7a6d-4611-9778-eb2623dec992%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=8328772e-ae4e-4183-8c09-34ac461e12e4&spaceId=989539c7-7a6d-4611-9778-eb2623dec992&width=1440&userId=&cache=v2" alt="" />
            <div className="theText mt-[20vh] leading-7 text-[#fff] absolute left-10 top-10 text-left p-[10px]">
            <span className='mt-[10vh] max-sm:w-full max-sm:text-[transparent]'>FreshGoods</span>
            <h1 className='text-5xl w-4/12 mb-[20px] leading-15 max-sm:w-full max-sm:mt-[-20vh] max-sm:text-sm'>Concisely describe your product or services</h1>
            <p className='w-7/12 mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic, temporibus suscipit praesentium facilis quisquam laboriosam aspernatur sint accusamus,incidunt tempora ipsa.</p>
            <input  className='bg-[rgb(215,167,84)] pt-[5px] pl-[10px] pr-[10px]' type="submit" value='ORDER NOW'/>
            </div>

    </div>
    </>


  )
}

export default Home