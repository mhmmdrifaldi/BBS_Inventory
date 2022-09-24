import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetJenisBarangRequest, DelJenisBarangRequest } from '../redux-saga/actions/JenisBarang'
import { GetDataBarangRequest, DelDataBarangRequest } from '../redux-saga/actions/DataBarang'
import swal from 'sweetalert'
import ReactPaginate from 'react-paginate'

export default function DataBarang() {
	let navigate = useNavigate()
	const dispatch = useDispatch()

	const { jebars } = useSelector(state => state.jebarState)
	const { dabars } = useSelector(state => state.dabarState)

	const [refresh, setRefresh] = useState(false)
	const [search, setSearch] = useState("")

	const [dataJebar, setDataJebar] = useState([])
	const [jumlahHalamanJebar, setJumlahHalamanJebar] = useState(0)
	const [halamanTerkiniJebar, setHalamanTerkiniJebar] = useState(0)

	const [dataDabar, setDataDabar] = useState([])
	const [jumlahHalamanDabar, setJumlahHalamanDabar] = useState(0)
	const [halamanTerkiniDabar, setHalamanTerkiniDabar] = useState(0)

	const dataPerPage = 5
	
	useEffect(() => {
    dispatch(GetJenisBarangRequest());
		dispatch(GetDataBarangRequest());
		setRefresh(false);
  }, [dispatch, refresh])

	useEffect(() => {
		const halamanAkhir = halamanTerkiniDabar + dataPerPage;
		setDataDabar(dabars.dabar && dabars.dabar.filter((data) => {
			if(search === "") {
				return data
			} else if(data.nama_barang.toLowerCase().includes(search.toLowerCase())) {
				return data
			}
			if(search === "") {
				return data
			} else if(data.nama_jebar.toLowerCase().includes(search.toLowerCase())) {
				return data
			}
		}).slice(halamanTerkiniDabar, halamanAkhir));
		setJumlahHalamanDabar(Math.ceil(dabars.dabar && dabars.dabar.length / dataPerPage));
	}, [halamanTerkiniDabar, dataPerPage, dabars, search])

	const handlePageClickDabar = (event) => {
		const pilihHalaman = (event.selected * dataPerPage) % dabars.dabar.length;
		setHalamanTerkiniDabar(pilihHalaman)
	}

	useEffect(() => {
		const halamanAkhir = halamanTerkiniJebar + dataPerPage;
		setDataJebar(jebars && jebars.slice(halamanTerkiniJebar, halamanAkhir));
		setJumlahHalamanJebar(Math.ceil(jebars && jebars.length / dataPerPage));
	}, [halamanTerkiniJebar, dataPerPage, jebars, search])

	const handlePageClickJebar = (event) => {
		const pilihHalaman = (event.selected * dataPerPage) % jebars.length;
		setHalamanTerkiniJebar(pilihHalaman)
	}

	const onDeleteJebar = async (id) =>{
		swal({
			text: "Are you sure you want to delete this data?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {
				dispatch(DelJenisBarangRequest(id))
				swal("Data deleted successfully!", {
					icon: "success",
				});
				setRefresh(true)
			}
		});
	}

	const onDeleteDabar = async (id) =>{
		swal({
			text: "Are you sure you want to delete this data?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {
				dispatch(DelDataBarangRequest(id))
				swal("Data deleted successfully!", {
					icon: "success",
				});
				setRefresh(true)
			}
		});
	}

	return (
		<div className='flex flex-col lg:flex-row sm:flex-col'>
			<div className='w-full mt-5 pl-5 pr-5 lg:w-2/5 sm:w-full h-auto'>
				<h1 className='flex justify-center text-2xl font-semibold mb-3'>KATEGORI</h1>
				<div className='flex justify-end mb-3 mr-5 lg:mr-3 sm:mr-[200px]'>
					<button 
          	type="button" 
        		className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
      			onClick={()=> navigate('/dataBarang/addKategori')}
        	>
          	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        			<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      			</svg>
              Kategori         
          </button>
				</div>
				<div className='flex justify-center'>
					<table>
						<thead>
							<tr>
								<th className='px-11'>KATEGORI</th>
								<th className='px-1'>SETTING</th>
							</tr>
						</thead>
						<tbody>
							{
								dataJebar && dataJebar.map(data => {
									return(
										<tr key={data.id_jebar} className="border-y-[3px]">
											<td className='flex justify-center items-center py-4'>{data.nama_jebar}</td>
											<td className="px-6">
												<button
                          type="button"
      	                  className="cursor-pointer inline-flex justify-center mr-2 py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400" 
        		              onClick={()=> navigate(`/dataBarang/editKategori/${data.id_jebar}`)}
                  	    >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    		    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                     		  </svg>
                    		  	Edit
                        </button>
                    		<button
                  			  type="button"
                    			className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400" 
  			                  onClick={()=> onDeleteJebar(data.id_jebar)}
    			              >
          		            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                			      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        	                </svg>
          				        	Deleted
                		    </button>
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
					onPageChange={handlePageClickJebar}
					pageRangeDisplayed={5}
					pageCount={jumlahHalamanJebar}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</div>
			<div className='w-full lg:w-3/5 lg:mt-5 lg:border-none lg:pt-0 sm:w-full sm:mt-10 sm:pt-5 sm:border-t-4 sm:border-black h-auto mt-20 pt-5 border-black border-t-4'>
				<h1 className='flex justify-center text-2xl font-semibold mb-3'>DATA BARANG</h1>
        <div className='flex justify-between mb-1 sm:px-14 lg:px-[67px]'>
					<button 
      			type="button"
          	className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
        		onClick={()=> navigate('/dataBarang/addBarang')}
        	>
          	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        			<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      			</svg>
          		Barang
          </button>
					<div className='flex items-center'>
						<input
							className='h-8 w-[230px] focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-400 rounded-md'
							type='search'
							placeholder='Search By Name or Category'
							onChange={(event) => {
								setSearch(event.target.value)
							}}
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<table className="w-5/6 text-md text-left table-auto shadow-lg shadow-emerald-50">
						<thead className="text-xs text-slate-900 uppercase bg-teal-300">
							<tr>
								<th className="px-6 py-3">Nama Barang</th>
								<th className="px-6 py-3"><div className='flex justify-center'> Kategori </div></th>
								<th className="px-6 py-3"><div className='flex justify-center'> Stock </div></th>
								<th className="px-6 py-3"><div className='flex justify-center'> Setting </div></th>
							</tr>
						</thead>
						<tbody className="overscroll-auto md:overscroll-contain">
							{
								dataDabar && dataDabar.filter((data) => {
									if(search === "") {
										return data
									} else if(data.nama_barang.toLowerCase().includes(search.toLowerCase())) {
										return data
									}
									if(search === "") {
										return data
									} else if(data.nama_jebar.toLowerCase().includes(search.toLowerCase())) {
										return data
									}
								}).map(data => {
									return (
										<tr key={data.id_dabar} className="bg-emerald-50 border border-emerald-100">
											<td className="px-6 py-2">{data.nama_barang}</td>
											<td className="px-6 py-2"><div className='flex justify-center'> {data.nama_jebar} </div></td>
											<td className="px-6 py-2"><div className='flex justify-center'> {data.stock} </div></td>
											<td className="px-6 py-2">
												<div className='flex justify-center'>
													<button
														type="button"
														className="cursor-pointer inline-flex justify-center mr-2 py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400" 
														onClick={()=> navigate(`/dataBarang/editBarang/${data.id_dabar}`)}
													>
														<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
															<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
														</svg>
															Edit
													</button>
													<button
														type="button"
														className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400" 
														onClick={()=> onDeleteDabar(data.id_dabar)}
													>
														<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
															<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
														</svg>
															Deleted
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
					onPageChange={handlePageClickDabar}
					pageRangeDisplayed={5}
					pageCount={jumlahHalamanDabar}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	)
}
