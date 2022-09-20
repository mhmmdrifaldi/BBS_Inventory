import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { GetOneJenisBarangRequest, EditJenisBarangRequest } from '../../redux-saga/actions/JenisBarang'
import * as Yup from 'yup'
import swal from 'sweetalert'

export default function EditJenisBarang() {
	let navigate = useNavigate()
	const dispatch = useDispatch()
	const { jebar } = useSelector(state => state.jebarState)
	const { id } = useParams()

	console.log(id);

	useEffect(() => {
		dispatch(GetOneJenisBarangRequest(id))
	}, [dispatch, id])
	
	const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nama_jebar: jebar.nama_jebar
    },

    onSubmit: async (values) => {
      const payload = {
        nama_jebar: values.nama_jebar,
        id_jebar: jebar.id_jebar
      };
      dispatch(EditJenisBarangRequest(payload))
			swal({
				text: "Data Succesfully Edited",
				icon: "success",
			});
      navigate("/dataBarang")
    }
  })
	
	return (
		<div className='fixed h-44 top-[30%] left-1/4 w-1/2 p-7 rounded-md shadow-xl shadow-gray-500 bg-gray-100'>
			<div className='mb-3'>
        <label class="my-1 block text-sm font-medium text-gray-700">Kategori
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="text"
          name="nama_jebar"
          id="nama_jebar"
          value={formik.values.nama_jebar}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="nama_jebar"
        />
        {formik.touched.nama_jebar && formik.errors.nama_jebar ? <span className="mb-2 text-xs text-red-600">{formik.errors.nama_jebar}</span> : null}
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