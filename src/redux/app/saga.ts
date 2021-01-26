import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as actions from './actions';
import { CoinInfo } from './types';
import axiosInstance from '../../helpers/apiHelper';
import { FixmeType } from '../../types/global';

export function* getCoinData() {
  yield takeEvery('GET_COIN_DATA', function* () {
    try {
      const path = '/v1/cryptocurrency/listings/latest';
      const { data: res } = yield call(axiosInstance.get, path);
      const coinData: CoinInfo[] = res.data.map((item: FixmeType) => ({
        rank: item.cmc_rank,
        name: item.name,
        symbol: item.symbol,
        price: item.quote.USD.price,
        percent_change_24h: item.quote.USD.percent_change_24h,
        percent_change_7d: item.quote.USD.percent_change_7d,
        volume_24h: item.quote.USD.volume_24h,
      }));
      yield put(actions.getCoinDataSuccess(coinData));
    } catch (err) {
      yield put(actions.getCoinDataFailed(err));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getCoinData)]);
}
