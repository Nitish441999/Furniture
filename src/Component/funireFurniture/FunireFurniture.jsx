import React from 'react'

function FunireFurniture() {
  return (
    <div>
        <section className=' py-7 w-full h-auto '>
            <div>
                <h1 className='text-4xl font-bold font-serif text-center'>#Funire Furniture</h1>
                <p></p>
            </div>

            <div className=' flex w-5/5  h-auto  gap-4 '>
                <div className=' w-5/12 h-auto  py-20'>\

                    <div className=' flex w-full h-64  gap-3 relative'>
                        <div className=' h-72 w-28  absolute bottom-0 left-0 overflow-hidden'>
                            <img className='w-full h-full bg-cover object-cover  hover:scale-105 duration-700' src='https://i.imgur.com/moervWh.png' alt=''/>
                        </div> 
                        <div className='  w-[28rem] ml-[8rem] overflow-hidden'>
                            <img className='w-full h-full bg-cover object-cover  hover:scale-105 duration-700' src='https://i.imgur.com/LTogM50.png' alt=''/>
                        </div>
                    </div>

                    <div className=' flex w-full h-64  gap-3 mt-3'>
                        <div className=' h-72 w-60 overflow-hidden'>
                        <img className='w-full h-full bg-cover object-cover  hover:scale-105 duration-700' src='https://i.imgur.com/MlcYKQj.png' alt=''/>
                        </div>
                        <div className='  w-[28rem] overflow-hidden'>
                        <img className='w-full h-full bg-cover object-cover  hover:scale-105 duration-700' src='https://i.imgur.com/ejibyF8.png' alt=''/>
                        </div>
                    </div>
                </div>

                <div className=' w-2/12 flex justify-center items-center'>
                    <div className=' border-2 w-full h-80 overflow-hidden'>
                    <img className='w-full h-full bg-cover object-cover   hover:scale-105 duration-700' src='https://i.imgur.com/pkcOm3E.png' alt=''/>
                    </div>
                </div>

                <div className=' w-5/12 h-auto gap-y-4 py-20'>
                    <div className=' flex w-full h-64  gap-3 relative'>
                        <div className=' h-full w-[20rem] overflow-hidden  '>
                        <img className='w-full h-full bg-cover object-cover  hover:scale-105 duration-700' src='https://i.imgur.com/QHrRXFp.png' alt=''/>
                        </div>
                        <div className=' w-[13rem] h-80  absolute bottom-0 right-0 overflow-hidden'>
                        <img className='w-full h-full bg-cover object-cover  hover:scale-105 duration-700' src='https://i.imgur.com/robbzRK.png' alt=''/>
                        </div>
                    </div>
                    <div className=' flex w-full h-64  gap-3 mt-3'>
                        <div className=' h-72 w-48 overflow-hidden '>
                        <img className='w-full h-full bg-cover object-cover  hover:scale-105 duration-700' src='https://i.imgur.com/bsw8whB.png' alt=''/>
                        </div>
                        <div className='  w-[17rem] overflow-hidden'>
                        <img className='w-full h-full bg-cover object-cover  hover:scale-105 duration-700' src='https://i.imgur.com/7MNjy30.png' alt=''/>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </div>
  )
}

export default FunireFurniture