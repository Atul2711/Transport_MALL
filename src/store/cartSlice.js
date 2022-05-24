const {createSlice} =require("@reduxjs/toolkit");


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){

            state.push(action.payload);
        },
        remove(state,action){
            return state.filter((item)=>item.id !== action.payload);
        },
    },
});

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;

//reducers are functions with the help of it we can mutate ou state 
//also they are pure functions -->no sideeffect ,no change in bahar k value

            //redux: Never mutate your state directly
            //Dont use --> state.push(action.payload)
            // return new array
            // return [...state,action.payload]; but with create slice we can mutate directly
