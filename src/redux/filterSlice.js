import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        filteredContacts(state, action) {
            state.filter = action.payload;
        }
    }
})

export const { filteredContacts } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;