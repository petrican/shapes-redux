import axios from 'axios';
import {
  GET_ITEMS,
  GET_ERRORS
} from './types';
import { baseUrl } from '../helpers/index';

export const listItems = res => ({
  type: GET_ITEMS,
  payload: res.data
});


export const getItems = () => (dispatch) => {
  axios(`${baseUrl}/shapes.json`)
    .then((res) => {
      dispatch(listItems(res));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

