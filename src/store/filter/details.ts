import { createEntityAdapter, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'

interface filterState {
    filtersIsOpen: boolean

}

const stateAdapter = createEntityAdapter()

const initialState = stateAdapter.getInitialState<filterState>({
    filtersIsOpen: false,
})

const filterDetails = createSlice({
    name: 'filtersDetails',
    initialState,
    reducers: {
        setFilterIsOpen(state, action: PayloadAction<boolean>) {
            state.filtersIsOpen = !state.filtersIsOpen
        },
    },
})

export const reducer: Reducer<typeof initialState> = filterDetails.reducer
export const { setFilterIsOpen, } = filterDetails.actions