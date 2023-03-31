export async function traer_api() {
	try {
			const star = await fetch('https://swapi.dev/api/people/1/').then((res) => {
				return res.json();
			});
			console.log(star)
           return star.results;
	} catch (error) {
		console.log(error);
	}
}