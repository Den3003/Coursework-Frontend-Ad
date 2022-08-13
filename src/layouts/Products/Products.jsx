import React from 'react';
import { Button } from '../../components/Button';
import Carton from './cartonBoxes.png'
import Boxes from './boxes.png'
import Poly from './polyMailers.png'
import Tape from './tape.png'
import Stickers from './stickers.png'
import Tissue from './tissuePaper.png'

export function Products() {
    return (
        <section>
            <div className='flex w-full justify-around py-[60px] 3sm:flex-wrap 3sm:py-[40px] 4sm:flex-wrap'>
                <h2 className='text-3xl mr-[260px] md:mr-0 sm:mr-0 1sm:mr-20 2sm:mr-0 3sm:mr-2 3sm:mb-4 4sm:mr-0 4sm:mb-5'>
                    Products you can customize
                </h2>
                <Button styleType='blue'>BROWSE ALL PRODUCTS</Button>
            </div>
            <div id='products' className='flex flex-wrap justify-center'>
                <article className='bg-white w-[360px] border-[1px] text-left'>
                    <img src={Carton} alt="carton boxes"/>
                    <h3 className='px-5 font-semibold text-lg'>Custom Carton Boxes</h3>
                    <div className='flex justify-between p-5'>
                    <p className='w-[235px] text-[#777777]'>Create a clean brand presentation with this custom carton box.</p>
                    <p className='w-[80px] text-[#777777]'>Starting at: $10.44/unit</p>
                    </div>
                </article>
                <article className='bg-white w-[360px] border-[1px] text-left'>
                    <img src={Boxes} alt="boxes"/>
                    <h3 className='px-5 font-semibold text-lg'>Custom Boxes</h3>
                    <p className='p-5 w-[240px] text-[#777777]'>A stylish and strong corrugated cardboard box.</p>
                </article>
                <article className='bg-white w-[360px] text-left border-[1px]'>
                    <img src={Poly} alt="poly mailers"/>
                    <h3 className='px-5 font-semibold text-lg'>Custom Poly Mailers</h3>
                    <p className='p-5 w-[240px] text-[#777777]'>A fully custom high quality self sealing poly mailer.</p>
                </article>
                <article className='bg-white w-[360px] text-left border-[1px]'>
                    <img src={Tape} alt="tape"/>
                    <h3 className='px-5 font-semibold text-lg'>Custom Tape</h3>
                    <div className='flex justify-between p-5'>
                    <p className='w-[220px] text-[#777777]'>High quality custom tape to seal your shipping boxes during delivery.</p>
                    <p className='w-[80px] text-[#777777]'>Starting at: $12.16/unit</p>
                    </div>
                </article>
                <article className='bg-white w-[360px] text-left border-[1px]'>
                    <img src={Stickers} alt="stickers"/>
                    <h3 className='px-5 font-semibold text-lg'>Custom Stickers</h3>
                    <div className='flex justify-between p-5'>
                    <p className='w-[210px] text-[#777777]'>Add personality to your packages with custom stickers.</p>
                    <p className='w-[80px] text-[#777777]'>Starting at: $0.41/unit</p>
                    </div>
                </article>
                <article className='bg-white w-[360px] border-x text-left border-[1px]'>
                    <img src={Tissue} alt="tissue paper"/>
                    <h3 className='px-5 font-semibold text-lg'>Custom Tissue Paper</h3>
                    <div className='flex justify-between p-5'>
                    <p className='w-[210px] text-[#777777]'>The perfect addition to branding your package.</p>
                    <p className='w-[80px] text-[#777777]'>Starting at: $6.54/unit</p>
                    </div>
                </article>
            </div>
            <div className='my-[30px]'>
                <a className='mx-[20px]' href="#">Need unbranded stock items?</a>
                <Button styleType='white'>SHOP STOCK</Button>
            </div>
        </section>
    )
}