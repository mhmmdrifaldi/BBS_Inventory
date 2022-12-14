import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBarangMasukRequest, AddBarangMasukRequest } from '../../redux-saga/actions/BarangMasuk'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import swal from 'sweetalert'

export default function AddBarangMasuk() {
	let navigate = useNavigate()
	const dispatch = useDispatch()
	const { barmas } = useSelector(state => state.barmaState)

	const [inputFields, setInputFields] = useState([
		{ barma_id_dabar: 0, stock: 0 }
	])

	useEffect(() => {
		dispatch(GetBarangMasukRequest())
	}, [dispatch])

	const handleChangeInput = (index, event) => {
		const values = [...inputFields]
		values[index][event.target.name] = event.target.value
		setInputFields(values)
	}

	const handleAddFields = () => {
		setInputFields([...inputFields, { barma_id_dabar: 0, stock: 0 }])
	}

	const handleRemoveFields = (index) => {
		const values = [...inputFields]
		if(values.length > 1) {
			values.splice(index, 1)
			setInputFields(values)
		}
	}
	
	const formik = useFormik({
		initialValues: {
			stock: 0
		},

		onSubmit: async () => {
			const payload = {
				dataBarang: inputFields
			}
			
			dispatch(AddBarangMasukRequest(payload))
			swal({
				text: "Data Succesfully Insert",
				icon: "success",
			});
			navigate("/barangMasuk")
		}
	})

	return (
		<div className='flex justify-center py-14'>
			<div className='h-auto top-[10%] left-[13%] w-3/4 px-5 pt-7 pb-5 rounded-md shadow-xl shadow-gray-500 bg-gray-100'>
				<div className='mb-10'>
					<button
   	  		  type="button" 
  					className="cursor-pointer inline-flex justify-center py-2 px-5 mb-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
      			onClick={()=> handleAddFields()}
		  	  >	
  		  		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    			  	<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  					</svg>
        			Field Input Barang
	  			</button>
					{
						inputFields && inputFields.map((inputFields, index) => (
							<div key={index}>
								<div className='flex flex-col lg:flex-row sm:flex-col w-full mb-3'>
									<div className='flex w-full lg:w-3/4 sm:w-full'>
										<div className='w-3/4'>
											<label className='block'>Barang  <span className='text-red-600'> * </span> </label>
											<select
				 								class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
		 										name="barma_id_dabar"
			 									id="barma_id_dabar"
				 								value={inputFields.barma_id_dabar}
				 								onChange={event => handleChangeInput(index, event)}
						 					>
												<option value="0" selected>--- Choose ---</option>
			 									{
		 											barmas.dabar && barmas.dabar.map(data => (
		 												<option value={data.id_dabar}>{data.nama_barang}</option>
		 											))
		 										}
											</select>
										</div>
										<div className='w-1/4 mx-5'>
											<label className='block'>Stock <span className='text-red-600'> * </span> </label>
											<input
												class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
												type="number"
												name="stock"
												id="stock"
												value={inputFields.stock}
												onChange={event => handleChangeInput(index, event)}
											/>
										</div>
									</div>
									<div className='flex justify-center items-end mt-3 lg:w-1/4 lg:mt-0 sm:w-full sm:mt-3'>								
										<button
   	  		     				type="button" 
    	  							className="cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400" 
      								onClick={()=> handleRemoveFields(index)}
 		 	  						>
  		      					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
												<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
											</svg>
          		    			Field         
	          				</button>
									</div>
								</div>
							</div>
						))
					}
				</div>
				<div className='flex justify-end py-2 text-sm'>
					<button 
						className='mr-5 transition flex items-center text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer pl-2 pr-4 py-1 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						type='submit' 
						onClick={formik.handleSubmit}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
							Save
					</button>
					<button 
						className='transition flex items-center text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer pl-2 pr-4 py-1 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' 
						onClick={() => navigate("/barangMasuk")}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
							Cancel
					</button>
				</div>
			</div>
		</div>
	)
}
