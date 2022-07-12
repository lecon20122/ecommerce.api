import { faEllipsis, faEllipsisH, faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import DataTable from '../../../components/DataTables';
import Pending from '../../../components/status/pending';
import DashboardLayout from '../../../layouts/dashboard'
import { User } from '../../../types/auth';
import { PaginatedData, ModelData } from '../../../types/globalTypes';

interface IUsers extends PaginatedData {
  data: User[]
}

interface Props {
  users: IUsers
}



export default function index({ users }: Props) {
  console.log(users);

  const dataRows = users.data.map((user) => (
    <tr className="text-gray-700 dark:text-gray-400" key={user.id}>
      <td className="px-3 py-3">
        {user.id}
      </td>
      <td className="px-3 py-3">
        <div className="flex items-center leading-tight">
          <div>
            <p className="font-bold">{user.name}</p>
          </div>
        </div>
      </td>
      <td className="px-3 py-3">
        <Pending />
      </td>
      <td className="px-3 py-3">
        6/10/2020
      </td>
      <td className="px-3 py-3 flex justify-end gap-1">
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
  ))

  return (
    <DashboardLayout>
      <section className="container p-6 mx-auto">
        {/* <!-- scrolling horiz. table --> */}
        <DataTable<User> columns={['id', 'name' , 'updated_at' , 'controls']} data={users.data} />
      </section>
    </DashboardLayout>
  )
}
