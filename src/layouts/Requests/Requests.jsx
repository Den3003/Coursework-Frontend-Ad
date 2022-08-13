import React from 'react';
import { Button } from '../../components/Button';
import Quote from './quote.png';
import Dieline from './dieline.png';
import Line from './line.png';


export function Requests() {
    return (
        <section id='requests' className='flex bg-[#FFCA3A] w-[80%] justify-around my-[100px] mx-auto p-[60px] lg:p-[40px] md:p-[20px] lg:justify-between 1sm:flex-wrap 1sm:justify-center 2sm:flex-wrap 2sm:justify-center 2sm:p-[5px] 3sm:flex-wrap 3sm:justify-center 3sm:p-[5px] 4sm:flex-wrap 4sm:w-[90%]'>
            <article className='3sm:mb-7 4sm:mb-7'>
                <img className='my-[2px] mx-auto' src={Quote} alt="picture"/>
                <h3 className='px-5 font-bold text-lg m-4'>
                    Couldn't find a size you need?
                </h3>
                <p className='w-[310px] my-[7px] mx-auto'>
                    We’ll work directly with you to create a fully branded packaging system.
                </p>
                <Button styleType='white'>REQUEST A QUOTE</Button>
            </article>
            <img className='1sm:invisible 2sm:invisible 3sm:hidden 4sm:hidden' src={Line} alt="line" />
            <article>
                <img className='my-[2px] mx-auto' src={Dieline} alt="picture" />
                <h3 className='px-5 font-bold text-lg m-4'>
                    Need a free dieline template?
                </h3>
                <p className='w-[310px] my-[7px] mx-auto'>
                    Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 business days.
                </p>
                <Button styleType='white'>REQUEST DIELINE</Button>
            </article>
        </section>
    )
}