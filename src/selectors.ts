import {State} from "./store";
export function happycountselector(state:State){
    return state.happy_count;
}

export function sadcountselector(state:State){
    return state.sad_count;
}