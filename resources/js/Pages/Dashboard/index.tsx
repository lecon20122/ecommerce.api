import React, { lazy } from 'react'
import { Suspense } from 'react';

export default function index() {
  const DashboardLayout = lazy(() => import('../../layouts/dashboard'));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardLayout>
        <div>
          'Home Page'
        </div>
      </DashboardLayout>
    </Suspense>
  )
}

