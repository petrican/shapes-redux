import { SET_SHAPE_FILTER } from "./types";

export const setShapeFilter = shapeFilter => dispatch => {
  dispatch({
    type: SET_SHAPE_FILTER,
    payload: shapeFilter
  });
};
