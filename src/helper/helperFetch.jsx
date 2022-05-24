const helperFetch = () => {
	let MyFetch = async x => {
		let response = await fetch(x);
		let jsonResponse = await response.json();
		return { jsonResponse };
	};
	function GET(x) {
		return MyFetch(x);
	}
	return { GET };
};
export default helperFetch;
