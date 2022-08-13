import React from 'react';
import Logo  from '../Header/logo.png';
import { Button } from '../../components/Button';
import Facebook from './facebook.png'
import Tweeter from './tweeter.png'
import Instagram from './instagram.png'

export function Footer() {
    return (
        <footer>
            <div className='flex justify-evenly bg-[#F2F3F4] py-10 md:flex-wrap 1sm:grid 2sm:grid 3sm:grid 4sm:grid 1sm:grid-cols-3 2sm:grid-cols-3 3sm:grid-cols-2 4sm:grid-cols-2 1sm:justify-items-center 2sm:justify-items-center 3sm:justify-items-center 4sm:justify-items-center 1sm:pt-5 2sm:pt-5 3sm:pt-5 4sm:pt-5 1sm:gap-y-1 2sm:gap-y-1 3sm:gap-y-5 4sm:gap-y-5'>
            <div className='1sm:col-start-1 2sm:col-start-1 3sm:col-start-1 4sm:col-start-1 1sm:col-span-4 2sm:col-span-4 3sm:col-span-2 4sm:col-span-2 1sm:m-2 2sm:m-2 3sm:m-2'>
            <a href='#'><img src={Logo} alt="logo"/></a>
            </div>
            <div className=''>
                <ul className='text-left'>
                    <a href='#'><li>Custom Design</li></a>
                    <a href='#products'><li>All Products</li></a>
                    <a href='#clients'><li>Inspiration</li></a>
                    <a href='#'><li>Sustainability</li></a>
                    <a href='#'><li>Affiliate Program</li></a>
                    <a href='#'><li>Request Custom Quote</li></a>
                    <a href='#'><li>Request Dieline</li></a>
                </ul>
            </div>
            <div>
                <ul className='text-left'>
                    <a href='#requests'><li>About Us</li></a>
                    <a href='#'><li>Blog</li></a>
                    <a href='#partners'><li>Partners</li></a>
                    <a href='#'><li>Contact Us</li></a>
                    <a href='#'><li>FAQ</li></a>
                    <a href='#'><li>Terms & Conditions</li></a>
                </ul>
            </div>
            <div>
                <ul className='text-left'>
                    <a href='#'><li>Shopify App</li></a>
                    <a href='#'><li>14 Day Free Shopify Trial</li></a>
                    <a href='#'><li>BigCommerce</li></a>
                </ul>
                <div className='flex my-5'>
                    <a href='https://www.facebook.com' target="_blank"><img className='mr-3' src={Facebook} alt="facebook"/></a>
                    <a href='https://twitter.com' target="_blank"><img className='mr-3' src={Tweeter} alt="tweeter"/></a>
                    <a href='https://www.instagram.com' target="_blank"><img src={Instagram} alt="instagram" /></a>
                </div>
            </div>
            <div className='text-left 1sm:col-start-1 2sm:col-start-1 1sm:col-span-4 2sm:col-span-4'>
                <span>
                    Get exclusive offers and tips.
                </span>
                <input type="email" placeholder='Your email' className='block px-3 py-1 my-3 rounded-2xl 3sm:px-1 4sm:px-0' />
                <Button styleType='blue'>Join instantly</Button>
            </div>
            </div>
        </footer>
    )
}