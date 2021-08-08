import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  changeFilter,
} from '../actions/contacts-action';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    const findContact = state.find(contact =>
      contact.name.includes(payload.name),
    );
    if (findContact) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
