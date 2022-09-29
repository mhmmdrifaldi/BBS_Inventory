import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetOneBarangMasukNotaRequest } from '../../redux-saga/actions/BarangMasuk'

export default function DetailBarangMasuk() {
	let navigate = useNavigate()
	const dispatch = useDispatch()

	const { barmaNota } = useSelector(state => state.barmaState)
	const { id } = useParams()

	useEffect(() => {
		dispatch(GetOneBarangMasukNotaRequest(id))
	}, [dispatch, id])

	const data = barmaNota && barmaNota.map(data => data.date_nota_value)

	return (
		<div className='flex justify-center'>
			<div className='h-auto mt-8 mx-5 lg:left-1/4 sm:mx-10 w-full lg:w-1/2 sm:w-full py-6 px-10 rounded-md shadow-md shadow-gray-500 bg-white'>
				<div className='flex items-center mb-7 pb-2 border-b-2 border-slate-300'>
					<h1 className='mr-3'>Barang Masuk Tanggal : </h1>
					<h1 className='font-semibold'>{data[0]}</h1>	
				</div>
				<div>
					{
						barmaNota && barmaNota.map(data => (
							<div className='flex w-full'>
								<div className='flex w-4/5 mb-5'>
									<div className='w-2/3 mr-5 border-b-2 border-slate-300'>
										<h1>{data.nama_barang}</h1>
									</div>
									<div className='flex w-1/3 border-b-2 border-slate-300'>
										<h1 className='mr-3'>Jumlah Barang :</h1>
										<h1>{data.stock}</h1>
									</div>
								</div>
								<div className='flex justify-center items-start w-1/5'>
									<button
										onClick={()=> navigate(`/barangMasuk/editBarang/${data.id_barma}`)}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-yellow-500 w-6 h-6">
									  	<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
										</svg>
									</button>
								</div>
							</div>
						))
					}
				</div>
				<div className='flex justify-end'>
					<button
          	type="button" 
      	  	className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
      			onClick={()=> navigate("/barangMasuk")}
        		>
            	Ok
          	</button>
				</div>
			</div>
		</div>
	)
}