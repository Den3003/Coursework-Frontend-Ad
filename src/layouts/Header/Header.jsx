import React from 'react';
import Logo  from './logo.png';
import Stars  from './stars.png';
import Basket  from './basket.png';


export function Header() {
    return (
        <header className='flex bg-white justify-between h-[61px] items-center'>
            <div className='mx-[35px]'>
                <a href="#"><img src={Logo} alt="Logotype of ARKA company" /></a>
            </div>
            <input type="checkbox" id='burger' className='burger'></input>
            <label for="burger"></label>
            <nav className='nav flex items-center 2sm:w-[40%] 3sm:w-[40%] 4sm:w-[50%]'>
                <img className='sm:invisible 1sm:invisible 2sm:invisible 3sm:invisible 4sm:invisible' src={Stars} alt="Stars" />
                <ul className='flex sm:grid sm:col-auto 1sm:grid 1sm:col-auto 2sm:grid 2sm:col-auto 3sm:grid 3sm:col-auto 4sm:grid 4sm:col-auto'>
                <li><a href="#begin" className='mr-[10px] nav__ul_li'>START YOUR DESIGN</a></li>
                <li><a href="#products" className='mx-[10px] nav__ul_li'>ALL PRODUCTS</a></li>
                <li><a href="#clients" className='mx-[10px] nav__ul_li'>INSPIRATION</a></li>
                <li><a href="#requests" className='mx-[10px] nav__ul_li'>ABOUT</a></li>     
                </ul>
            </nav>
            <div className='flex items-center mr-[35px] sm:mr-[200px] 1sm:mr-[200px] 2sm:mr-[200px] 3sm:mr-[120px] 4sm:mr-[80px]'>
                <a href="#" className='flex mr-[35px] 4sm:mr-2 nav__ul_li'>ACCOUNT</a>
                <a href="#"><img src={Basket} alt="Basket"/></a>
            </div>
        </header>
    )
}
