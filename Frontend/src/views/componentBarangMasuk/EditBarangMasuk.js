import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetBarangMasukRequest, GetOneBarangMasukRequest, EditPlusBarangMasukRequest, EditMinusBarangMasukRequest } from '../../redux-saga/actions/BarangMasuk'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert'

export default function EditBarangMasuk() {
	let navigate = useNavigate()
	const dispatch = useDispatch()
	const { id } = useParams()
	const { barmas } = useSelector(state => state.barmaState) 
	const { barma } = useSelector(state => state.barmaState)

	useEffect(() => {
		GetBarangMasukRequest()
		dispatch(GetOneBarangMasukRequest(id))
	}, [dispatch, id])
	
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			barma_id_dabar: barma.barma && barma.barma.barma_id_dabar,
			stock: barma.barma && barma.barma.stock
		},

		validationSchema: Yup.object({
			stock: Yup.number().min(1, "Please input Stock").required("Please input Stock"),
		}),

		onSubmit: async (values) => {
			if(values.stock > barma.barma && barma.barma.stock) {
				const hasil = values.stock - barma.barma && barma.barma.stock;
				const payload = {
					stock: values.stock,
					stockData: hasil,
					id_dabar: barma.barma && barma.barma.barma_id_dabar,
					id_barma: barma.barma && barma.barma.id_barma,
				}
				
				dispatch(EditPlusBarangMasukRequest(payload))
				swal({
					text: "Data Succesfully Insert",
					icon: "success",
				});
				navigate("/barangMasuk")
			} else if(values.stock == barma.barma && barma.barma.stock) {
				swal({
					text: "Data Succesfully Insert",
					icon: "success",
				});
				navigate("/barangMasuk")
			} else {
				const hasil = barma.barma && barma.barma.stock - values.stock;
				const payload = {
					stock: values.stock,
					stockData: hasil,
					id_dabar: barma.barma && barma.barma.barma_id_dabar,
					id_barma: barma.barma && barma.barma.id_barma,
				}
				
				dispatch(EditMinusBarangMasukRequest(payload))
				swal({
					text: "Data Succesfully Insert",
					icon: "success",
				});
				navigate("/barangMasuk")
			}
		}
	})

	return (
		<div className='fixed h-auto top-[25%] lg:left-1/4 sm:left-[10%] left-[10%] lg:w-1/2 sm:w-4/5 w-4/5 p-5 rounded-md shadow-xl shadow-gray-500 bg-gray-100'>
			<div className='flex w-full mb-5'>
				<div className='w-3/4 mr-5'>
					<label className='block'>Barang  <span className='text-red-600'> * </span> </label>
					<select
						disabled
			 			class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
						name="barma_id_dabar"
		 				id="barma_id_dabar"
						value={formik.values.barma_id_dabar}
					>							
						<option value="0" selected>--- Choose ---</option>
		 					{
	 							barmas.dabar && barmas.dabar.map(data => (
									<option value={data.id_dabar}>{data.nama_barang}</option>
		 						))
		 					}
					</select>
				</div>
				<div className='w-1/4'>
					<label className='block'>Stock <span className='text-red-600'> * </span> </label>
					<input
						class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
						type="number"
						name="stock"
						id="stock"
						value={formik.values.stock}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						autoComplete="stock"
					/>
					{formik.touched.stock && formik.errors.stock ? <span className="text-xs text-red-600">{formik.errors.stock}</span> : null}
				</div>
			</div>
			<div className='flex justify-end'>
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
	)
}
