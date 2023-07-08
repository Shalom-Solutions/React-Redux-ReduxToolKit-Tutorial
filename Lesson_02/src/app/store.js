import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/post/postsSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore ({
    reducer: {
        posts: postReducer,
        users: usersReducer
    }
})