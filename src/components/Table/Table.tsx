import React from 'react';

import { TableProps } from 'antd/lib/table';

import { FixmeType } from '../../types/global';
import * as Styled from './Table.style';

export type Props = {
  className?: string;
};

const Table: React.FC<Props & TableProps<FixmeType>> = (props) => {
  const { className = '', ...rest } = props;

  return (
    <Styled.TableWrapper
      className={`table-wrapper ${className}`}
      pagination={false}
      {...rest}
    />
  );
};

export default Table;
