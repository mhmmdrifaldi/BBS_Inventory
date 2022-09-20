import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetJenisBarangRequest, DelJenisBarangRequest } from '../redux-saga/actions/JenisBarang'
import AddDataBarang from './componentDataBarang/AddDataBarang'
import EditDataBarang from './componentDataBarang/EditDataBarang'
import AddJenisBarang from './componentDataBarang/AddJenisBarang'
import EditJenisBarang from './componentDataBarang/EditJenisBarang'
import swal from 'sweetalert'

export default function DataBarang() {
	const dispatch = useDispatch()
	const [refresh, setRefresh] = useState(false)
	const [id, setId] = useState()
	const [displayAddJebar, setDisplayAddJebar] = useState(false)
	const [displayEditJebar, setDisplayEditJebar] = useState(false)
	const [displayAddDabar, setDisplayAddDabar] = useState(false)
	const [displayEditDabar, setDisplayEditDabar] = useState(false)

	const { jebars } = useSelector(state => state.jebarState)
	
	useEffect(() => {
    dispatch(GetJenisBarangRequest());
		setRefresh(false);
  }, [dispatch, refresh])

	const onEditJebar = (id) => {
		setDisplayEditJebar(true)
		setId(id)
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

	return (
		<div>
			<div>
				{
					displayAddJebar ?
						<AddJenisBarang
							setDisplay={setDisplayAddJebar}
							closeAdd={()=> setDisplayAddJebar(false)}
							onRefresh={()=> setRefresh(true)}
						/>
					:
					displayEditJebar ?
						<EditJenisBarang
							setDisplay={setDisplayEditJebar}
							onRefresh={()=> setRefresh(true)}
							id={id}
							closeAdd={()=> setDisplayEditJebar(false)}
						/>
					:
					displayAddDabar ?
						<AddDataBarang
						
						/>
					:
					displayEditDabar ?
						<EditDataBarang

						/>
					:
					<>
						<div className='flex flex-col lg:flex-row sm:flex-col'>
							<div className='w-full mt-3 pl-5 pr-5 lg:w-2/5 sm:w-full h-auto'>
								<h1 className='flex justify-center text-2xl font-semibold mb-3'>KATEGORI</h1>
								<div className='flex justify-end mb-3 mr-3'>
									<button 
              			type="button" 
              			className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
              			onClick={()=> setDisplayAddJebar(true)}
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
												<th className='px-11'>Kategori</th>
												<th className='px-1'>Setting</th>
											</tr>
										</thead>
										<tbody>
											{
												jebars && jebars.map(data => {
													return(
														<tr key={data.id_jebar} className="border-y-[3px]">
															<td className='flex justify-center items-center py-4'>{data.nama_jebar}</td>
															<td className="px-6">
																<button
        		                      type="button"
            		                  className="cursor-pointer inline-flex justify-center mr-2 py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400" 
                		              onClick={()=> onEditJebar(data.id_jebar)}
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
							</div>
							<div className='w-full lg:w-3/5 sm:w-full bg-green-300 h-[250px]'>

							</div>
						</div>
					</>
				}
			</div>
		</div>
	)
}
