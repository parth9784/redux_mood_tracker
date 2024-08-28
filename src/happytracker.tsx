import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { happycountselector } from './selectors';
type happytrack={

}
const Happytrack:FC<happytrack>=()=>{
    const select=useSelector(happycountselector);
    return(
        <div>
            <h3 className='bg-green-300 p-3'>You were happy {select} times</h3>
        </div>
    );
}
export default Happytrack;