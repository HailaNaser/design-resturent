import React from 'react'

 function Information() {
  return (
    <div>
    <div className=' h-[100vh] flex  items-center text-center max-sm:flex-col '>

        <img className='m-auto text-center ml-[20%] mt-[20%] h-[80vh] max-sm:m-0 max-sm:w-full  max-sm:flex-col' src="https://stone-horn-a78.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F989539c7-7a6d-4611-9778-eb2623dec992%2F2f5489f8-f25a-4888-ad7f-e40ea4a7281d%2FUntitled.png?table=block&id=9704bcc9-9286-43fd-a14c-cc34e5599351&spaceId=989539c7-7a6d-4611-9778-eb2623dec992&width=860&userId=&cache=v2" alt="" />
        <div className='text-center w-full'>
        <h1 className='mt-[40%] w-9/12 mr-[30px] p-[40px] text-5xl leading-15 text-[#212529] max-sm:flex-col max-sm:text-4xl max-sm:ml-0 max-sm:w-full max-sm:text-[24px]'>Some more information about your business</h1>
        <p className='w-9/12 mr-[30px] p-[40px] mt-[-10vh] text-[#212529] max-sm:w-full'>Share a litter about yourself as a business owner , or maybe description what makes your product or service unique . Give visitors one more reason to care about your offer and want to buy from you</p>
        </div>
        </div> 
    </div>

  )
}

export default Information