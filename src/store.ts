import { AnyAction, createStore } from "redux"

export type State={
    sad_count:number,
    happy_count:number
}

const initialstate={
    sad_count:0,
    happy_count:0
}

function reducer(currstate:State=initialstate,action:AnyAction):State{
    if(action.type==="happy button clicked"){
        return {...currstate,happy_count:currstate.happy_count+action.payload}
    }
    else if(action.type==="Sad button clicked"){
        return {...currstate,sad_count:currstate.sad_count+action.payload}
    }
    return currstate;
}

const store=createStore(reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;