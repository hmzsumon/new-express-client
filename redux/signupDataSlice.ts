import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: '',
};

export const signupDataSlice = createSlice({
	name: 'signupData',
	initialState,
	reducers: {
		addEmail: (state, action) => {
			state.email = action.payload;
		},
	},
});

export const { addEmail } = signupDataSlice.actions;
export default signupDataSlice.reducer;
