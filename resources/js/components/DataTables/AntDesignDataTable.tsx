import React from 'react';
import { Table } from "antd";

interface Props {
  columns: any;
  rowKey: string
  dataSource: any,
  rowClassName?: string | any
}

function AntDesignDataTable({ rowKey = "id", columns, dataSource, rowClassName }: Props) {
  return (
    <Table rowClassName={rowClassName} rowKey={rowKey} columns={columns} dataSource={dataSource} scroll={{ x: true }} />
  );
}

export default AntDesignDataTable;
