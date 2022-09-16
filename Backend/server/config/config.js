const config = {
	env : process.env.NODE_ENV || 'dev',
	port : 3001,
	db_name : 'BBS_Inventory',
	db_username : 'postgres',
	db_password : 'admin',
	URL_DOMAIN: '/bbsinventory',
  URL_IMAGE: '/bbsinventory/images/',
  URL_API: '/bbsinventory/api',
  UPLOAD_DIR: '/storages'
}
export default config