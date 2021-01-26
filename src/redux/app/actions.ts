import { FixmeType } from '../../types/global';

export const setTheme = (payload: string) =>
  ({ type: 'SET_THEME', payload } as const);

export const getCoinData = () => ({ type: 'GET_COIN_DATA' } as const);

export const getCoinDataSuccess = (payload: FixmeType) =>
  ({ type: 'GET_COIN_DATA_SUCCESS', payload } as const);

export const getCoinDataFailed = (payload: Error) =>
  ({ type: 'GET_COIN_DATA_FAILED', payload } as const);

export type AppActionTypes = ReturnType<
  | typeof setTheme
  | typeof getCoinData
  | typeof getCoinDataSuccess
  | typeof getCoinDataFailed
>;
