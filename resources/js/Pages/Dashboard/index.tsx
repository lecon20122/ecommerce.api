import React, { lazy } from 'react'
import { Suspense } from 'react';
import NewDashboardLayout from '../../layouts/new-dashboard-layout';

export default function index() {

  return (
      <NewDashboardLayout>
        <div>
          'Home Page'
        </div>
      </NewDashboardLayout>
  )
}

