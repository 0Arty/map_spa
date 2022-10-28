import { createEntityAdapter, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'



// проблема, не вистачає досвіду + не знайшов як його коректо типізувати :(
interface TFilter {
    [key: string]: {
        name: string
        onChecked: boolean
        id: number
    }
}


interface filterState {
    establishmentTypes: {
        [key: string]: {
            id: string
            isOpen: boolean
            filters: TFilter
        }
    }
}
const stateAdapter = createEntityAdapter()

const initialState = stateAdapter.getInitialState<filterState>({
    establishmentTypes: {
        activeTravel: {
            id: 'activeTravel',
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
        air: {
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
                filter6: {
                    name: 'filterName5',
                    onChecked: false,
                    id: 5
                },
                filter7: {
                    name: 'filterName5',
                    onChecked: false,
                    id: 5
                },
                filter8: {
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
export const { nextFilterGroup } = filterDetails.actions