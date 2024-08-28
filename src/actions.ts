export const Happyclicked=(count:number)=>{
    return {
    type:"happy button clicked",
    payload:count
}
}
export const Sadclicked=(count:number)=>{
    return{
        type:"Sad button clicked",
        payload:count
    }   
}