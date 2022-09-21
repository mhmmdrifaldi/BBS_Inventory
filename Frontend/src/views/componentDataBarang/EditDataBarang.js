import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { GetDataBarangRequest, GetOneDataBarangRequest, EditDataBarangRequest } from '../../redux-saga/actions/DataBarang'
import * as Yup from 'yup'
import swal from 'sweetalert'

export default function EditDataBarang() {
	let navigate = useNavigate()
	const dispatch = useDispatch()
	const { dabar, dabars } = useSelector(state => state.dabarState)
	const { id } = useParams()

	useEffect(() => {
		dispatch(GetDataBarangRequest())
		dispatch(GetOneDataBarangRequest(id))
	}, [dispatch, id])

	const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
			id_jebar: dabar.id_jebar,
      nama_barang: dabar.nama_barang
    },

		validationSchema: Yup.object({
			id_jebar: Yup.number().min(1, "Please select Category").required("Please select Category"),
			nama_barang: Yup.string().required("Nama Barang cannot be empty")
		}),

    onSubmit: async (values) => {
			const dataDabar = dabars.dabar.map(data => data.nama_barang)
			dataDabar.splice(dataDabar.indexOf(dabar.nama_barang), 1)
			const newDataDabar = dataDabar.map(data => data.toLowerCase().split(' ').join(''))
			const namaDabar = values.nama_barang.toLowerCase().split(' ').join('')

			if (newDataDabar.includes(namaDabar)) {
				swal({
					text: "Name already exist. Please use a new name",
					icon: "error",
				});
			} else {
				const payload = {
					id_jebar: values.id_jebar,
					nama_barang: values.nama_barang,
					id_dabar: dabar.id_dabar
				};
				dispatch(EditDataBarangRequest(payload))
				swal({
					text: "Data Succesfully Edited",
					icon: "success",
				});
				navigate("/dataBarang")
			}
    }
  })

	return (
		<div className='fixed h-auto top-[30%] left-1/4 w-1/2 p-7 rounded-md shadow-xl shadow-gray-500 bg-gray-100'>
			<div className='flex w-full mb-3'>
				<div className='w-3/5 mr-5'>
					<label class="my-1 block text-sm font-medium text-gray-700">Nama Barang
						<span className='text-red-600'> * </span>
					</label>
					<input
						class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
						type="text"
						name="nama_barang"
						id="nama_barang"
						value={formik.values.nama_barang}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						autoComplete="nama_barang"
					/>
					{formik.touched.nama_barang && formik.errors.nama_barang ? <span className="mb-2 text-xs text-red-600">{formik.errors.nama_barang}</span> : null}
				</div>
				<div className='w-2/5'>
					<label className='my-1 block text-sm font-medium text-gray-700'>Kategori
						<span className='text-red-600'> * </span> 
					</label>
					<select
						class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
						name="id_jebar"
						id="id_jebar"
						value={formik.values.id_jebar}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						autoComplete="id_jebar"
					>
					<option value="0" selected>--- Choose ---</option>
						{
							dabars.jebar && dabars.jebar.map(data => (
								<option value={data.id_jebar}>{data.nama_jebar}</option>
							))
						}
					</select>
					{formik.touched.id_jebar && formik.errors.id_jebar ? <span className="text-xs text-red-600">{formik.errors.id_jebar}</span> : null}
				</div>
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
					onClick={() => navigate("/dataBarang")}
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
