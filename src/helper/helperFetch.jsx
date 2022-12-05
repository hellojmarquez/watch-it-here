const helperFetch = () => {
	let MyFetch = async x => {
		let err;
		try {
			const res = await fetch(x);
			if (res.ok) {
				return res.json();
			} else {
				return (err = {
					status: res.status,
					statusText: res.statusText || 'Ha ocurrido un error',
				});
			}
		} catch (err) {
			return err;
		}
	};
	function GET(x) {
		return MyFetch(x);
	}
	return { GET };
};
export default helperFetch;
