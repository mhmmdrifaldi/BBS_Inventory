import React from 'react'
import LandingPage from './component/LandingPage'
import { Navigate, useRoutes } from 'react-router-dom'
import DataBarang from './views/DataBarang'
import BarangMasuk from './views/BarangMasuk'
import BarangKeluar from './views/BarangKeluar'

export default function Routes() {
	return useRoutes([
		{
			path: "/",
			element: <LandingPage/>,
			children: [
				{path: "dataBarang", element: <DataBarang/>},
				{path: "barangMasuk", element: <BarangMasuk/>},
				{path: "barangKeluar", element: <BarangKeluar/>}
			]
		},
		{path: '*', element: <Navigate to='404' replace/>}
	])
}
