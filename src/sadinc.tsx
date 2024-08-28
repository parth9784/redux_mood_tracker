import React,{FC, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Sadclicked } from './actions';
type sadprops={
    // sad_count:number;
}
const Sadinc:FC<sadprops>=(props)=>{
    const [count,setcount]=useState<number>(0)
    const dispatch=useDispatch();
    function increment(){
        dispatch(Sadclicked(count));
    }
    return(
        <div>
            <input type="number" className='border border-1 border-black mr-1' onChange={(event)=>{setcount(+event.target.value)}} />
            <button onClick={increment} className='border border-1 bg-red-600 text-white p-2' onChange={()=>{}}>Sad++</button>
        </div>
    );
}
export default Sadinc;