import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { sadcountselector } from './selectors';
type sadtrack={

}
const Sadtracker:FC<sadtrack>=()=>{
    const select=useSelector(sadcountselector);
    return(
        <div>
              <h3 className='bg-red-300 p-3'>You were sad {select} times.. </h3>
        </div>
    );
}
export default Sadtracker;
