import { SET_SHAPE_FILTER, SET_COLOR_FILTER } from "./types";

export const setShapeFilter = shapeFilter => dispatch => {
  dispatch({
    type: SET_SHAPE_FILTER,
    payload: shapeFilter
  });
};

export const setColorFilter = colorFilter => dispatch => {
  dispatch({
    type: SET_COLOR_FILTER,
    payload: colorFilter
  });
};
