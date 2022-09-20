import React, { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function LandingPage() {
	let location = useLocation()
	let navigate = useNavigate()
	const [dashboardSelect, setDashboardSelect] = useState(true)
	const [dataSelect, setDataSelect] = useState(false)
	const [barmaSelect, setBarmaSelect] = useState(false)
	const [barkelSelect, setBarkelSelect] = useState(false)

	return (
		<div>
			<nav className='bg-teal-400'>
        <div className="flex flex-1 justify-between h-16 items-center max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <button className="flex flex-shrink-0 items-center" onClick={() => {navigate('/'); setDashboardSelect(true); setDataSelect(false); setBarmaSelect(false); setBarkelSelect(false)}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
  						<path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
						</svg>
						<span className='ml-2 text-lg font-bold'>BBS Inventory</span>
          </button>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
							<div>
								{
									dashboardSelect ?
									<button
  	              	className='px-3 py-2 rounded-md text-sm font-medium bg-teal-900 text-white'
    	          	>
      	          	Dashboard
        	      	</button>
									:
									<button
  	              	className='px-3 py-2 rounded-md text-sm font-medium text-black'
										onClick={()=>{navigate('/'); setDashboardSelect(true); setDataSelect(false); setBarmaSelect(false); setBarkelSelect(false)}}
    	          	>
      	          	Dashboard
        	      	</button>
								}
							</div>
							<div>
								{
									dataSelect ?
									<button
										className='px-3 py-2 rounded-md text-sm font-medium  bg-teal-900 text-white'
									>
										Data Barang
									</button>
									:
									<button
										className='px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-teal-800 hover:text-white' 
										onClick={()=>{navigate('/dataBarang'); setDataSelect(true); setDashboardSelect(false); setBarmaSelect(false); setBarkelSelect(false)}}
									>
										Data Barang
									</button>
								}
							</div>
							<div>
								{
									barmaSelect ?
									<button
										className='px-3 py-2 rounded-md text-sm font-medium  bg-teal-900 text-white'
									>
										Barang Masuk
									</button>
									:
									<button
										className='px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-teal-800 hover:text-white' 
										onClick={()=>{navigate('/barangMasuk'); setBarmaSelect(true); setDataSelect(false); setDashboardSelect(false); setBarkelSelect(false)}}
									>
										Barang Masuk
									</button>
								}
							</div>
							<div>
								{
									barkelSelect ?
									<button
										className='px-3 py-2 rounded-md text-sm font-medium  bg-teal-900 text-white'
									>
										Barang Keluar
									</button>
									:
									<button
										className='px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-teal-800 hover:text-white' 
										onClick={()=>{navigate('/barangKeluar'); setBarkelSelect(true); setDataSelect(false); setDashboardSelect(false); setBarmaSelect(false)}}
									>
										Barang Keluar
									</button>
								}
							</div>
            </div>
          </div>
        </div>
      </nav>
			<main>
				{
					location.pathname==="/" ?
					<div>
						<h1>Hello</h1>
					</div>
					:
					<Outlet/>
				}
			</main>
		</div>
	)
}
