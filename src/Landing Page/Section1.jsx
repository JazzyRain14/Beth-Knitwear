import React, { useState } from 'react'
import diamond from '../assets/Image/Logo.png'
import KnitBowl from '../assets/Image/High resolution -ai-brush-removebg-fd073tld.png'
import MDImg from '../assets/Image/IMG_8389.png'
// import { Link, useNavigate } from 'react-router-dom';
const Section1 = () => {
    const [isOpened, setIsOpened] = useState(false);

    const openBurger = () => setIsOpened(!isOpened)

    return (
        < >
            <div className='flex justify-between items-center h-1/4 px-[140px] relative bg-gradient-to-r from-[#FFDDCD] to-[#FFE9DE]'>
                <div className='Logo'>
                    <img src={diamond} alt="" width={50} />
                </div>
                <div className={isOpened ? `openedNavLinks` : `navLinks`}>
                    <a href="#">Home</a>
                    <a href="#">DIY & Crafts</a>
                    <a href="#">Knit</a>
                    <a href="#">Crotchet</a>
                    <a href="#">Contact</a>
                </div>
                <button onClick={openBurger} className='navBurger'>Burger</button>
            </div>
            <section className='h-full w-full min-h-[600px] flex justify-between items-center px-[100px] bg-gradient-to-r from-[#FFDDCD] to-[#FFE9DE]'>
                <div>
                    <img src={KnitBowl} alt="" width={600} />
                </div>
                <div className=' text-BethGold flex-1'>
                    <h1 className='text-[100px] dancing-script  ml-6 relative right-20'>Beth</h1>
                    <h1 className='text-[100px] -translate-y-10 dancing-script '>Knittwear</h1>
                    <div className='flex flex-col gap-6'>
                        <small className='text-[18px] text-center'>
                            Wherever you are this summer, make it your <br /> Stitchiest yet with these bright and breezy <br /> knitting and crotchet wears.
                        </small>
                        <div className='p-1 flex bg-white rounded-full overflow-hidden'>
                            <input type="text" className='w-full' />
                            <button className='bg-BethGreen text-white px-4 py-2 rounded-full '>Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1