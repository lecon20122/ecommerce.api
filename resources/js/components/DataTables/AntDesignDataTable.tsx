import React from 'react';
import {Table} from "antd";

interface Props {
  columns: any;
  rowKey: string
  dataSource: any
}

function AntDesignDataTable({rowKey = "id", columns, dataSource}: Props) {
  return (
    <Table rowKey={rowKey} columns={columns} dataSource={dataSource} scroll={{x: true}}/>
  );
}

export default AntDesignDataTable;
