import { createEntityAdapter, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'

interface MapState {
  longitude: number | null
  latitude: number
  zoom: number
  // markers: any
  // institution: any
  // info: any
  // filters: any
  // search: string
}

const stateAdapter = createEntityAdapter()

const initialState = stateAdapter.getInitialState<MapState>({
  longitude: 30.523333,
  latitude: 50.45446,
  zoom: 0,
  // markers: [],
  // institution: [],
  // info: {},
  // filters: {},
  // search: '',
})

const mapDetails = createSlice({
  name: 'mapDetails',
  initialState,
  reducers: {
    setLongitude(state, action: PayloadAction<number | null>) {
      state.longitude = action.payload
    },
    setLatitude(state, action: PayloadAction<number>) {
      state.latitude = action.payload
    },
    setZoom(state, action: PayloadAction<number>){
      state.zoom = action.payload
    }
    // setMarkers(state, action: PayloadAction<any>) {
    //   state.markers = action.payload
    // },
    // setInstitution(state, action: PayloadAction<any>) {
    //   state.institution = action.payload
    // },
    // setInfo(state, action: PayloadAction<any>) {
    //   state.info = action.payload
    // },
    // setFilters(state, action: PayloadAction<any>) {
    //   state.filters = action.payload
    // },
    // setSearch(state, action: PayloadAction<string>) {
    //   state.search = action.payload
    // },
  },
})

export const reducer: Reducer<typeof initialState> = mapDetails.reducer
export const {
  setLongitude,
  setLatitude,
  setZoom,
  // setMarkers,
  // setInstitution,
  // setInfo,
  // setFilters,
  // setSearch,
} = mapDetails.actions