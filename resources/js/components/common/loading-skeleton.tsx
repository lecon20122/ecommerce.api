import React, { useEffect } from 'react'
import NewDashboardLayout from '../../layouts/new-dashboard-layout';
import { Skeleton } from 'antd';

export default function LoadingSkeleton() {

  // add delay of 1sec when component is mounted in useEffect
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 600000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <NewDashboardLayout asLoadingSkeleton>
      <div className='container mx-auto py-4'>
        {/* <Skeleton loading={loading} /> */}
      </div>
    </NewDashboardLayout>
  )
}
