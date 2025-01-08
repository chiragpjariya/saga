import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import list from './PostSlice'
import watchSaga from './saga'


const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer: {
        lists: list
    }
    ,
    middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(watchSaga)

export default store