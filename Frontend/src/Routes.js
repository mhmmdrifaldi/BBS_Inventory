import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import LandingPage from './component/LandingPage'
import BlankPage from './component/BlankPage'
import DataBarang from './views/DataBarang'
import BarangMasuk from './views/BarangMasuk'
import BarangKeluar from './views/BarangKeluar'
import AddJenisBarang from './views/componentDataBarang/AddJenisBarang'
import EditJenisBarang from './views/componentDataBarang/EditJenisBarang'
import AddDataBarang from './views/componentDataBarang/AddDataBarang'
import EditDataBarang from './views/componentDataBarang/EditDataBarang'
import AddBarangMasuk from './views/componentBarangMasuk/AddBarangMasuk'
import EditBarangMasuk from './views/componentBarangMasuk/EditBarangMasuk'
import DetailBarangMasuk from './views/componentBarangMasuk/DetailBarangMasuk'
import AddBarangKeluar from './views/componentBarangKeluar/AddBarangKeluar'
import DetailBarangKeluarPending from './views/componentBarangKeluar/DetailBarangKeluarPending'

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
		{
			path: "/dataBarang",
			element: <BlankPage/>,
			children: [
				{path: "addKategori", element: <AddJenisBarang/>},
				{path: "editKategori/:id", element: <EditJenisBarang/>},
				{path: "addBarang", element: <AddDataBarang/>},
				{path: "editBarang/:id", element: <EditDataBarang/>}
			]
		},
		{
			path: "/barangMasuk",
			element: <LandingPage/>,
			children: [
				{path: "detail/:id", element: <DetailBarangMasuk/>}
			]
		},
		{
			path: "/barangMasuk",
			element: <BlankPage/>,
			children: [
				{path: "addBarang", element: <AddBarangMasuk/>},
				{path: "editBarang/:id", element: <EditBarangMasuk/>}
			]
		},
		{
			path: "/barangKeluar",
			element: <LandingPage/>,
			children: [
				{path: "detail/:id", element: <DetailBarangKeluarPending/>}
			]
		},
		{
			path: "/barangKeluar",
			element: <BlankPage/>,
			children: [
				{path: "addBarang", element: <AddBarangKeluar/>}
			]
		},
		{path: '*', element: <Navigate to='404' replace/>}
	])
}
