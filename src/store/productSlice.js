const {createSlice} =require("@reduxjs/toolkit");

//using as enum and freeze is used to make read only
export const STATUSES= Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
});

  
const productSlice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        setProducts(state,action){
            /*Do not make any asynchronous call inside of your reducer because
            because our reducers are synchronous  so instead use THUNK middleware*/
            state.data=action.payload;
        },
        setStatus(state,action){
            state.status=action.payload;
        },
    },
});

export const {setProducts,setStatus}=productSlice.actions;
export default productSlice.reducer;

//reducers are functions with the help of it we can mutate ou state 
//also they are pure functions -->no sideffect ,no change in bahar k value

            //redux: Never mutate your state directly
            //Dont use --> state.push(action.payload)
            // return new array
            // return [...state,action.payload]; but with create slice we can mutate directly

/* THUNKs are basically normal function and are already configured in react redux */

export function fetchProducts(){
    //returns a function

    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        }catch(err){
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}
