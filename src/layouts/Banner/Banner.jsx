import React from 'react';
import MainImg from './mainPicture.png';
import Shopify from './shopify.png'
import Amazon from './amazon.png'
import Fsc from './fsc.png'
import { Button } from '../../components/Button';

export function Banner() {
    return (
        <section>
        <div className="flex justify-between items-center h-[589px] bg-[#F2AE4D] 2sm:flex-wrap 2sm:h-[800px] 3sm:flex-wrap 4sm:flex-wrap 5sm:flex-wrap">
            <div className='ml-[130px] max-w-full text-left lg:ml-5 md:ml-5 sm:ml-5 1sm:ml-5 2sm:ml-5 3sm:ml-5 4sm:ml-5'>
                <h1 className="text-5xl w-[495px] text-justify font-bold mb-[30px] sm:text-4xl sm:w-[420px] 1sm:text-4xl 1sm:w-[400px] 2sm:text-4xl 2sm:w-[380px] 3sm:text-4xl 3sm:w-[380px] 4sm:text-3xl 4sm:w-[290px]">
                    Fast and easy custom boxes your customers will love
                </h1>
                <p className="text-justify w-[290px] mb-[20px] ">Fastest turnaround. Best prices instantly. Dieline design help available.</p>
                <Button styleType='bannerBlue'>START YOUR DESIGN</Button>
            </div>
            <div className='2sm:ml-[185px] 3sm:w-[320px] 3sm:ml-[225px] 4sm:w-[300px] 4sm:ml-[98px]'>
                <img src={MainImg} alt="arka boxes"  />
            </div>
        </div>
            <div id='partners' className="flex bg-white justify-around 2sm:flex-wrap 2sm:items-center 3sm:flex-wrap 3sm:items-center 4sm:flex-wrap 4sm:items-center">
                <img className='2sm:w-[150px] 2sm:h-[50px] 3sm:w-[150px] 3sm:h-[50px] 4sm:w-[150px] 4sm:h-[50px]' src={Shopify} alt="companions logo" />
                <img className='2sm:w-[150px] 2sm:h-[60px] 3sm:w-[150px] 3sm:h-[60px] 4sm:w-[150px] 4sm:h-[60px]' src={Amazon} alt="companions logo" />
                <img className='2sm:w-[150px] 2sm:h-[50px] 3sm:w-[150px] 3sm:h-[50px] 4sm:w-[150px] 4sm:h-[50px]' src={Fsc} alt="companions logo" />
            </div>
        </section>
    )
}