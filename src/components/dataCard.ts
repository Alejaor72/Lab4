export async function traer_api() {
	try {
			const star = await fetch('https://hp-api.onrender.com/api/characters').then((res) => {
				return res.json();
			});
			console.log("lol",star)
            return star;
	} catch (error) {
		console.log(error);
	}
}