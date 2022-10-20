import { createSlice } from "@reduxjs/toolkit";

const initialState = new Date()

const presentSlice = createSlice({
	name: 'present',
	initialState,
	reducers: {
		presentUpdated(state, action) {
			state.present = action.payload
		},
	},
})

export const { presentUpdated } = presentSlice.actions

export default presentSlice.reducer
