import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDatarequest, requestFullfilled, requestError } from './PostSlice'
function Posts() {

    const dispatch = useDispatch()
    const { posts, loading, error } = useSelector((state) => state.lists)





    useEffect(() => {
       dispatch(getDatarequest('hello i am param '))
        
    },[])

    console.log(posts);
    return (
        <>

        </>
    )
}

export default Posts
