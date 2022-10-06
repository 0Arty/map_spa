import { createEntityAdapter, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'

interface headerState {
    filtersIsOpen: boolean
    helpIsOpen: boolean
    contactIsOpen: boolean
    informationIsOpen: boolean


}
const stateAdapter = createEntityAdapter()

const initialState = stateAdapter.getInitialState<headerState>({
    filtersIsOpen: false,
    helpIsOpen: false,
    contactIsOpen: false,
    informationIsOpen: false,
})

const headerDetails = createSlice({
    name: 'headerDetails',
    initialState,
    reducers: {
        setFiltersIsOpen(state, action: PayloadAction<string>) {
            if(action.payload === 'open'){
                state.filtersIsOpen = true
                state.helpIsOpen = false
                state.contactIsOpen = false
                state.informationIsOpen = false
            }
            else if(action.payload === 'close'){
                state.filtersIsOpen = false
            }
        },
        setHelpIsOpen(state, action: PayloadAction<string>) {
            if(action.payload === 'open'){
                state.helpIsOpen = true
                state.filtersIsOpen = false
                state.contactIsOpen = false
                state.informationIsOpen = false
            }
            else if(action.payload === 'close'){
                state.helpIsOpen = false
            }
        },
        setContactIsOpen(state, action: PayloadAction<string>) {
            if(action.payload === 'open'){
                state.contactIsOpen = true
                state.filtersIsOpen = false
                state.helpIsOpen = false
                state.informationIsOpen = false
            }
            else if(action.payload === 'close'){
                state.contactIsOpen = false
            }
        },
        setInformationIsOpen(state, action: PayloadAction<string>) {
            if(action.payload === 'open'){
                state.informationIsOpen = true
                state.filtersIsOpen = false
                state.contactIsOpen = false
                state.helpIsOpen = false
            }
            else if(action.payload === 'close'){
                state.informationIsOpen = false
            }
        },
        closeAllWindows(state, acrtion: PayloadAction<null>){
            state.informationIsOpen = false
            state.filtersIsOpen = false
            state.contactIsOpen = false
            state.helpIsOpen = false
        }
    },
})

export const reducer: Reducer<typeof initialState> = headerDetails.reducer
export const { setFiltersIsOpen,setHelpIsOpen,setContactIsOpen,setInformationIsOpen,closeAllWindows } = headerDetails.actions




