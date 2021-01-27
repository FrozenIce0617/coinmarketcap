import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'antd';
import { ColumnType } from 'antd/lib/table';

import Header from '../../components/Header';
import Table from '../../components/Table';
import useInterval from '../../hooks/useInterval';
import { RootState } from '../../redux/store';
import * as appActions from '../../redux/app/actions';
import { CoinInfo } from '../../redux/app/types';
import { FixmeType } from '../../types/global';
import { Column } from './types';
import * as Styled from './MainView.style';

const MainView: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, coinData } = useSelector((state: RootState) => state.App);
  const isDesktopView = Grid.useBreakpoint()?.lg ?? false;

  useEffect(() => {
    dispatch(appActions.getCoinData());
  }, [dispatch]);

  useInterval(() => {
    dispatch(appActions.getCoinData());
  }, 5000);

  const getColumnRenderer = useCallback((): Record<
    Column,
    (value: FixmeType, row: CoinInfo) => JSX.Element
  > => {
    return {
      rank: (_, row) => {
        return <span>{row.rank}</span>;
      },
      name: (_, row) => {
        return <span>{row.name}</span>;
      },
      symbol: (_, row) => {
        return <span>{row.symbol}</span>;
      },
      price: (_, row) => {
        return <span>{`$${row.price.toFixed(2)}`}</span>;
      },
      price_change_24h: (_, row) => {
        return (
          <Styled.HighlightText isNegative={row.percent_change_24h < 0}>
            {`${row.percent_change_24h.toFixed(2)}%`}
          </Styled.HighlightText>
        );
      },
      price_change_7d: (_, row) => {
        return (
          <Styled.HighlightText isNegative={row.percent_change_7d < 0}>
            {`${row.percent_change_7d.toFixed(2)}%`}
          </Styled.HighlightText>
        );
      },
    };
  }, []);

  const columnRenders = useMemo(() => getColumnRenderer(), [getColumnRenderer]);

  const rankColumn: ColumnType<CoinInfo> = useMemo(
    () => ({
      key: 'rank',
      title: '#',
      dataIndex: 'rank',
      align: 'center',
      render: columnRenders.rank,
    }),
    [columnRenders.rank],
  );

  const nameColumn: ColumnType<CoinInfo> = useMemo(
    () => ({
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      align: 'center',
      render: columnRenders.name,
    }),
    [columnRenders.name],
  );

  const symbolColumn: ColumnType<CoinInfo> = useMemo(
    () => ({
      key: 'symbol',
      title: 'Symbol',
      dataIndex: 'symbol',
      align: 'center',
      render: columnRenders.symbol,
    }),
    [columnRenders.symbol],
  );

  const priceColumn: ColumnType<CoinInfo> = useMemo(
    () => ({
      key: 'price',
      title: 'Price',
      dataIndex: 'price',
      align: 'center',
      render: columnRenders.price,
    }),
    [columnRenders.price],
  );

  const priceChange24hColumn: ColumnType<CoinInfo> = useMemo(
    () => ({
      key: 'priceChange24h',
      title: '24h',
      dataIndex: 'priceChange24h',
      align: 'center',
      render: columnRenders.price_change_24h,
    }),
    [columnRenders.price_change_24h],
  );

  const priceChange7dColumn: ColumnType<CoinInfo> = useMemo(
    () => ({
      key: 'price_change_7d',
      title: '7d',
      dataIndex: 'price_change_7d',
      align: 'center',
      render: columnRenders.price_change_7d,
    }),
    [columnRenders.price_change_7d],
  );

  const desktopColumns = useMemo(
    () => [
      rankColumn,
      nameColumn,
      symbolColumn,
      priceColumn,
      priceChange24hColumn,
      priceChange7dColumn,
    ],
    [
      rankColumn,
      nameColumn,
      symbolColumn,
      priceColumn,
      priceChange24hColumn,
      priceChange7dColumn,
    ],
  );

  const mobileColumns = useMemo(
    () => [rankColumn, nameColumn, symbolColumn, priceColumn],
    [rankColumn, nameColumn, symbolColumn, priceColumn],
  );

  return (
    <Styled.MainWrapper>
      <Header />
      <Styled.Container>
        <Table
          loading={isLoading}
          dataSource={coinData}
          size="small"
          columns={isDesktopView ? desktopColumns : mobileColumns}
        />
      </Styled.Container>
    </Styled.MainWrapper>
  );
};

export default MainView;
