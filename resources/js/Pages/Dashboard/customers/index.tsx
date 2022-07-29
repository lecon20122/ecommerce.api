
import React, { lazy, Suspense } from 'react'
import { User } from '../../../types/auth';
import { PaginatedData, } from '../../../types/globalTypes';
import { ColDef } from 'ag-grid-community';
import type { DataGridType } from '../../../components/DataTables/DataGrid';

interface IUsers extends PaginatedData {
  data: User[]
}

interface Props {
  users: User[]
}



export default function index({ users }: Props) {

  const DataGrid = lazy(() => import('../../../components/DataTables/DataGrid')) as DataGridType;
  const DashboardLayout = lazy(() => import('../../../layouts/dashboard'));

  const filterParams = {
    // provide comparator function
    comparator: (filterLocalDateAtMidnight: any, cellValue: any) => {
      const dateAsString = cellValue;

      if (dateAsString == null) {
        return 0;
      }

      // In the example application, dates are stored as dd/mm/yyyy
      // We create a Date object for comparison against the filter date
      const dateParts = dateAsString.split('/');
      const year = Number(dateParts[2]);
      const month = Number(dateParts[1]) - 1;
      const day = Number(dateParts[0]);
      const cellDate = new Date(year, month, day);

      // Now that both parameters are Date objects, we can compare
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      } else if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    }
  }

  const columns: ColDef[] = [
    { field: 'id', headerName: 'ID', },
    { field: 'name', headerName: 'Name', floatingFilter: true, flex: 1, cellClass: 'font-bold text-lg' },
    { field: 'created_at', headerName: 'Join Date', filter: 'agDateColumnFilter', floatingFilter: true, filterParams: filterParams },
    { field: 'status', headerName: 'Status' },
  ]
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardLayout>
        <DataGrid<User>
          gridData={users}
          colDef={columns}
          size={{ height: '90vh', width: 'auto' }}
        />
      </DashboardLayout>
    </Suspense>
  )
}
