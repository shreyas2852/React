import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name:'fetchStatus',
    initialState: {
        fetchDone:false,
        currentlyFetching : false,
    },
    reducers : {
        markFetchDone: (state) => {
            return state.fetchDone = true;
        },
        markFetchingStarted : (state,action) =>{
            return state.currentlyFetching = true;
        },
        markFetchingFinished : (state,action) =>{
            return state.currentlyFetching = false;
        },
    }
});
export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

