import {
    GET_SHAPE_FILTER,
    SET_SHAPE_FILTER
  } from '../actions/types';
  
  const initialState = {
    shapes: ["ROUND", "SQUARE", "TRIANGLE", "OVAL", "RECTANGLE"],
    shapesState: {
       ROUND: "active",
       SQUARE: "active",
       TRIANGLE: "active",
       OVAL: "active",
       RECTANGLE: "active"
    },
    colors: ["gray", "yellow", "blue", "green", "red", "purple"],
    colorsState: {
      gray: "active",
      yellow: "active",
      blue: "active",
      green: "active",
      red: "active",
      purple: "active"
    },
    title: "All items"
  };
  

  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_SHAPE_FILTER:
        return {
          ...state,
        };
        
      default:
        return state;
    }
  }
  