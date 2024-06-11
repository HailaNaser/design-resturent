import React from 'react'
// ml-4 p-px-2 pt-2.5 pb-2.5 pl-2.5 pr-2.5 mb-4

function Services() {
  return (
    <div className='mt-[10vh] mb-[20px]'>
        <h2 className='mt-[20px] text-3xl  pt-[20px] pb-[10px] text-center'>Here are some of benefits of yours offers</h2>
        <p className=' mb-[5px] pb-[20px] text-center text-[#786a65] '>Explain what makes your product of servieces great.Talk about features in a way that
            highlights the real value people get outof them</p>
            <div className=" text-[#8a7f7b] content flex   items-center text-center max-sm:flex-col">
                <div className="box content items-center flex-col ">
                    <img className='m-auto mb-[20px] mt-[20px]' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png" alt="" />
                    <h5 className='text-[#786a65] mb-[15px]'>Benefit1</h5>
                    <span className='w-4/12 mr-[30px] p-[40px] max-sm:w-full max-sm:m-0'>For Example, resaurents and bakeries could outline the health benefitof their all-
                        nutural ingredients
                    </span>
                </div>
                <div className="box content items-center flex-col  ">
                    <img className='m-auto mb-[30px] mt-[20px]' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png" alt="" />
                    <h5 className='text-[#786a65] mb-[15px]'>Benefit2</h5>
                    <span className='max-sm:w-full max-sm:m-0'>For Example, resaurents and bakeries could outline the health benefitof their all-
                        nutural ingredients
                    </span>
                </div>
                <div className="box content items-center flex-col ">
                    <img className='m-auto mb-[20px] mt-[20px]' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png" alt="" />
                    <h5 className='text-[#786a65] mb-[15px]'>Benefit3</h5>
                    <span className='max-sm:w-full max-sm:m-0'>For Example, resaurents and bakeries could outline the health benefitof their all-
                        nutural ingredients
                    </span>
                </div>
            </div>

    </div>
  )
}

export default Services