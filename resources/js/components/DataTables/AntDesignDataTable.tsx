import React from 'react';
import {ColumnsType} from "antd/es/table";
import {Table} from "antd";
import {TableProps as RcTableProps} from "rc-table/lib/Table";
import {DefaultRecordType} from "rc-table/es/interface";

interface Props {
  columns: any;
  rowKey: string
  dataSource: any
}

function AntDesignDataTable({rowKey = "id", columns, dataSource}: Props) {
  return (
    <Table rowKey={rowKey} columns={columns} dataSource={dataSource}/>
  );
}

export default AntDesignDataTable;
