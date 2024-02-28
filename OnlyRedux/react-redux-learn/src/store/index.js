import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
const INITIAL_VALUE = {
    counter: 0
}
// const counterReducer = (store = INITIAL_VALUE, action) => {
//     if (action.type === 'Add') {

//         return { counter: store.counter + 1 }
//     } else if (action.type === 'Sub') {

//         return { counter: store.counter - 1 }
//     }
//     else if (action.type === 'AddInput') {

//         return { counter: store.counter + parseInt(action.payload.num) }
//     }
//     console.log("Value", action);
//     return store;
// }

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counterval: 0
    },
    reducers: {
        incriment: (state, action) => { console.log(state, action) },
        decriment: (state, action) => { console.log(state, action) },
        add: (state, action) => { console.log(state, action) },
        sub: (state, action) => { console.log(state, action) }
    }
})

// const counterStore = createStore(counterReducer);

const counterStore = configureStore({
    reducer: counterSlice.reducer
})
export const counterActions = createSlice.action;
export default counterStore;