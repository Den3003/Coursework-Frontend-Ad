import React from 'react';
import { Button } from '../components/Button';

export function Begin() {
    return (
        <section id='begin' className='my-36'>
            <h2 className='text-3xl m-[60px] font-bold'>
                Let`s get to it
            </h2>
            <div>
            <Button styleType="blue">START YOUR DESIGN</Button>
            <Button styleType="white">BROWSE ALL PRODUCTS</Button>
            </div>
        </section>
    )
}