import React,{FC, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Happyclicked } from './actions';
type happyprop={
    // happy_count:number;
}
const Happyinc:FC<happyprop>=(prop)=>{
    const [count,setcount]=useState<number>(0);
    const dispatch=useDispatch();
    function increment(){
        dispatch(Happyclicked(count));
    }
    return(
        <div>
            <input type="number" className='border border-1 border-black mr-1' onChange={(event)=>{setcount(+event.target.value)}} />
            <button onClick={increment} className='border border-1 bg-green-500 text-white p-2'>Happy++</button>
        </div>
    )
}
export default Happyinc;