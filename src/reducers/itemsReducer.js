import {
    GET_ITEMS,
  } from '../actions/types';
  
  const initialState = {
    data: []
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          data: action.payload
        };
      default:
        return state;
    }
  }
  