import { Reducer } from 'redux';

import { getTheme, saveTheme } from '../../helpers/webStorageHelper';
import { AppActionTypes } from './actions';
import { State } from './types';

const defaultTheme: string = getTheme();

const initialState: State = {
  themeType: defaultTheme,
  isLoading: false,
  isFirstLoad: false,
  coinData: [],
  error: null,
};

const reducer: Reducer<State, AppActionTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SET_THEME':
      saveTheme(action.payload);

      return {
        ...state,
        themeType: action.payload,
      };

    case 'GET_COIN_DATA':
      return {
        ...state,
        isFirstLoad: true,
        isLoading: state.isFirstLoad ? false : true,
        error: null,
      };

    case 'GET_COIN_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        coinData: action.payload,
      };

    case 'GET_COIN_DATA_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export default reducer;
