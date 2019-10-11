import axios from 'axios';
import {
  GET_ITEMS
} from './types';
import { baseUrl } from '../helpers/index';

export const listItems = res => ({
  type: GET_ITEMS,
  payload: res
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

