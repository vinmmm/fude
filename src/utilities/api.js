var api = {
	getRovers(){
		var url = 'https://aircheapapi.pro-react.com/airports';
		return fetch(url).then((res) =>res.json());
	}
};

module.exports = api;