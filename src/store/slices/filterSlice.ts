import { createEntityAdapter, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'



// проблема, не вистачає досвіду + не знайшов як його коректо типізувати :(

interface filterState {
    establishmentTypes: {
        activeTravel: {
            id: string
            isOpen: boolean
            filters: {
                filter1:{
                    name:string
                    onChecked: boolean
                    id: number
                },
                filter2:{
                    name:string
                    onChecked: boolean
                    id: number
                },
                filter3:{
                    name:string
                    onChecked: boolean
                    id: number
                },
            }
        },
        recreationOnTheWater: {
            id: string
            isOpen: boolean
            filters: {
                filter1:{
                    name:string
                    onChecked: boolean
                    id: number
                },
                filter2:{
                    name:string
                    onChecked: boolean
                    id: number
                },
                filter3:{
                    name:string
                    onChecked: boolean
                    id: number
                },
                filter4:{
                    name:string
                    onChecked: boolean
                    id: number
                },
                filter5:{
                    name:string
                    onChecked: boolean
                    id: number
                },

            }
        }
    }
}
const stateAdapter = createEntityAdapter()

const initialState = stateAdapter.getInitialState<filterState>({
    establishmentTypes: {
        activeTravel: {
            id: 'activeTravel',
            isOpen: false,
            filters: {
                filter1: {
                    name: 'filterName1',
                    onChecked: false,
                    id: 1
                },
                filter2: {
                    name: 'filterName2',
                    onChecked: false,
                    id: 2
                },
                filter3: {
                    name: 'filterName3',
                    onChecked: false,
                    id: 3
                },
            }
        },
        recreationOnTheWater: {
            id: 'recreationOnTheWater',
            isOpen: true,
            filters: {
                filter1: {
                    name: 'filterName1',
                    onChecked: false,
                    id: 1
                },
                filter2: {
                    name: 'filterName2',
                    onChecked: false,
                    id: 2
                },
                filter3: {
                    name: 'filterName3',
                    onChecked: false,
                    id: 3
                },
                filter4: {
                    name: 'filterName4',
                    onChecked: false,
                    id: 4
                },
                filter5: {
                    name: 'filterName5',
                    onChecked: false,
                    id: 5
                },

            }
        },
        //any filters type
    }
})

const filterDetails = createSlice({
    name: 'filtersDetails',
    initialState,
    reducers: {
        nextFilterGroup(state, action: PayloadAction<any>) {
            let key = action.payload
           
        },

    },
})

export const reducer: Reducer<typeof initialState> = filterDetails.reducer
export const { nextFilterGroup} = filterDetails.actions