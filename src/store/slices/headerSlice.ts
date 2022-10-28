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

const closeAll = (state: headerState) => {
    state.filtersIsOpen = false
    state.helpIsOpen = false
    state.contactIsOpen = false
    state.informationIsOpen = false
}

const headerDetails = createSlice({
    name: 'headerDetails',
    initialState,
    reducers: {
        openFilters(state) {
            closeAll(state)
            state.filtersIsOpen = true
        },
        openHelp(state) {
            closeAll(state)
            state.helpIsOpen = true
        },
        openContacts(state) {
            closeAll(state)
            state.contactIsOpen = true
        },
        openInfo(state) {
            closeAll(state)
            state.informationIsOpen = true
        },
        closeFilters(state) {state.filtersIsOpen = false},
        closeHelp(state) {state.helpIsOpen = false},
        closeContacts(state) {state.contactIsOpen = false},
        closeInfo(state) {state.informationIsOpen = false },
        closeAllWindows(state){closeAll(state)},
    },
})

export const reducer: Reducer<typeof initialState> = headerDetails.reducer
export const { openFilters, openHelp,openContacts, openInfo, 
    closeFilters, closeHelp,  closeContacts, closeInfo,closeAllWindows } = headerDetails.actions




