import React from 'react';

export function Button(props) {

    function checkStyle() {
        if ( props.styleType === 'bannerBlue' )
            return 'bg-[#3D5675] py-[13px] px-[29px] rounded-full text-white text-xs hover:bg-[#362099] transition-all duration-500'
        if ( props.styleType === 'blue' )
            return 'bg-[#3D5675] py-[9px] px-[20px] rounded-full text-white text-xs hover:bg-[#362099] transition-all duration-500'
        if ( props.styleType === 'white' )
            return 'bg-white py-[8px] px-[20px] ml-3 rounded-full text-[#3D5675] text-sm hover:bg-[#C9D3FF] transition-all duration-500'
 
        }
    return (
        <button className={ checkStyle() }>{ props.children }</button>
    )
}