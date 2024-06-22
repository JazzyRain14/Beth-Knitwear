import React from 'react'
import knittedShirt from '../assets/Image/8158c763-1734-4976-8a07-18b51a1a4a42.jpg'
import Kiddieswear from '../assets/Image/oksana-zub-6a0KRmSPOsM-unsplash.jpg'
import Poncho from '../assets/Image/milada-vigerova-p8Drpg_duLw-unsplash.jpg'
import Corset from '../assets/Image/Corset.png'

const Section2 = () => {
    return (
        <>
            <section className='h-full w-full min-h-[600px] px-[100px] py-4'>
                <div className='flex justify-start items-center'>
                    <div className='knittedMat flex items-center relative h-[180px] w-full'>
                        <h1 className=' absolute left-8 text-lg font-semibold text-[#074E48]'>Get new patterns <br /> for this winter</h1>
                    </div>
                </div>
                <div className='w-full min-h- mb-4 flex gap-4'>
                    <div className='h-[400px] relative'>
                        <img src={knittedShirt} className='h-full' alt="" />
                        <footer className='absolute w-full bottom-0 bg-[rgba(231,231,211,.8)] p-2'>
                            <h1 className='font-semibold uppercase text-sm text-[#074e48]'>Long Sleeves Sweaters</h1>
                            <p className='text-xs text-[#074e48]'>How can you resist the Fashion Aura of wearing our hand made long sleeves sweaters.</p>
                        </footer>
                    </div>
                    <div className='flex-1 flex flex-col gap-5'>
                        <div className='overflow-hidden relative h-[35%]'>
                            <img src={Kiddieswear} className='absolute object-cover h-full w-full left-0 top-0' alt="" />
                            <footer className='absolute w-full bottom-0 bg-[rgba(231,231,211,.8)] p-2'>
                                <h1 className='font-semibold uppercase text-sm text-[#074e48]'>Kiddies Wears</h1>
                            </footer>
                        </div>
                        <div className='flex flex-1 gap-4'>
                            <div className='overflow-hidden relative w-full'>
                                <img src={Poncho} className='absolute  object-cover h-full w-full left-0 top-0' alt="" />
                                <footer className='absolute w-full bottom-0 bg-[rgba(231,231,211,.8)] p-2'>
                                    <h1 className='font-semibold uppercase text-sm text-[#074e48]'>Nice Crotcheted Ponchos</h1>
                                </footer>
                            </div>
                            <div className='overflow-hidden relative w-full'>
                                <img src={Corset} className='absolute  object-cover h-full w-full left-0 top-0' alt="" />
                                <footer className='absolute w-full bottom-0 bg-[rgba(231,231,211,.8)] p-2'>
                                    <h1 className='font-semibold uppercase text-sm text-[#074e48]'>Little Honey Pot Corset Top and Skirt</h1>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2