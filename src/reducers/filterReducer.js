import {
  GET_SHAPE_FILTER,
  SET_SHAPE_FILTER,
  SET_COLOR_FILTER
} from "../actions/types";

const initialState = {
  shapes: ["ROUND", "SQUARE", "TRIANGLE", "OVAL", "RECTANGLE"],
  shapesState: {
    ROUND: true,
    SQUARE: true,
    TRIANGLE: true,
    OVAL: true,
    RECTANGLE: true
  },
  colors: ["grey", "yellow", "blue", "green", "red", "purple"],
  colorsState: {
    grey: true,
    yellow: true,
    blue: true,
    green: true,
    red: true,
    purple: true
  },
  title: "All items"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHAPE_FILTER:
      return {
        ...state
      };
    case SET_SHAPE_FILTER:
      return {
        ...state,
        shapesState: action.payload
      };
    case SET_COLOR_FILTER:
      return {
        ...state,
        colorsState: action.payload
      };
    default:
      return state;
  }
}
