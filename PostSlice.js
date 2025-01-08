import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    loading: true,
    error: false
}


const postSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        getDatarequest: (state, action) => {
            state.loading = true
            state.error = false
        },

        requestFullfilled: (state, action) => {
            state.posts = action.payload
            state.loading = false
            state.error = false
        },
        requestError: (state, action) => {
            state.posts = action.payload
            state.loading = false
            state.error = true
        },

    }
})


export const {getDatarequest,requestFullfilled,requestError} = postSlice.actions
export default postSlice.reducer
