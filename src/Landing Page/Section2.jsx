import React from 'react'
import knittedShirt from '../assets/Image/8158c763-1734-4976-8a07-18b51a1a4a42.jpg'
import Kiddieswear from '../assets/Image/oksana-zub-6a0KRmSPOsM-unsplash.jpg'
import Poncho from '../assets/Image/milada-vigerova-p8Drpg_duLw-unsplash.jpg'
import PinkCarpet from '../assets/Image/TransparentPink.png'
import Corset from '../assets/Image/Corset.png'

const Section2 = () => {
    return (
        <>
            <section className='h-full w-full min-h-[600px] px-[100px] py-4'>
                <div className='flex justify-start items- my-5'>
                    <div className='flex items-center relative h-[180px] w-full bg-contain object-contain bg-left bg-no-repeat'
                        style={{ backgroundImage: "url('/src/assets/Image/TransparentPink.png')" }}>
                        <h1 className=' absolute left-8 text-lg font-semibold text-BethGreen'>Get new patterns <br /> for this winter</h1>
                    </div>
                </div>
                <div className='w-full min-h-[400px] border border-green-700 my-5 flex gap-4'>
                    <div className='h-[400px] relative'>
                        <img src={knittedShirt} className='h-full' alt="" />
                        <footer className='absolute w-full bottom-0 bg-[rgba(231,231,211,.8)] p-2'>
                            <h1 className='font-semibold uppercase text-sm text-BethGreen'>Long Sleeves Sweaters</h1>
                            <p className='text-xs text-BethGreen'>How can you resist the Fashion Aura of wearing our hand made long sleeves sweaters.</p>
                        </footer>
                    </div>
                    <div className='flex-1 flex flex-col gap-5'>
                        <div className='overflow-hidden relative h-[35%]'>
                            <img src={Kiddieswear} className='absolute object-cover h-full w-full left-0 top-0' alt="" />
                            <footer className='absolute w-full bottom-0 bg-[rgba(231,231,211,.8)] p-2'>
                                <h1 className='font-semibold uppercase text-sm text-BethGreen'>Kiddies Wears</h1>
                            </footer>
                        </div>
                        <div className='flex flex-1 gap-4'>
                            <div className='overflow-hidden relative w-full'>
                                <img src={Poncho} className='absolute  object-cover h-full w-full left-0 top-0' alt="" />
                                <footer className='absolute w-full bottom-0 bg-[rgba(231,231,211,.8)] p-2'>
                                    <h1 className='font-semibold uppercase text-sm text-BethGreen'>Nice Crotcheted Ponchos</h1>
                                </footer>
                            </div>
                            <div className='overflow-hidden relative w-full'>
                                <img src={Corset} className='absolute  object-cover h-full w-full left-0 top-0' alt="" />
                                <footer className='absolute w-full bottom-0 bg-[rgba(231,231,211,.8)] p-2'>
                                    <h1 className='font-semibold uppercase text-sm text-BethGreen'>Little Honey Pot Corset Top and Skirt</h1>
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