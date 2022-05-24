const helperFetch = () => {
	let MyFetch = async x => {
		let res = await fetch(x);
		let r = await res.json();
		console.log(r);
	};
	function GET(x) {
		let fetchData = MyFetch(x);
		console.log(fetchData);
	}
	return { GET };
};
helperFetch();
export default helperFetch;
