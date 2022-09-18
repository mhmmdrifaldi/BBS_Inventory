import React from 'react'
import LandingPage from './component/LandingPage'
import { Navigate, useRoutes } from 'react-router-dom'
import Data from './views/Data'

export default function Routes() {
	return useRoutes([
		{
			path: "/",
			element: <LandingPage/>,
			children: [
				{path: "data", element: <Data/>}
			]
		},
		{path: '*', element: <Navigate to='404' replace/>}
	])
}
