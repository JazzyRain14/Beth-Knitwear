import React from 'react'
import { GiWinterHat } from "react-icons/gi";
import { CgCap } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiLoom } from "react-icons/si";
import { BsBag } from "react-icons/bs";
import crothchet from '../assets/Image/crochetsmall.png'
import { FaTape } from "react-icons/fa6";

const Section3 = () => {
    return (
        <section className='h-full w-full min-h-[600px] py-4'>
            <div className='flex flex-col items-center justify-center relative h-[180px] w-full bg-contain object-contain bg-center bg-no-repeat my-5'
                style={{ backgroundImage: "url('/src/assets/Image/TransparentPink.png')" }}>
                <h1 className='text-2xl font-semibold text-BethGreen capitalize'>Learn New Tools</h1>
                <p className='text-sm text-center text-BethGreen'>You can Apply to learn these skills on your leisure time, <br /> For fun or For Money.</p>
            </div>
            <div className='flex flex-wrap min-h-[400px] w-full h-full my-5'>
                <div className=' min-h-full h-[400px] flex-grow basis-48 w-[300px] px-5 flex flex-col gap-5 justify-center bg-[#004E48] text-white'>
                    <i className=' bg-white w-fit p-2 rounded-full'>
                        <BsBag className=' text-3xl text-[#004E48]' />
                    </i>
                    <h1 className='text-lg'>Tote Bag <br /> & Pouches</h1>
                    <p className='text-sm'>adipisicing elit. Doloribus quidem consectetur unde. Minima sed impedit maiores sit omnis corrupti, reprehenderit incidunt, sapiente, dolores mollitia rerum recusandae. Accusamus illo ducimus consectetur.</p>
                </div>
                <div className=' min-h-full h-[400px] flex-grow basis-48 w-[300px] px-5 flex flex-col gap-5 justify-center bg-[#Fc874C] text-BethGreen'>
                    <i className=' bg-white w-fit p-2 rounded-full'>
                        <FaTape className=' text-3xl text-[#Fc874C]' />
                    </i>
                    <h1 className='text-lg'>Tape <br /> Measure</h1>
                    <p className='text-sm'>adipisicing elit. Doloribus quidem consectetur unde. Minima sed impedit maiores sit omnis corrupti, reprehenderit incidunt, sapiente, dolores mollitia rerum recusandae. Accusamus illo ducimus consectetur.</p>
                </div>
                <div className=' min-h-full h-[400px] flex-grow basis-48 w-[300px] px-5 flex flex-col gap-5 justify-center bg-[#FFE6D7] text-BethGreen'>
                    <i className=' bg-white w-fit p-2 rounded-full'>
                        <SiLoom className=' text-3xl text-[#004E48]' />
                    </i>
                    <h1 className='text-lg'>Embroidery <br /> Hoop</h1>
                    <p className='text-sm'>adipisicing elit. Doloribus quidem consectetur unde. Minima sed impedit maiores sit omnis corrupti, reprehenderit incidunt, sapiente, dolores mollitia rerum recusandae. Accusamus illo ducimus consectetur.</p>
                </div>
                <div className=' min-h-full h-[400px] flex-grow basis-48 w-[300px] px-5 flex flex-col gap-5 justify-center bg-[#011F29] text-white'>
                    <i className=' bg-white w-fit p-2 rounded-full'>
                        <img src={crothchet} className=' text-3xl text-[#0IIF29]' width={25} />
                    </i>
                    <h1 className='text-lg'>Crochet <br />Hooks</h1>
                    <p className='text-sm'>adipisicing elit. Doloribus quidem consectetur unde. Minima sed impedit maiores sit omnis corrupti, reprehenderit incidunt, sapiente, dolores mollitia rerum recusandae. Accusamus illo ducimus consectetur.</p>
                </div>
                <div className=' min-h-full h-[400px] flex-grow basis-48 w-[300px] px-5 flex flex-col gap-5 justify-center bg-[#D05B19] text-white'>
                    <i className=' bg-white w-fit p-2 rounded-full'>
                        <CgCap className=' text-3xl text-[#D05B19]' />
                    </i>
                    <h1 className='text-lg'>Head warmers<br />& Beret</h1>
                    <p className='text-sm'>adipisicing elit. Doloribus quidem consectetur unde. Minima sed impedit maiores sit omnis corrupti, reprehenderit incidunt, sapiente, dolores mollitia rerum recusandae. Accusamus illo ducimus consectetur.</p>
                </div>











                {/* <div className=' min-h-full h-[400px] border border-red-600 flex-grow basis-48 w-[300px] '></div>
                <div className=' min-h-full h-[400px] border border-red-600 flex-grow basis-48 w-[300px] '></div>
                <div className=' min-h-full h-[400px] border border-red-600 flex-grow basis-48 w-[300px] '></div>
                <div className=' min-h-full h-[400px] border border-red-600 flex-grow basis-48 w-[300px] '>
                </div> */}
            </div>
        </section>
    )
}

export default Section3