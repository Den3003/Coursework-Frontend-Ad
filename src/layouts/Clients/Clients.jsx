import React from 'react';
import Order from './order.png'
import Proof from './proof.png'
import Ship from './ship.png'
import { Button } from '../../components/Button';


export function Clients() {
    return (
        <section id='clients' className='bg-[#72BDA3] w-[80%] my-[100px] mx-auto text-center p-[50px] sm:p-[10px] 1sm:p-2 2sm:p-2 3sm:p-2 4sm:p-[5px] 4sm:w-[90%]'>
            <h2 className='text-3xl m-[50px]'>
                Fast and easy custom boxes your customers will love
            </h2>
            <div className='flex justify-between  md:justify-center sm:justify-center 1sm:flex-wrap 1sm:justify-center 2sm:flex-wrap 2sm:justify-center 3sm:flex-wrap 3sm:justify-center 4sm:flex-wrap 4sm:justify-center'>
                <article>
                    <img src={Order} alt="design box"/>
                    <h3 className='px-5 font-semibold text-lg'>
                        You Order
                    </h3>
                    <p className='w-[200px] my-px mx-auto text-[#3D5675]'>
                        Design and order boxes in a few clicks.
                    </p>
                </article>
                <article>
                <img src={Proof} alt="production"/>
                    <h3 className='px-5 font-semibold text-lg'>
                        We Proof
                    </h3>
                    <p className='w-[200px] my-px mx-auto text-[#3D5675]'>
                        Approve your designs before production.
                    </p>
                </article>
                <article className=''>
                <img src={Ship} alt="tracking"/>
                    <h3 className='px-5 font-semibold text-lg'>
                        We Print & Ship
                    </h3>
                    <p className='w-[200px] my-px mx-auto text-[#3D5675]'>
                        Your order gets printed and shipped with tracking.
                    </p>
                </article>
            </div>
            <div className='m-[70px]'>
            <Button styleType='blue'>START YOUR DESIGN</Button>
            </div>
        </section>
    )
}