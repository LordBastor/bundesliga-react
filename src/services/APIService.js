import fetch from 'isomorphic-unfetch'

var prod_api_url = 'https://ec2-52-221-179-22.ap-southeast-1.compute.amazonaws.com/v1/'
var dev_api_url = 'https://ec2-52-221-179-22.ap-southeast-1.compute.amazonaws.com/v1/'
var api_url

if(process.env.NODE_ENV == 'production')
{
	api_url = prod_api_url
}
else
{
	api_url = dev_api_url
}

export function get(path)
{
	let headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
	return fetch(api_url + path,
		{
			method: 'GET',
			headers: headers,
		}).then(r => {
			return r.json()
		})
}
