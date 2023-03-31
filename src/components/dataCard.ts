export async function traer_api() {
	try {
			const star = await fetch('https://swapi.dev/api/people/').then((res) => {
				return res.json();
			});
			console.log("lol",star.results)
            return star.results;
	} catch (error) {
		console.log(error);
	}
}