import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetBarangMasukRequest } from '../redux-saga/actions/BarangMasuk'
import ReactPaginate from 'react-paginate'

export default function BarangMasuk() {
	let navigate = useNavigate()
	const dispatch = useDispatch()

	const { barmas } = useSelector(state => state.barmaState)

	const [search, setSearch] = useState("")
	const [valueSearch, setValueSearch] = useState("")

	const [dataNota, setDataNota] = useState([])
	const [jumlahHalamanNota, setJumlahHalamanNota] = useState(0)
	const [halamanTerkiniNota, setHalamanTerkiniNota] = useState(0)
	const dataPerPage = 5

	useEffect(() => {
		dispatch(GetBarangMasukRequest())
	}, [dispatch])
	
	useEffect(() => {
		const halamanAkhir = halamanTerkiniNota + dataPerPage;
		setDataNota(barmas.nota && barmas.nota.filter((data) => {
			if(search === "") {
				return data
			} else if(data.date_nota.includes(search)) {
				return data
			}
		}).slice(halamanTerkiniNota, halamanAkhir));
		setJumlahHalamanNota(Math.ceil(barmas.nota && barmas.nota.length / dataPerPage));
	}, [halamanTerkiniNota, dataPerPage, barmas, search])

	const handlePageClickNota = (event) => {
		const pilihHalaman = (event.selected * dataPerPage) % barmas.nota.length;
		setHalamanTerkiniNota(pilihHalaman)
	}

	return (
		<div className='w-full h-auto py-5 px-5'>
			<h1 className='flex justify-center text-3xl font-semibold mb-5'>BARANG MASUK</h1>
			<div className='w-full lg:px-64 sm:px-20'>
				<div className='flex justify-between mt-5 mb-2'>
					<div>
						<button
          		type="button" 
      	  		className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
      				onClick={()=> navigate("/barangMasuk/addBarang")}
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
								setValueSearch(event.target.value)
							}}
						/>
						<button 
							className='mb-1 my-2 cursor-pointer inline-flex justify-center mr-3 py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'
							onClick={()=> setSearch(valueSearch)}
						>
							Search
						</button>
						<button 
							className='mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
							onClick={()=> setSearch("")}
						>
							Reset
						</button>
					</div>
				</div>
				<div className='flex justify-center'>
					<table className="w-full text-md text-left table-auto shadow-lg shadow-emerald-50">
						<thead className="text-md text-slate-900 uppercase bg-teal-300">
							<tr>
								<th className="px-6 py-3">Tanggal Barang Masuk</th>
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
								dataNota && dataNota.filter((data) => {
									if(search === "") {
										return data
									} else if(data.date_nota.includes(search)) {
										return data
									}
								}).map(data => {
									return (
										<tr key={data.id_nota} className="bg-emerald-50 border border-emerald-100">
											<td className="px-6 py-2">{data.date_nota_value}</td>
											<td className="px-6 py-2">
												<div className='flex justify-center'>
													<button 
							          		type="button" 
      	 								 		className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
    							  				onClick={()=> navigate(`/barangMasuk/detail/${data.id_nota}`)}
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
					onPageChange={handlePageClickNota}
					pageRangeDisplayed={5}
					pageCount={jumlahHalamanNota}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	)
}
