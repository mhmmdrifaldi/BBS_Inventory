import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetBarangKeluarPendingRequest, GetBarangKeluarProcessRequest, GetBarangKeluarDoneRequest } from '../redux-saga/actions/BarangKeluar'
import ReactPaginate from 'react-paginate'
import { Tab } from '@headlessui/react'

export default function BarangKeluar() {
	let navigate = useNavigate()
	const dispatch = useDispatch()
	const { dataPending } = useSelector(state => state.barkelState)
	const { dataProcess } = useSelector(state => state.barkelState)
	const { dataDone } = useSelector(state => state.barkelState)

	const [searchPending, setSearchPending] = useState("")
	const [valueSearchPending, setValueSearchPending] = useState("")

	const [searchProcess, setSearchProcess] = useState("")
	const [valueSearchProcess, setValueSearchProcess] = useState("")

	const [searchDone, setSearchDone] = useState("")
	const [valueSearchDone, setValueSearchDone] = useState("")

	const dataPerPage = 3

	const [dataAwalPending, setDataPending] = useState([])
	const [jumlahHalamanPending, setJumlahHalamanPending] = useState(0)
	const [halamanTerkiniPending, setHalamanTerkiniPending] = useState(0)

	useEffect(() => {
		const halamanAkhir = halamanTerkiniPending + dataPerPage;
		setDataPending(dataPending && dataPending.filter((data) => {
			if(searchPending === "") {
				return data
			} else if(data.date_pembelian.includes(searchPending)) {
				return data
			}
		}).slice(halamanTerkiniPending, halamanAkhir));
		setJumlahHalamanPending(Math.ceil(dataPending && dataPending.length / dataPerPage));
	}, [halamanTerkiniPending, dataPerPage, dataPending, searchPending])

	const handlePageClickPending = (event) => {
		const pilihHalaman = (event.selected * dataPerPage) % dataPending.length;
		setHalamanTerkiniPending(pilihHalaman)
	}

	const [dataAwalProcess, setDataProcess] = useState([])
	const [jumlahHalamanProcess, setJumlahHalamanProcess] = useState(0)
	const [halamanTerkiniProcess, setHalamanTerkiniProcess] = useState(0)

	useEffect(() => {
		const halamanAkhir = halamanTerkiniProcess + dataPerPage;
		setDataProcess(dataProcess && dataProcess.filter((data) => {
			if(searchProcess === "") {
				return data
			} else if(data.date_pembelian.includes(searchProcess)) {
				return data
			}
		}).slice(halamanTerkiniProcess, halamanAkhir));
		setJumlahHalamanProcess(Math.ceil(dataProcess && dataProcess.length / dataPerPage));
	}, [halamanTerkiniProcess, dataPerPage, dataProcess, searchProcess])

	const handlePageClickProcess = (event) => {
		const pilihHalaman = (event.selected * dataPerPage) % dataProcess.length;
		setHalamanTerkiniProcess(pilihHalaman)
	}

	const [dataAwalDone, setDataDone] = useState([])
	const [jumlahHalamanDone, setJumlahHalamanDone] = useState(0)
	const [halamanTerkiniDone, setHalamanTerkiniDone] = useState(0)

	useEffect(() => {
		const halamanAkhir = halamanTerkiniDone + dataPerPage;
		setDataDone(dataDone && dataDone.filter((data) => {
			if(searchDone === "") {
				return data
			} else if(data.date_pembelian.includes(searchDone)) {
				return data
			}
		}).slice(halamanTerkiniDone, halamanAkhir));
		setJumlahHalamanDone(Math.ceil(dataDone && dataDone.length / dataPerPage));
	}, [halamanTerkiniDone, dataPerPage, dataDone, searchDone])

	const handlePageClickDone = (event) => {
		const pilihHalaman = (event.selected * dataPerPage) % dataDone.length;
		setHalamanTerkiniDone(pilihHalaman)
	}

	useEffect(() => {
		dispatch(GetBarangKeluarPendingRequest())
		dispatch(GetBarangKeluarProcessRequest())
		dispatch(GetBarangKeluarDoneRequest())
	}, [dispatch])

	const test = dataPending.filter(data => data.id_user !== 29)
	console.log(test);

	return (
		<div className='relative h-auto px-none lg:px-10 sm:px-5 pt-3 pb-5'>
			<Tab.Group as="div" className="p-none lg:p-5 sm:p-3">
				<Tab.List className="flex justify-center space-x-5 mb-5">
					<Tab
						className={({selected}) =>
							selected ? 'bg-teal-600 text-white font-semibold px-6 py-2 rounded' : 'bg-teal-100 text-teal-700 hover:bg-teal-300 hover:text-white hover:font-semibold px-6 py-2 rounded'
						}
					>
						Barang Pending
					</Tab>
					<Tab
						className={({selected}) =>
						selected ? 'bg-teal-600 text-white font-semibold px-6 py-2 rounded' : 'bg-teal-100 text-teal-700 hover:bg-teal-300 hover:text-white hover:font-semibold px-6 py-2 rounded'
					}
					>
						Barang on Process
					</Tab>
					<Tab
						className={({selected}) =>
						selected ? 'bg-teal-600 text-white font-semibold px-6 py-2 rounded' : 'bg-teal-100 text-teal-700 hover:bg-teal-300 hover:text-white hover:font-semibold px-6 py-2 rounded'
					}
					>
						Data Barang Keluar
					</Tab>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel>
						<div className='bg-teal-100 rounded-md py-5'>
							<h1 className='flex justify-center text-2xl font-semibold mb-5 uppercase'>Data Barang Keluar (Pending)</h1>
							<div className='flex justify-center'>
								<div className='flex justify-between mb-2 w-full lg:w-5/6 sm:w-5/6'>
									<div>
										<button
											type="button" 
											className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
											onClick={()=> navigate('/barangKeluar/addBarang')}
										>
											<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
												<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
											</svg>
												Barang         
										</button>
									</div>
									<div className='flex items-center'>
										<input
											type='date'
											className='focus:ring-indigo-500 focus:border-indigo-500 w-40 h-9 mr-3 mt-1 shadow-sm sm:text-sm border-gray-400 rounded-md'
											onChange={(event) => {
												setValueSearchPending(event.target.value)
											}}
										/>
										<button 
											className='mb-1 my-2 cursor-pointer inline-flex justify-center mr-3 py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'
											onClick={()=> setSearchPending(valueSearchPending)}
										>
											Search
										</button>
										<button 
											className='mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
											onClick={()=> setSearchPending("")}
										>
											Reset
										</button>
									</div>
								</div>
							</div>
							<div className='flex justify-center'>
								<table className="w-full lg:w-5/6 sm:w-5/6 text-md text-left table-auto shadow-lg shadow-emerald-50 rounded">
									<thead className="text-md text-slate-900 uppercase bg-teal-300">
										<tr>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Pembeli
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Alamat
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Date
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Status
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
														<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
														<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
													</svg>
												</div>
											</th>
										</tr>
									</thead>
									<tbody className="overscroll-auto md:overscroll-contain">
										{
											dataAwalPending && dataAwalPending.filter((data) => {
												if(searchPending === "") {
													return data
												} else if(data.date_pembelian.includes(searchPending)) {
													return data
												}
											}).map(data => {
												return (
													<tr key={data.id_user} className="bg-emerald-50 border border-emerald-100">
														<td className="px-6 py-2">{data.nama_user}</td>
														<td className="px-6 py-2">{data.alamat}</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																{data.date_pembelian_value}
															</div>
														</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-red-500">
																	<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
																</svg>
															</div>
														</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																<button 
																	type="button" 
																	className="mb-1 mr-2 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
																	onClick={()=> navigate(`/barangKeluar/detail/${data.id_user}`)}
																>
																	Lihat Data         
																</button>
															</div>
														</td>
													</tr>
												)
											})
										}
									</tbody>
								</table>
							</div>
							<ReactPaginate
								containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
								pageLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								previousLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								nextLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								activeLinkClassName='bg-teal-300'
								breakLabel="..."
								nextLabel="next >"
								onPageChange={handlePageClickPending}
								pageRangeDisplayed={5}
								pageCount={jumlahHalamanPending}
								previousLabel="< previous"
								renderOnZeroPageCount={null}
							/>
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className='bg-teal-100 rounded-md py-5'>
							<h1 className='flex justify-center text-2xl font-semibold mb-5 uppercase'>Data Barang Keluar (Pending)</h1>
							<div className='flex justify-center'>
								<div className='flex justify-end items-center mb-2 w-full lg:w-5/6 sm:w-5/6'>							
									<input
										type='date'
										className='focus:ring-indigo-500 focus:border-indigo-500 w-40 h-9 mr-3 mt-1 shadow-sm sm:text-sm border-gray-400 rounded-md'
										onChange={(event) => {
											setValueSearchProcess(event.target.value)
										}}
									/>
									<button 
										className='mb-1 my-2 cursor-pointer inline-flex justify-center mr-3 py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'
										onClick={()=> setSearchProcess(valueSearchProcess)}
									>
										Search
									</button>
									<button 
										className='mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
										onClick={()=> setSearchProcess("")}
									>
										Reset
									</button>
								</div>
							</div>
							<div className='flex justify-center'>
								<table className="w-full lg:w-5/6 sm:w-5/6 text-md text-left table-auto shadow-lg shadow-emerald-50 rounded">
									<thead className="text-md text-slate-900 uppercase bg-teal-300">
										<tr>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Pembeli
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Alamat
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Date
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Status
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
														<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
														<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
													</svg>
												</div>
											</th>
										</tr>
									</thead>
									<tbody className="overscroll-auto md:overscroll-contain">
										{
											dataAwalProcess && dataAwalProcess.filter((data) => {
												if(searchProcess === "") {
													return data
												} else if(data.date_pembelian.includes(searchProcess)) {
													return data
												}
											}).map(data => {
												return (
													<tr key={data.id_user} className="bg-emerald-50 border border-emerald-100">
														<td className="px-6 py-2">{data.nama_user}</td>
														<td className="px-6 py-2">{data.alamat}</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																{data.date_pembelian_value}
															</div>
														</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-yellow-500">
																	<path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
																	<path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
																	<path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
																</svg>
															</div>
														</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																<button 
																	type="button" 
																	className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
																	onClick={()=> navigate()}
																>
																	Lihat Data         
																</button>
															</div>
														</td>
													</tr>
												)
											})
										}
									</tbody>
								</table>
							</div>
							<ReactPaginate
								containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
								pageLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								previousLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								nextLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								activeLinkClassName='bg-teal-300'
								breakLabel="..."
								nextLabel="next >"
								onPageChange={handlePageClickProcess}
								pageRangeDisplayed={5}
								pageCount={jumlahHalamanProcess}
								previousLabel="< previous"
								renderOnZeroPageCount={null}
							/>
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className='bg-teal-100 rounded-md py-5'>
							<h1 className='flex justify-center text-2xl font-semibold mb-5 uppercase'>Data Barang Keluar (Pending)</h1>
							<div className='flex justify-center'>
								<div className='flex justify-end items-center mb-2 w-full lg:w-5/6 sm:w-5/6'>
									<input
										type='date'
										className='focus:ring-indigo-500 focus:border-indigo-500 w-40 h-9 mr-3 mt-1 shadow-sm sm:text-sm border-gray-400 rounded-md'
										onChange={(event) => {
											setValueSearchDone(event.target.value)
										}}
									/>
									<button 
										className='mb-1 my-2 cursor-pointer inline-flex justify-center mr-3 py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'
										onClick={()=> setSearchDone(valueSearchDone)}
									>
										Search
									</button>
									<button 
										className='mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
										onClick={()=> setSearchDone("")}
									>
										Reset
									</button>
								</div>
							</div>
							<div className='flex justify-center'>
								<table className="w-full lg:w-5/6 sm:w-5/6 text-md text-left table-auto shadow-lg shadow-emerald-50 rounded">
									<thead className="text-md text-slate-900 uppercase bg-teal-300">
										<tr>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Pembeli
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Alamat
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Date
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													Status
												</div>
											</th>
											<th className="px-6 py-3">
												<div className='flex justify-center'>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
														<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
														<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
													</svg>
												</div>
											</th>
										</tr>
									</thead>
									<tbody className="overscroll-auto md:overscroll-contain">
										{
											dataAwalDone && dataAwalDone.filter((data) => {
												if(searchDone === "") {
													return data
												} else if(data.date_pembelian.includes(searchDone)) {
													return data
												}
											}).map(data => {
												return (
													<tr key={data.id_user} className="bg-emerald-50 border border-emerald-100">
														<td className="px-6 py-2">{data.nama_user}</td>
														<td className="px-6 py-2">{data.alamat}</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																{data.date_pembelian_value}
															</div>
														</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-green-500">
																	<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
																</svg>
															</div>
														</td>
														<td className="px-6 py-2">
															<div className='flex justify-center'>
																<button 
																	type="button" 
																	className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
																	onClick={()=> navigate()}
																>
																	Lihat Data         
																</button>
															</div>
														</td>
													</tr>
												)
											})
										}
									</tbody>
								</table>
							</div>
							<ReactPaginate
								containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
								pageLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								previousLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								nextLinkClassName='rounded py-1 px-2 hover:bg-teal-500 hover:text-white'
								activeLinkClassName='bg-teal-300'
								breakLabel="..."
								nextLabel="next >"
								onPageChange={handlePageClickDone}
								pageRangeDisplayed={5}
								pageCount={jumlahHalamanDone}
								previousLabel="< previous"
								renderOnZeroPageCount={null}
							/>
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
