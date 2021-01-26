import { Maybe } from '../../types/global';

export type CoinInfo = {
  rank: number;
  name: string;
  symbol: string;
  price: number;
  percent_change_24h: number;
  percent_change_7d: number;
  volume_24h: number;
};

export type State = {
  themeType: string;
  isFirstLoad: boolean;
  isLoading: boolean;
  coinData: CoinInfo[];
  error: Maybe<string>;
};
