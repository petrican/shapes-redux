import { GET_SHAPE_FILTER, SET_SHAPE_FILTER } from "../actions/types";

const initialState = {
  shapes: ["ROUND", "SQUARE", "TRIANGLE", "OVAL", "RECTANGLE"],
  shapesState: {
    ROUND: false,
    SQUARE: false,
    TRIANGLE: true,
    OVAL: true,
    RECTANGLE: true
  },
  colors: ["gray", "yellow", "blue", "green", "red", "purple"],
  colorsState: {
    gray: false,
    yellow: false,
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
    default:
      return state;
  }
}
