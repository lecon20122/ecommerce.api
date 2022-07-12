import React, { useState } from 'react'
import { ModelData, PaginatedData } from '../../types/globalTypes';
import { User } from '../../types/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

interface Props<DataType> {
  columns: string[];
  data: Array<DataType>
}

export default function DataTable<T>({ columns, data }: Props<T>) {

  const [loading, useLoading] = useState(true)

  return (
    <div className="overflow-x-auto shadow-sm">
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left uppercase bg-gray-200">
            {columns.length > 0 && columns.map((column, index) => (
              <th className="px-3 py-3" key={index}>{column.replace('_', ' ')}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {data.map((item) => (
            <tr>
              {
                columns.map((column, index) => (
                  <td className="px-3 py-3" key={index} colSpan={index}>
                    {(item as any)[column]}
                  </td>
                ))
              }
              <td className="px-3 py-3">
                <a className="px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600" href="#">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </a>
                <a className="px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" href="#">
                  <FontAwesomeIcon icon={faPenAlt} />
                </a>
                <a className="px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" href="#">
                  <FontAwesomeIcon icon={faEllipsisH} />
                  <i className="fa fa-ellipsis-h"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
