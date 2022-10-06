import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { reducer as mapDetails } from './slices/mapSlice'
import { reducer as filterDetails } from './slices/filterSlice'
import { reducer as headerDetails } from './slices/headerSlice'

const rootReducer = combineReducers({  // = () =>  // = 
  mapDetails,
  filterDetails,
  headerDetails,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


